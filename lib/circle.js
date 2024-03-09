class Circle {
    constructor(text, color, textColor) {
        // Initialize Circle object with text, color, and text color
        this.text = text; // Text to display inside the circle
        this.color = color; // Color of the circle
        this.textColor = textColor; // Color of the text
    }

    render() {
        // Render method to generate SVG code for the circle with text
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" style="fill:${this.color}" /> <!-- Circle element -->
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> <!-- Text element -->
        </svg>`;
    }
}

module.exports = { Circle }; // Export Circle class
