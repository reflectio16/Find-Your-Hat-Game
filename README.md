# Find Your Hat

## Overview

"Find Your Hat" is an interactive terminal game built with JavaScript. The player has lost their hat in a field full of holes and must navigate back to it without falling into any holes or stepping outside the field.

## Features

- Navigate through a field represented by a grid.
- Avoid holes (`O`) and find your hat (`^`).
- The player's path is marked with `*`.
- The game ends when the player finds the hat, falls into a hole, or moves out of bounds.

## Setup

### Prerequisites

- Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/find-your-hat.git

## How to Play

### Run the game:
node main.js

### Follow the on-screen prompts to navigate the field:

- U to move up
- D to move down
- L to move left
- R to move right

The game will print the current state of the field after each move. The game ends when you:

- Find your hat (^).
- Fall into a hole (O).
- Move out of bounds.

### Example
*░░░O░

░O░░O░

O░░^░O

Which way? (U = up, D = down, L = left, R = right): 


## Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
