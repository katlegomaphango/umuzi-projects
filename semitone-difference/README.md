# [project: semitone difference - basic algorithm](http://syllabus.africacode.net/projects/semitone-challenge/basic-algorithm/index.html)

## Set up your environment: Javascript

Your directory structure should look like this.

```
├── spec
|   ├── support
|   |   └── jasmine.json
|   └── ???
├── src
|   └── jam_buddy.js
└── package.json
```

**Note:** Please export your class using the following syntax at the end of the code:

```
module.exports = { className }
```

## Introduction
This is the first step in a multi-step project designed to level up many different skills.

We want to see the following skills demonstrated in different parts of this project:

- Code structure
- Functions
- Loops
- Conditions
- Datatypes
- Operators
- DOM manipulation

Make sure you test your work!

## Ok… so what is a semitone?

I’m glad you asked. Take a look at these links:

- https://www.justinguitar.com/guitar-lessons/the-note-circle-bc-152
- https://www.justinguitar.com/guitar-lessons/note-circle-with-a-jam-buddy-mt-106

What we want to do, is build a simple application that a musician can use to test their music theory skills.

In the second video, Justin talks about a game that you can play with a jam buddy. Your buddy picks two notes from the note circle and tells them to you, then you tell your buddy how many semi-tones separates those notes. That is basically what we are building here.

The final goal is to have a program that outputs two notes from the note circle and then allows the user to enter a number. The program needs to be able to tell the user if they chose the correct number or not.