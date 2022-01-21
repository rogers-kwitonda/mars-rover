if (process.argv.length < 3) {
    console.log('Missing argument');
    console.log('Usage: node ' + process.argv[1] + ' file.txt');
    process.exit(1);
}

// Read the file and print its contents.
const fs = require('fs');
const { parse } = require('path');
const filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    let rows = data.split('\r\n')
    if(rows.length < 3){
        console.log("Error: File improperly formatted")
        return
    }

    try {
        let size = rows[0].split(' ').map(number => parseInt(number))
        let start = rows[1].split(' ')
        let horizontal = parseInt(start[0])
        let vertical = parseInt(start[1])
        let heading = start[2]
        let instructions = rows[2]
        getFinalLocation(size, horizontal, vertical, heading, instructions)
    } catch (error) {
        throw error
    }
});


function getFinalLocation(size, horizontal, vertical, heading, instructions ){
    for (let step of instructions){
        switch (step) {
            case 'M':
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
                break;
            
            case 'L':
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
                break;

            case 'R':
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
                break;
        
            default:
                break;
        }
    }
    console.log(horizontal, vertical, heading);
}


