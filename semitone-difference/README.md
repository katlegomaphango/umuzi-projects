# project: semitone difference - basic algorithm

## [Part 1 : Basic Algorithm](http://syllabus.africacode.net/projects/semitone-challenge/basic-algorithm/index.html)

## Set up your environment: Javascript

Your directory structure should look like this.

```
├── spec
|   ├── support
|   |   └── jasmine.json
|   └── jam_buddy_spec.js
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

- <https://www.justinguitar.com/guitar-lessons/the-note-circle-bc-152>
- <https://www.justinguitar.com/guitar-lessons/note-circle-with-a-jam-buddy-mt-106>

What we want to do, is build a simple application that a musician can use to test their music theory skills.

In the second video, Justin talks about a game that you can play with a jam buddy. Your buddy picks two notes from the note circle and tells them to you, then you tell your buddy how many semi-tones separates those notes. That is basically what we are building here.

The final goal is to have a program that outputs two notes from the note circle and then allows the user to enter a number. The program needs to be able to tell the user if they chose the correct number or not.

## Instructions

Make a class called ``JamBuddy``. A JamBuddy instance should be able to keep track of the currently selected notes.

It should have the following functions:

- ``set current notes``: This should take an array/list of 2 notes as an argument. Each note is a string. If an incorrect note is passed in, for example ``B#``, then raise/throw an Error/Exception with an appropriate error message
- ``get current notes``: This should return an array/list of the currently selected notes
- ``randomize current notes``: This will pick 2 notes at random and then store them in the JamBuddy instance. It should never select 2 of the same note
- ``check answer``: This should take in an integer and return a boolean true if the answer is correct and false if the answer is incorrect. Note that since the note circle is a circle, there will always be 2 correct answers. For example, the distance between ``A`` and ``A#`` is 1 if you go clockwise, and 11 if you go anti-clockwise. Both answers are correct.

For now don’t worry about “flat” notes. The game will only be played with the following notes:

```
A A# B C C# D D# E F F# G G#
```

### Example usage

Here is some pseudo code

```
buddy = new JamBuddy()
buddy.randomizeCurrentNotes()
buddy.getCurrentNotes() # let's say this returns ['C','D#']
buddy.checkAnswer(1) # This will return a boolean False
buddy.checkAnswer(2) # False again
buddy.checkAnswer(3) # This is correct, so it returns True
buddy.checkAnswer(9) # This is also correct => True

buddy.setCurrentNotes(['A','A#'])
buddy.getCurrentNotes() # this will return ['A','A#']
buddy.checkAnswer(1) # returns a boolean True
```

## [Part 2 : Advanced Algorithm](https://syllabus.africacode.net/projects/semitone-challenge/advanced-algorithm/index.html)

Adjust your JamBuddy class so that it can handle flats and sharps.

As usual, unit tests are a must.

## [Part 3.1 : Make a simple GUI](https://syllabus.africacode.net/projects/semitone-challenge/gui-part-1/index.html)

Create a basic web site that a user can use to interact with the JamBuddy class.

If you are required to do this in a web framework then do so, otherwise create a simple ``index.html`` page that a user can just open in their browser. This file should be in the root directory of your repo.

## User experience

- When the user opens the web page they should immediately see 2 random notes, they should be able to immediately start playing the game
- There should be a button that lets the user randomize the notes. Clicking on this button will choose another 2 random notes and display them to the user
- the user should be able to enter their answer. Make use of a form input and a button
- if the user enters the correct answer then display a success message
- if the user enters an incorrect answer then display a message. Let the user keep trying if they get the answer wrong, do not automatically randomize the notes.

## UI

We don’t need you to win any design awards here, but put some effort into the looks. If you make anyone’s eyes bleed that will be a problem.

Here are a few tools you might want to explore:

Tailwind Just use the CDN to keep it simple for now

- Bootstrap
- You can also do your own styling from scratch.

Also, think about the user! Imagine a musician using this thing in order to learn music. If your site is confusing then people won’t use it, they’d just get annoyed and leave.

**Bad UX is a bug**! Make sure your user knows how to use your application and make it really obvious.

## Unit tests

Make sure you unit test your website, even your DOM manipulations.

This is useful: <https://github.com/jsdom/jsdom>

When testing your DOM, don’t just check that your boring html exists. Make sure that when the “Get random notes” button is clicked then the right DOM elements get updated. Tests do not exist to take up space, they exist to make sure your code actually works.

### Take note

The JamBuddy class should still work correctly in the terminal and should not be mixed up with frontend DOM manipulation.

## [Part 3.2 : A gui that is more... awesome](https://syllabus.africacode.net/projects/semitone-challenge/gui-part-2/index.html)

Extend your simple gui with the following behavior:

1. Add a button that lets the user give up. If the user clicks on this button then ALL the notes (A, A#, B,…) should be displayed. The currently selected notes should be highlighted and the final answer should be displayed on the screen. The user should clearly see how the answer was calculated.
2. The user should be able to restart the game and generate new notes. If the game restarts then of course the explanation from (1) should disappear.
3. If the user submits the correct answer then the “explanation” should be populated with the currently selected notes highlighted. The user should be congratulated.
4. Keep track of how many correct answers the user gets in a row and display this answer on the screen. This is referred to as a streak. Have some pseudocode:

```
user accesses gui for first time
gui displays: "Streak: 0"
user gets correct answer
gui displays: "Streak: 1"
user gets correct answer
gui displays: "Streak: 2"
user gets correct answer
gui displays: "Streak: 3"
user gets wrong answer
gui displays: "Streak: 0"   <<< the streak is reset to zero because the user got the answer wrong
```
