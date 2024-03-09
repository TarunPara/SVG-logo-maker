class Square {
    // Constructor initializes a new instance of the Square class with provided text, color, and text color
    constructor(text, color, textColor) {
        this.text = text; // Text to be displayed inside the square
        this.color = color; // Background color of the square
        this.textColor = textColor; // Color of the text inside the square
    }

    // The render method returns the SVG string for the square with the specified properties
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="160" height="160" x="70" y="20" style="fill:${this.color}" /> <!-- Rectangle shape -->
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> <!-- Text inside the rectangle -->
        </svg>`;
    }
}

module.exports = { Square }; // Export the Square class for use in other files
