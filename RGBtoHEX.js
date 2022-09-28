/** The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3 **/


// pseudocode

/** 1. function to check if r or g or b is greate than 
255 and round it to 255 or less than 0 
and round it to 0

2. function to conver r, g and b to hex
3. check if the length of converted hex is not equal to 2 and add zero to each val(r, g,b)
4. return hex
5. call check function on each val(r,g,b)
6. initialize an empty string holding the final hex
6. call convert function on each(r, g,b) adding to the initialized empty string  **/



function rgb(r, g, b) {
    r = check(r)
    g = check(g)
    b = check(b)

    let hex = ''
    hex += convertToHex(r)
    hex += convertToHex(g)
    hex += convertToHex(b)
    return hex.toUpperCase()
}

function check(val) {
    if (val > 255) {
        val = 255
    } else if (val < 0) {
        val = 0
    }
    return val
}

function convertToHex(dec) {
    let hex = ''
    hex = dec.toString(16)
    if (hex.length !== 2) {
        hex = '0'
        hex += dec.toString(16)
    }
    return hex
}