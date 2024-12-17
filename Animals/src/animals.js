const errorMessages = {
    notAnAnimal: "You can only adopt an instance of Animal",
    alreadyAdopted: "This pet is already adopted in this home. Can not adopt the same pet twice in one home",
    alreadyHasHome: (name) => `The dog: ${name} already has a home. Dogs can only have one home`,
    notInHome: "This pet is not adopted in this home",
}

class Animal {
    #name
    
    constructor(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }

    sound() {
        return 'sound...'
    }

    eat() {
        return `${this.#name} eats`
    }
}

class Dog extends Animal {
    constructor(name = "Rax") {
        super(name)
        this.isAdopted = false
    }

    sound() {
        return "Bark"
    }
}

class Cat extends Animal {
    constructor(name = "Stormy") {
        super(name)
    }

    sound() {
        return "Meow"
    }
}

class Home {
    constructor() {
        this.pets = []
    }

    adoptPet(pet) {
        if(!(pet instanceof Animal)) throw new Error(errorMessages.notAnAnimal)

        if(this.pets.includes(pet)) throw new Error(errorMessages.alreadyAdopted)

        if(pet instanceof Dog) {
            if(pet.isAdopted) {
                throw new Error(errorMessages.alreadyHasHome(pet.getName()))
            } else {
                pet.isAdopted = true
            }
        }

        this.pets.push(pet)
        return this.pets.length
    }

    removePet(pet) {
        if (!this.pets.includes(pet)) throw new Error(errorMessages.notInHome)

        if (pet instanceof Dog) pet.isAdopted = false

        const index = this.pets.indexOf(pet)
        this.pets.splice(index, 1)
        return this.pets.length
    }

    makeAllSounds() {
        const petSounds = []
        for(const pet of this.pets) {
            petSounds.push(pet.sound())
        }
        return petSounds
    }
}

module.exports = { Dog, Cat, Home, Animal, errorMessages }