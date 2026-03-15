console.log("Validation.js is connected.");
function collect_quantity() {
    let quantity = Number(document.getElementById("quantityPerDay").value);
    console.log("Quantity: ", quantity);

if (quantity < 0) {
    document.getElementById("errorQuantity").innerHTML = "Quantity cannot be negative.";
} else {
    document.getElementById("errorQuantity").innerHTML = "";
}
   
    return false;
}
const unitPrice = 1000;
const days = 30;
const quantity = document.getElementById("quantityPerDay");
const totalPrice = document.getElementById("totalPrice");

quantity.addEventListener("input", function () {
    const qty = quantityPerDay.value;
    const total = unitPrice * qty * days;
    totalPrice.value = total;
});

