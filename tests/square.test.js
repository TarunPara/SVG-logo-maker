const { Square } = require('../lib/square.js');

describe('Square class', () => {
  it('should correctly render SVG for the Square', () => {
    const square = new Square("DEF", "Green", "White");
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" x="70" y="20" style="fill:Green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="White">DEF</text>
      </svg>`;

    expect(square.render()).toEqual(expectedSVG);
  });
});
