console.group("Cuadrados")
const squareSide = 5
const squarePerimeter = squareSide * 4
const squareArea = 5 * 5
console.log(`Perimetro = ${squarePerimeter}`)
console.log(`Area = ${squareArea}`)
console.groupEnd()

console.group("Triangulo")
const triangleSide1 = 7
const triangleSide2 = 7
const triangleBase = 10
const triangleHeight = 15
const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase
const triangleArea = (triangleBase * triangleHeight)/2
console.log(`Perimetro = ${trianglePerimeter}`)
console.log(`Area = ${triangleArea}`)
console.groupEnd()

console.group("Círculo")
const circleRadius = 4
const circleDiameter = circleRadius * 2
const PI = Math.PI
const circlePerimeter = circleDiameter * PI
const circleArea = (circleRadius * circleRadius) * PI
console.log(`Perimetro = ${circlePerimeter}`)
console.log(`Area = ${circleArea}`)
console.groupEnd()