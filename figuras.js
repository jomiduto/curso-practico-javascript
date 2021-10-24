// Código del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es : " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es : " + areaCuadrado + " cm2");

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm y " + baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo mide: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo mide: " + areaTriangulo + "cm2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

const radioCirculo = 4;
console.log("El radio del círculo mide: " + radioCirculo + "cm");
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo mide: " + diametroCirculo + "cm");
const PI = Math.PI;
console.log("PI mide: " + PI);
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo mide: " + perimetroCirculo + "cm");
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo mide: " + areaCirculo + "cm2");

console.groupEnd();