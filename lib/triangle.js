class Triangle {
    // Constructor initializes a new instance of the Triangle class with provided text, color, and text color
    constructor(text, color, textColor) {
        this.text = text; // Text to be displayed inside the triangle
        this.color = color; // Background color of the triangle
        this.textColor = textColor; // Color of the text inside the triangle
    }

    // The render method returns the SVG string for the triangle with the specified properties
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,20 250,180 50,180" style="fill:${this.color}" /> <!-- Triangle shape -->
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> <!-- Text inside the triangle -->
        </svg>`;
    }
}

module.exports = { Triangle}; // Export the Triangle class for use in other files
