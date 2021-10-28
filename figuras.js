// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimtetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Código del círculo
console.group("Círculos");

function diametroCirculo(radio) {
    return radio * 2;
}
const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);

    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

console.group("Triángulo Isósceles");

function alturaTrianguloIsosceles(lado1, lado2, base) {
    if (lado1 === lado2 && lado1 != base) {
        console.log("Es un triángulo Isósceles");

        const alturaTriangulo = Math.sqrt((lado1 * lado2) - (base * base) / 4);
        console.log("La altura del Triángulo es: " + alturaTriangulo);
    }else{
        console.log("No es un triángulo Isósceles");
    }
}

console.groupEnd();

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("lado1");
    const valueLado1 = parseInt(lado1.value);

    const lado2 = document.getElementById("lado2");
    const valueLado2 = parseInt(lado2.value);

    const lado3 = document.getElementById("lado3");
    const valueLado3 = parseInt(lado3.value);

    const perimetro = perimtetroTriangulo(valueLado1, valueLado2, valueLado3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("lado3");
    const valueBase = base.value;

    const altura = document.getElementById("alturaTriangulo");
    const valueAltura = altura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

function calcularDiametroCirculo() {
    const radio = document.getElementById("radio");
    const valueRadio = radio.value;

    const diametro = diametroCirculo(valueRadio);
    alert(diametro)
}

function calcularAreacirculo() {
    const radio = document.getElementById("radio");
    const valueRadio = radio.value;

    const area = areaCirculo(valueRadio);
    alert(area)
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("radio");
    const valueRadio = radio.value;

    const diametro = diametroCirculo(valueRadio);

    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
}