const { Circle } = require('../lib/circle.js');

describe('Circle class', () => {
  it('should correctly render SVG for the Circle', () => {
    const circle = new Circle("ABC", "Blue", "Red");
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" style="fill:Blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="Red">ABC</text>
      </svg>`;

    expect(circle.render()).toEqual(expectedSVG);
  });
});
