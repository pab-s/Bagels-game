# Bagels-game
The computer game Bagels was created by Resek and Rowe from the Lawrence Hall of Science in Berkeley, California. In the game of Bagels, you must guess the number that the computer is thinking of.

The computer generates a three digit number where each digit must be unique. You are provided with 20 turns to guess the number. The computer can give the following hints in response to each guess:

Pico - One digit correct but in the wrong position.
Fermi - One digit correct and in the right position.
Bagles - No digits correct.
Imagine that the computer is thinking of the number 398. Here are some sample responses:

435 - Pico (because 3 is a correct digit in the wrong position).
387 - Fermi Pico (because 3 is a correct digit in the right position but 8 is a correct digit in the wrong position).
419 - Bagels (because none of the digits are correct).
839 - Pico Pico Pico (because all of the digits are correct but in the wrong position).
So a game of Bagels might go like this:

-- Turn 1 ---

You: 123

Computer: Pico

-- Turn 2 ---

You: 213

Computer: Fermi

-- Turn 3 ---

You: 273

Computer: Fermi Pico 

-- Turn 4 ---

You: 257

Computer: You got it!

-----

In theory, you should be able to guess the number in 8 moves. If you don't guess the number in 20 moves then you lose.
