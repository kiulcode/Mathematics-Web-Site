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

// Interactive DOM
function calculateSquare() {
    const squareInput = document.getElementById("squareInput")
    const squarePerimeterCheckbox = document.getElementById("squarePerimeterCheckbox")
    const squareAreaCheckbox = document.getElementById("squareAreaCheckbox")

    let perimeter, area
    let messagePerimeter, messageArea, message

    if (squareInput.value.length > 0){
        if (squarePerimeterCheckbox.checked){
            perimeter = squarePerimeter(squareInput.value)
            messagePerimeter = `El perímetro es igual a <b>${perimeter}</b>.`
        }
        if (squareAreaCheckbox.checked){
            area = squareArea(squareInput.value)
            messageArea = `El area es igual a <b>${area}</b>.`
        }

        if (messagePerimeter === undefined && messageArea === undefined){
            sweetAlert("Campos requeridos", `Debe <b>seleccionar</b> una opción a calcular.`, "error")
        } else {
            if (messagePerimeter !== undefined && messageArea === undefined){
                message = messagePerimeter
            } else if (messagePerimeter === undefined && messageArea !== undefined){
                message = messageArea
            } else {
                message = `${messagePerimeter} <br> ${messageArea}`
            }
            sweetAlert("Cuadrado", message, "success")
        }


    } else {
        sweetAlert("Campos requeridos", `El <b>lado</b> no puede estar vacio.`, "error")
    }
}

function sweetAlert(title, message, icon) {
    Swal.fire({
        title: title,
        icon: icon,
        html: message,
        confirmButtonText: 'OK'
    })
}