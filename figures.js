// Square
const squarePerimeter = side => side * 4;

const squareArea = side => Math.pow(side, 2);

// Triangle
const trianglePerimeter = (side1, side2, base) => side1 + side2 + base;

const triangleArea = (base, height) => (base * height) / 2;

// Circle
const PI = Math.PI

const circleDiameter = radius => radius * 2;

const circlePerimeter = radius => {
    const diameter = circleDiameter(radius)
    return diameter * PI
};

const circleArea = radius => (radius * radius) * PI;