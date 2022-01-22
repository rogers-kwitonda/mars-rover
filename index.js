if (process.argv.length < 3) {
    console.log('Missing argument');
    console.log('Usage: node ' + process.argv[1] + ' file.txt');
    process.exit(1);
}

const fs = require('fs');
const filename = process.argv[2];

let size; // array containing zone boundary
let start; // array containing starting coordinates
let horizontal; // current position on horizontal axis
let vertical; // current position on vertical axis
let heading;  // current heading
let instructions; // list of instructions

// Read file
fs.readFile(filename, 'utf-8', function(err, data) {
    if (err) throw err;
    // Get rows
    let rows = data.split('\r\n')
    if(rows.length < 3){
        console.log("Error: File improperly formatted")
        return
    }

    try {
        // Initialize values from file
        size = rows[0].split(' ').map(number => parseInt(number))
        start = rows[1].split(' ')
        horizontal = parseInt(start[0])
        vertical = parseInt(start[1])
        heading = start[2]
        instructions = rows[2]

        // Execute instructions
        for (let step of instructions){
            switch (step) {
                case 'M':
                    moveForward(heading, horizontal, vertical, size)
                    break;
                case 'L':
                    turnLeft(heading)
                    break
                case 'R':
                    turnRight(heading)
                    break
                default:
                    break;
            }
        }
        console.log(horizontal, vertical, heading);
    } catch (error) {
        throw error
    }
});


/**
 * Moves rover one unit forward in the current heading
 * @returns void
 */
function moveForward(){
    switch (heading) {
        case 'N':
            vertical += 1
            if(vertical > size[1]){
                console.log("Out of bounds")
                return
            }
            break;
        case 'S':
            vertical -= 1
            if(vertical < 1){
                console.log("Out of bounds")
                return
            }
            break;
        case 'E':
            horizontal += 1
            if(horizontal > size[0]){
                console.log("Out of bounds")
                return
            }
            break
        case 'W':
            horizontal -= 1
            if(vertical < 1){
                console.log("Out of bounds")
                return
            }
            break
        default:
            break;
    }
}

/**
 * Turns the rover 90 degrees to the right
 *
 */
function turnLeft(){
    switch (heading) {
        case 'N':
        heading = 'W'
            break;
        case 'S':
            heading = 'E'
            break;
        case 'E':
            heading = 'N'
            break
        case 'W':
            heading = 'S'
            break
        default:
            break;
    }
}

/**
 * Turns the rover 90 degress to the right from current heading
 */
function turnRight(){
    switch (heading) {
        case 'N':
            heading = 'E'
            break;
        case 'S':
            heading = 'W'
            break;
        case 'E':
            heading = 'S'
            break
        case 'W':
            heading = 'N'
            break
        default:
            break;
    }
}