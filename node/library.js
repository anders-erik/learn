// myLibrary.js

// A simple function in the library/module
function greet(name) {
  return `Hello, ${name}!`;
}

// Exporting the function to make it accessible to other files
module.exports = {
  greet: greet,
};

