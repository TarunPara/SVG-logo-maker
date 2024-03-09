const { Triangle } = require('../lib/triangle.js');

describe('Triangle class', () => {
  it('should correctly render SVG for the Triangle', () => {
    const triangle = new Triangle("GHI", "Red", "Black");
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 250,180 50,180" style="fill:Red" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="Black">GHI</text>
      </svg>`;

    expect(triangle.render()).toEqual(expectedSVG);
  });
});
