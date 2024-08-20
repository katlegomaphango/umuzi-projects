class Person {

    constructor( { name, age, gender, interests } ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    hello() {

        let interestsStr;
        let isInterestsEmpty = true;

        for (let i = 0; i < this.interests.length; i++) {
            if (this.interests[i].trim() !== '') {
                isInterestsEmpty = false;
                break;
            }
        }

        if(isInterestsEmpty) {
            interestsStr = "I have no interests"
        } else {
            if(this.interests.length > 1) {
                interestsStr = this.interests.slice(0, -1).join(', ') + ' and ' + this.interests[this.interests.length - 1];
                interestsStr = `My interests are ${interestsStr}`;
            } else {
                interestsStr = `My interest is ${this.interests[0]}`;
            }
        }

        return `Hello, my name is ${this.name}, my gender is ${this.gender} and I am ${this.age} years old. ${interestsStr}.`;
    }

}

module.exports = { Person };