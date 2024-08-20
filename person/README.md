# project: Person

## Instructions

Create a ```class``` called ```Person.```

Your ```Person``` class should have the following attributes:

- name
- age
- gender
- interests. This is a list or array of strings.

Give your ```Person``` class a ```hello``` function:

Example usage:

```
    const person = new Person({ // Take note of the curly brackets here
    name: "Ryan",
    age: 30,
    gender: "male",
    interests: ["being a hardarse", "agile", "SSD hard drives"],
    });
    const greeting = person.hello();
    console.log(greeting);
```

This should output:

```
    Hello, my name is Ryan, my gender is male and I am 30 years old. My interests are being a hardarse, agile and SSD hard drives.
```

In other words, the ```hello``` function should return a string.

## Important notes on sentence structure

The sentence describing the ```Person```’s interests should have a different format depending on how many interests that person has. Here are a few examples:

- ```My interests are being a hardarse, agile and SSD hard drives.```
- ```My interests are tea and cake.```
- ```My interest is puppies.```
- ```I have no interests.```

Pay very careful attention to the format of the strings above. Where are the commas? Which ones have an “and”? What other punctuation is there? Learn to pay attention to the fine details.

Make sure that the ```hello``` function returns EXACTLY the correct string. The format should match the examples above.

## Push your understanding

Try to answer the following questions for yourself:

- In OOP there is a concept called “Abstraction”. Do you know how abstraction relates to this project?
- What is a constructor function?
- When is a constructor called?
- Can you construct multiple instances of the same class?
- What is the difference between a class and an object?
