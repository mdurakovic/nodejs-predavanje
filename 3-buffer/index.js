// Create an empty buffer of size 10. 
// A buffer that only can accommodate 10 bytes.
const buf1 = Buffer.alloc(10);

// Create a buffer with content
const buf2 = Buffer.from("hello buffer");

// Examine the structure of a buffer
console.log(buf1.toJSON());
console.log(buf2.toJSON());
// the toJSON() method presents the data as the Unicode Code Points of the characters


console.log(buf1.length);
console.log(buf2.length);


// Write to a buffer
buf1.write("Buffer really rocks!") 


// Decode a buffer
console.log(buf1.toString());