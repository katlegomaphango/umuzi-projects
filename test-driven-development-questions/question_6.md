# Question

6. Take a look at the following code snippets:
```
// javascript

expect(warningColour).toBe("orange")
expect(warningColour).not.toBe("blue")
```
  Only one of the assertions/expectations is useful and the other one adds no value. Please say which line should be removed and explain why.

# Answer

```expect(warningColour).not.toBe("blue")```
Is the line that should be removed because it adds no value, a positive assertion directly confirms the expected outcome.
