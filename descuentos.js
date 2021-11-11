// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioconDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function buttonPriceDiscount() {
    const inputPrice = document.getElementById('inputPrice');
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById('inputDiscount');
    const discountValue = inputDiscount.value;

    const precioDescuento = calcularPrecioconDescuento(priceValue, discountValue);

    const resultP = document.getElementById('resultPrice');
    resultP.innerText = "El precio con descuento son: $" + precioDescuento;
}