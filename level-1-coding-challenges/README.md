# project: Level 1 coding challenges

These exercises are here to help you test out and demonstrate your knowledge of the basic flow control mechanisms and syntax for your language. These exercises are relevant whether you are doing Java, JavaScript, Python, Kotlin or any other modern language.

Please follow best practices when doing this work!

- Use git: push your code every day! Maybe even a few times every day. If you don’t back up your work and something terrible happens to your computer then you will not be granted an extension. Make sure your commit messages make sense.
- Be careful about how you name your functions and variables. Be consistent, clear and call it what it is. Any fool can write code that a machine can understand but professionals write code that people can understand.

## Note

- The exercises below are meant to be language-agnostic. If we use the word print in an exercise description then we mean output it to the terminal/console/stdout. We don’t mean print to a printer, and we don’t want a gui. These exercises just spit out some text.

- If we say a function takes an input then we don’t mean you should ask the user to type something. What we need is a function parameter or argument.

- Accuracy is very important. If a task requires you to print, the output should be exactly as shown in the examples. Unnecessary spaces or newlines will get you marked wrong and taken back.

## Function naming conventions

Please follow standard naming conventions for the language you are using. For example if we say a function is named ```isSixtyThree``` then that is a totally valid name in Javascript.

```
├── task1.js
├── task2.js
├── task3.js
...
```

Remember to export each of your functions in each of the files using the format:

```
module.exports = { yourFunction };
```

Please don’t submit any HTML or CSS. Please don’t use ```document.write.``` We are interested in seeing how you implement these algorithms. Use ```console.log``` if you are asked to print things.

## Task 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Write a function ```multiples```, it should take in a single integer parameter. The function should print out the sum of the multiples as described above.

eg:

```
multiples(10) // prints 23
multiples(11) // prints 33
```

## Task 2

Write a function called ```hasThree``` that takes 2 positive integers as input.

If either of the numbers is 3 and the sum of the numbers contains a 3 then return a **boolean** true. Otherwise, return false.

Make sure you know what a boolean is, if you return a string then that would be incorrect.

Remember to choose the best function name for the language you are working in.

## Task 3

Write a function called ```isSixtyFive``` that takes 2 numbers as input.

If either of the numbers is 65, or if the sum of the numbers is 65 then return a **boolean** true. Otherwise, return false.

Make sure you know what a boolean is, if you return a string then that would be incorrect.

## Task 4

Write a function ```square```. It takes in an integer and then prints out a square using the hash character.

For example, ```square(2)``` should print:

```
##
##
```

For example, ```square(4)``` should print:

```
####
####
####
####
```

## Task 5

Write a function ```triangle``` that takes in an Integer and prints a triangle accordingly, ```triangle(2)``` should print:

```
#
##
```

For example, ```triangle(4)``` should print:

```
#
##
###
####
```

If negative numbers are input then the triangle should be upside down.

For example, ```triangle(-2)``` should print:

```
##
#
```

For example, ```triangle(-4)``` should print:

```
####
###
##
#
```

## Task 6

Write a function ```longest``` that takes in an array/list of strings and then prints out the longest one.

For example, ```longest(["the", "quick", "brown", "fox", "ate", "my", "chickens"])``` should print:

```
chickens
```

If there are multiple longest strings then print them all.

For example, ```longest(["once", "upon", "a", "time"])``` should print:

```
once
upon
time
```

Note that each word is printed on a new line and there are no blank lines in between the words.

## Task 7

Write a function ```combine``` that combines two lists/arrays by taking alternate elements and returns the result.

Your ```combine``` function should be able to work with lists/arrays of unequal size.

If you are doing this project in Java then your function arguments should be Arrays of Integers, and your function should return an Array of Integers.

For example, ```combine([11,22,33,45], [1,2,3])``` should return:

```
[11,1,22,2,33,3,45]
```

Note that the order of the final output matters. The integers in the final output must be in the same order as they were in the input. For example, ```combine([12, 4, 2], [1, 5, 3])``` should return:

```
[12,1,4,5,2,3]
```
