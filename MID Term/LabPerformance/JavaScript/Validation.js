const unitPrice = 1000;
const days = 30;
const quantity = document.getElementById("quantityPerDay");
function check_quantity() {
    const qty = quantity.value;
    if (qty < 0) {
        document.getElementById("errorValue").innerHTML = "Quantity cannot be negative.";
        quantity.value = 0;
    } 
    else {
        document.getElementById("errorValue").innerHTML = "";
    }
}
function total_price() {
    const qty = quantity.value;
    const total = unitPrice * qty * days;
    document.getElementById("totalPrice").value = total;

    if (total>1000) {
        alert("Congratulations! You have earned a gift coupon.");
    }
    else {
        
    }
}
