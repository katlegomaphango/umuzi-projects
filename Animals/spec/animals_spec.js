const { Cat, Dog, Home, Animal, errorMessages } = require('../src/animals')

describe("Animal class", () => {
    let animal;
    beforeEach(() => { animal = new Animal("Tiger")})

    it("should set name via constructor", () => {
        expect(animal.eat()).toBe("Tiger eats")
    })

    it("should return generic sound", () => {
        expect(animal.sound()).toBe("sound...")
    })

    it("should not expose private name property", () => {
        expect(animal.name).toBeUndefined()
    })

    it("should return the name via getName method", () => {
        expect(animal.getName()).toBe("Tiger")
    })
})

describe("Cat class", () => {
    let cat;
    beforeEach(() => { cat = new Cat() })

    it("should set default name to 'Stormy'", () => {
        expect(cat.getName()).toBe("Stormy")
    })

    it("should set name via constructor", () => {
        cat = new Cat("Whiskers")
        expect(cat.getName()).toBe("Whiskers")
    })

    it("should return 'Meow' sound", () => {
        expect(cat.sound()).toBe("Meow")
    })

    it("should return 'Stormy eats' sound", () => {
        expect(cat.eat()).toBe("Stormy eats")
    })

    it("should not expose private name property", () => {
        expect(cat.name).toBeUndefined()
    })
})

describe("Dog class", () => {
    let dog;

    beforeEach(() => { dog = new Dog() })

    it("should set default name to 'Rax'", () => {
        expect(dog.getName()).toBe("Rax")
    })

    it("should set name via constructor", () => {
        dog = new Dog("Buddy")
        expect(dog.getName()).toBe("Buddy")
    })

    it("should return 'Bark' sound", () => {
        expect(dog.sound()).toBe("Bark")
    })

    it("should return 'Rax eats' sound", () => {
        expect(dog.eat()).toBe("Rax eats")
    })

    it("should not expose private name property", () => {
        expect(dog.name).toBeUndefined()
    })
})

describe("Home class", () => {
    let home1, home2, dog, cat, notAnAnimal

    beforeEach(() => { 
        home1 = new Home() 
        home2 = new Home()
        dog = new Dog()
        cat = new Cat()
        notAnAnimal = {}
    })

    it("should adopt a pet", () => {
        expect(home1.adoptPet(dog)).toBe(1)
    })

    it("should not adopt the same pet twice", () => {
        home1.adoptPet(dog)
        expect(() => home1.adoptPet(dog)).toThrowError(errorMessages.alreadyAdopted)
    })

    it("should adopt a dog to one home", () => {
        home1.adoptPet(dog)
        expect(() => home2.adoptPet(dog)).toThrowError(errorMessages.alreadyHasHome("Rax"))
    })

    it("should allow a cat to have multiple homes", () => {
        expect(home1.adoptPet(cat)).toBe(1)
        expect(home2.adoptPet(cat)).toBe(1)
    })

    it("should only adopt instances of Animal", () => {
        expect(() => home1.adoptPet(notAnAnimal)).toThrowError(errorMessages.notAnAnimal)
    })

    it("should remove an adopted pet", () => {
        home1.adoptPet(dog)
        expect(home1.removePet(dog)).toBe(0)
    })

    it("should not remove a pet that was not adopted", () => {
        expect(() => home1.removePet(dog)).toThrowError(errorMessages.notInHome)
    })

    it("should remove one pet and keep the other(s)", () => {
        home1.adoptPet(dog)
        home1.adoptPet(cat)
        expect(home1.removePet(dog)).toBe(1)
    })

    it("should make all pets produce their respective sounds", () => {
        home1.adoptPet(dog)
        home1.adoptPet(cat)
        expect(home1.makeAllSounds()).toEqual(["Bark", "Meow"])
    })

    it("should return an empty array if no pets adopted", () => {
        expect(home1.makeAllSounds()).toEqual([])
    })
})