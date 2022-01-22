# Mars Rover Challenge

Rovers have been sent to Mars to survey the terrain and you have been charged with
creating their navigation system. These are the specifications you have been given:
* Mars’s surface has been divided into zones and each zone can be modelled as a two dimensional cartesian grid. The zones have been very carefully surveyed ahead of
time and are deemed safe for exploration within the zone’s bounds, as represented
by a single cartesian coordinate. E.g.: (5, 5)
* The rover understands the cardinal points and can face either East (E), West (W),
North (N) or South (S)
* The rover understands three commands:
  * M - Move one space forward in the direction it is facing
  * R - rotate 90 degrees to the right
  * L - rotate 90 degrees to the left
Due to the transmission delay in communicating with the rover on Mars, you are only
able to send the rover a list of commands. These commands will be executed by the
rover and its resulting location sent back to HQ. This is an example of the list of
commands sent to the rover:
```
8 8
1 2 E
MMLMRMMRRMML 
```

This is how the rover will interpret the commands:  
- The first line describes how big the current zone is. This zone’s boundary is at the Cartesian
coordinate of 8,8 and the zone comprises 64 blocks. The second line describes the rover’s
staring location and orientation. This rover would start at position 1 on the horizontal axis,
position 2 on the vertical axis and would be facing East (E). The third line is the list of
commands (movements and rotations) to be executed by the rover.
As a result of following these commands, a rover staring at **1 2 E** in this zone would land up
at **3 3 S**. 

## Usage

```bash
node index.js file.txt
```

### Note:
  File must be formatted in the following way:
```
8 8
1 2 E
MMLMRMMRRMML
```
Each line must end with a new line at the end.

## Test
Will run the code using the example from above
```bash
npm run example
```
The output should be  **3 3 S**.


## License
[MIT](https://choosealicense.com/licenses/mit/)