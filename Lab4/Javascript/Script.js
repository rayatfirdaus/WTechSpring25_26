console.log("Connected to Script.js");
function collect_name() {
    let name = document.getElementById("PatientName").value;
    console.log("Name collected: " , name);
    document.getElementById("PatientName").style.color = "blue";
    return false;
}
function collect_address() {
    let address = document.getElementById("Address").value;
    console.log(address);
    return false;
}
