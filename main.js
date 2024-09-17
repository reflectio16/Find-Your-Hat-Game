const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
        this.playerPosition = { x: 0, y: 0 };  // Player starts at top-left corner
    }

    // Method to print the field to the console
    print() {
        this.field.forEach(row => console.log(row.join('')));
    }

    // Method to move the player based on input
    movePlayer(direction) {
        let { x, y } = this.playerPosition;

        // Update player's position based on direction
        switch (direction) {
            case 'U':  // Move up
                y -= 1;
                break;
            case 'D':  // Move down
                y += 1;
                break;
            case 'L':  // Move left
                x -= 1;
                break;
            case 'R':  // Move right
                x += 1;
                break;
            default:
                console.log('Invalid input! Use U (up), D (down), L (left), R (right).');
                return;
        }

        // Check if player is out of bounds
        if (y < 0 || y >= this.field.length || x < 0 || x >= this.field[0].length) {
            console.log('You moved out of bounds! Game Over.');
            return false;
        }

        // Check if player falls into a hole
        if (this.field[y][x] === hole) {
            console.log('Oh no, you fell into a hole! Game Over.');
            return false;
        }

        // Check if player finds the hat
        if (this.field[y][x] === hat) {
            console.log('Congratulations, you found your hat!');
            return false;
        }

        // Update the field with the new player position
        this.field[this.playerPosition.y][this.playerPosition.x] = fieldCharacter;  // Mark the previous position
        this.playerPosition = { x, y };  // Update player's current position
        this.field[y][x] = pathCharacter;  // Mark new position with *

        return true;  // Continue the game
    }

    // Static method to generate a random field
    static generateField(height, width, percentageOfHoles) {
        const field = new Array(height).fill(0).map(() => new Array(width).fill(fieldCharacter));
        const totalCells = height * width;
        const numberOfHoles = Math.floor((percentageOfHoles / 100) * totalCells);

        // Randomly place holes
        for (let i = 0; i < numberOfHoles; i++) {
            let x, y;
            do {
                x = Math.floor(Math.random() * width);
                y = Math.floor(Math.random() * height);
            } while (field[y][x] !== fieldCharacter || (x === 0 && y === 0));  // Don't place a hole at the starting point
            field[y][x] = hole;
        }

        // Randomly place the hat
        let hatX, hatY;
        do {
            hatX = Math.floor(Math.random() * width);
            hatY = Math.floor(Math.random() * height);
        } while (field[hatY][hatX] !== fieldCharacter);  // Don't place the hat on a hole or start
        field[hatY][hatX] = hat;

        // Starting point for the player
        field[0][0] = pathCharacter;

        return field;
    }
}




// Game loop
const myField = new Field(Field.generateField(10, 10, 20));  // Generate a 10x10 field with 20% holes

let playing = true;
while (playing) {
    myField.print();  // Show the current field
    const direction = prompt('Which way? (U = up, D = down, L = left, R = right): ') || ' ';  // Get user input
    playing = myField.movePlayer(direction);  // Move player and check if game continues
    
}

