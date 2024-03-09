const { Circle } = require('./circle.js');
const { Square } = require('./square.js');
const { Triangle } = require('./triangle.js');

// Describe block defines a test suite for the shape classes
describe("Shape classes", () => {
  // Individual test for the Square class's render method
  it("Square renders correctly", () => {
    // Create a new instance of Square
    const square = new Square("ABC", "Blue", "Red");
    // Define the expected SVG output
    const expectedValue = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" x="70" y="20" style="fill:Blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="Red">ABC</text> 
      </svg>`;
    // Call the render method and check if it matches the expected output
    const actualValue = square.render();
    expect(actualValue).toEqual(expectedValue);
  });

  // Individual test for the Circle class's render method
  it("Circle renders correctly", () => {
    // Create a new instance of Circle
    const circle = new Circle("ABC", "Blue", "Red");
    // Define the expected SVG output
    const expectedValue = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" style="fill:Blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="Red">ABC</text> 
      </svg>`;
    // Call the render method and check if it matches the expected output
    const actualValue = circle.render();
    expect(actualValue).toEqual(expectedValue);
  });

  // Individual test for the Triangle class's render method
  it("Triangle renders correctly", () => {
    // Create a new instance of Triangle
    const triangle = new Triangle("ABC", "Blue", "Red");
    // Define the expected SVG output
    const expectedValue = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 250,180 50,180" style="fill:Blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="Red">ABC</text> 
      </svg>`;
    // Call the render method and check if it matches the expected output
    const actualValue = triangle.render();
    expect(actualValue).toEqual(expectedValue);
  });
});
