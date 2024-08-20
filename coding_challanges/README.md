# PROJECT: CODING APTITUDE ASSESSMENT CHALLENGE

## TASK 1

Write a function that simply prints the string “Hello World!”.

### Javascript

If you have been asked to do these tasks in JavaScript then you must use the console.log function to print the string.

For example:
``` console.log("something") ```

#### Check your understanding!

- What does it mean to “print”?
- What is a function?
- What does it mean to call a function?
- What is a string? How does that compare to integers?
- Can you run your own code? Does it work?
- What is a function argument?

## TASK 2

This task is very similar to task 1.

Write a function that takes in a single optional parameter. It should work like this:

- ```task2("Sally")``` should print ```Hello Sally!```. Note that we are passing in a single string
- ```task2("Tshepo")``` should print ```Hello Tshepo```!
- ```task2()``` should print ```Hello Friend!```. Note that we are passing in no arguments here.

### Check your understanding!
- How do function arguments/parameters work?
- What happens if you pass in too many arguments?
- How do you make an argument optional?
- How do you join multiple strings together?
- Did you use an if statement here? How was it used?
- If you used an if statement, what happens if you don’t fill in the ```else``` part?
- when are multiple strings considered equal? Would this be true or false: ```"Hello Sally" == "Hello, Sally"``` (try it yourself to see).

## TASK 3

Write a function that takes in a single number. It should ```return``` the string ```even``` if the number is even, and the string ```odd``` if the number is odd.

Example usage:

- ```task3(44)``` should return ```even```
- ```task3(1)``` should return ```odd```

### Did you know that…

Most self-taught coders don’t know the difference between print and return. Make sure that you understand the difference. It really matters a lot if you want to build anything significant.

### Check your understanding!

- what does it mean for a function to ```return``` something?
- how is ```return``` different from printing?
- would you know how to write a function that tells if a number is divisible by 6?

## TASK 4

Write a function that takes in three integer numbers. These numbers represent the lengths of the sides of a triangle. The function should calculate the area of a triangle, and then round the area down to the nearest integer value. The final answer should be <b>returned</b>.

If the answer is a floating point number then round down. For example if the area if 6.99999 then you should return 6.

Example usage:

- ```task4(3, 4, 5)``` should return ```6```
- ```task4(7, 8, 10)``` should return ```27```

### Check your understanding!

- how would you write a function that calculates the area of a square?
- how would you write a function that calculates the area of a rectangle?

## TASK 5

Write a function that takes in three numbers(integers) and **returns** the maximum number.

Do this without using any built-in methods. Write your own logic from scratch.

The function should expect 3 numbers(integers), not an array or list.

```
task5([1,2,3])  // BAD - this function accepts an array/list which is wrong
task5(1,2,3)  // GOOD - this accepts three numbers just like we need it to.
```

Example usage:

- ```task5(1,2,3)``` should return ```3```
- ```task5(-1,-2,-3)``` should return ```-1```
- ```task5(2,2,2)``` should return ```2```

### Check your understanding

- Which number is bigger: -1 or -12?
- Which number is bigger: -1 or 0?
- What would you need to do differently in your code if you did accept an array or list?
- Are there built-in functions that can calculate the maximum number? How about the minimum number?
- How do you think you benefit from writing these kinds of functions yourself? What do you think we are testing for?
- You made use of ```>``` or ```<``` operators. What other comparison operators are there?
- can you think of how you would solve this problem using a loop?
- can you think of how you would solve this problem without using a loop?

## TASK 6

Write a function that can take in any number of numbers(integers). It should **return** the maximum number from those numbers.

Do this without using built-in methods. Write your own logic from scratch.

Again, the function should expect a bunch of numbers as input, not an array or list.

```
    task6([1,2,44,3])  // BAD
    task6(1,2,44,3)    // GOOD
```

Example usage:

- ```task5(1,2,44,3)``` should return ```44```
- ```task5(-1,-2,-44,-3,-5)``` should return ```-1```
- ```task5(8,8,8,8,8,8,8)``` should return ```8```

### Check your understanding

- what kinds of loops do you know of? What are they for? How do they differ?
- will your code work if there are 50 numbers passed into your function?
- will it work if there are negative and positive numbers passed in?
- can it handle the number zero?

## TASK 7

Write a function that takes in a number representing the temperature in Celsius and **return** the temperature in Fahrenheit.

Example usage:

- ```task7(60)``` should return ```140```
- ```task7(0)``` should return ```32```
- ```task7(-10)``` should return ```14```

### Check your understanding

Will the following calculations give different results? Try to predict the answer before opening up a terminal and checking for yourself.

```
1 + 2 / 3 * 4
(1 + 2) / 3 * 4
4 * 1 + (2 / 3)
```

Try a few things out and make sure you understand the order of operations

## TASK 8

Make a function to convert a number representing minutes into hours and minutes. It should **return** a string showing the number(s) of hours and minutes.

Pay very close attention to the format of the string that is returned:

- ```task8(71)``` should return ```1 hour, 11 minutes```
- ```task8(133)``` should return ```2 hours, 13 minutes```
- ```task8(1)``` should return ```0 hours, 1 minute```

**Most people get this question wrong!**

Coders are precise so it is important to focus here. The output should show the number of hours and minutes, and it should make proper use of singulars and plurals.

### Check your understanding

- how is this similar to task 4? What lessons are you re-using here?
- can you think of different numbers you can pass into your function in order to test that it is working? Eg, what should ```task8(0)``` do? Does it do the right thing?
- imagine you were checking to see if someone else’s code worked. What numbers would you pass in? What should the output be? Can you test your own code in the same way?
- when should the word “minute” be used? When should the word “minutes” be used?
- how about “hour” and “hours”

## TASK 9

Write a function that takes in a string and then **returns** all the vowels in the string.

The returned vowels should be:

- lowercase
- in alphabetical order

If a vowel appears twice in the input string then it should appear twice in the output.

### Example usage

- ```task9("Hello there Andy")``` should return ```[a, e, e, e, o]```
- ```task9("xyz")``` should return ```[]```

### Check your understanding

- How would you change your code if you wanted to handle multiple strings?
- How would you change your code if you wanted to look for numbers or special characters?
- If you used a loop then what kind of loop did you use and why?
- How would you change your code if you wanted to return 2 lists/arrays: one with all the vowels and one with all the consonants
- How would you change your code if we just wanted to count how many vowels were in the string?
- Play with these ideas, challenge yourself and grow :)

## TASK 10

Make a function that takes two strings as input, and **print** the common letters that they share.

The printed letters should:

- be lowercase
- be in alphabetical order
- appear as a single string. Please see the example to see the format of the string
- There should only be letters in your result, no whitespace, numbers, or special characters

### Example usage:

- ```task10("House","computers")``` should print ```e, o, s and u``` exactly. If it prints ```eosu``` then that would be incorrect.
- ```task10("Hi","there")``` should print ```h```
- ```task10("Foo","bar")``` should print ```no common letters```

### Check your understanding

- What should the output look like if there are only 2 common characters? How can you check that your code handles this condition?
- What should the output look like if there are 3 common characters? How can you check that your code handles this condition?
- What other special cases are there? How can you check if they work?
