console.log("Script.js is running");
var a = ["ABC", "DEF"];

let clickcount=0;
a.forEach((item, index)=>{
    console.log("Index: ",index, "Item:", item);
})
a.map((item, index)=>{
    console.log("Index: ",index, "Item:", item);
})

console.log("Connected to Script.js");
function collect_name() {
    let name = document.getElementById("PatientName").value;
    console.log("Name: " , name);
    document.getElementById("PatientName").style.color = "blue";
    document.getElementById("printname").innerHTML= name;
    return false;
}
function collect_age(){
    let age = document.getElementById("Age").value;
    console.log("Patient age: " , age);
    document.getElementById("printage").innerHTML=age;
    if(age==""){
        document.getElementById("AgeError").innerHTML="Please enter your age";
    }
    else{

    }
    return false;
}
function collect_address() {
    let address = document.getElementById("Address").value;
    console.log(address);
    return false;
}
//let clickcount=0;
function submit_key(){
    clickcount++;
    let submitdata = document.getElementById("submitbtn").value;
    document.getElementById("submitbtn").style.color = "blue";
    document.getElementById("submitbtn").innerHTML="Again Submit" + clickcount;
    return false;
}
