// const precioOriginal = 120;
// const descuento = 18;

const coupons = [
    {
        name: 'cupon_platzi',
        discount: 15,
    },
    {
        name: 'cupon_bienvenida',
        discount: 30,
    },
    {
        name: 'cupon_miguelito',
        discount: 25,
    },
];

function calcularPrecioconDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function buttonPriceDiscount() {
    const inputPrice = document.getElementById('inputPrice');
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById('inputCoupon');
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function(coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if(!userCoupon) {
        alert("El cupón " + userCouponValue + " no es válido");
    }else {
        const descuento = userCoupon.discount;
        const precioconDescuento = calcularPrecioconDescuento(priceValue, descuento);

        const resultP = document.getElementById('resultPrice');
        resultP.innerText = 'El precio con descuento son: $ ' + precioconDescuento;
    }

}