console.log("Hello World!");
// alert("HTML are connected to JavaScript"); //It will show an alert box with the message "HTML are connected to JavaScript"
// let a= 20.56;
// let b= 6;
// c= a+b;
// console.log("Sum of a and b is: " , c);
// if (a==0)
// {
//     a++;
//     console.log("Incremented value of a is: " , a);
// }
// else if(a>20 && a<25)
// {
//     b=a+b;
//     console.log("Current value of b is: " , b);
// }
// for(i=0; i<5; i++)
// {
//     console.log("Value of i is: " , i);
// }
// let name = "Rayat";
// let sln = name.length;
// console.log("The length of the string is: " , sln);
function collect_data() {
    let isnamevalid = collect_name();
    let isagevalid = collect_age();


    // let name = document.getElementById("PatientName").value;
    // let age = document.getElementById("Age").value;
    // let dob = document.getElementById("DOB").value;
    // console.log("Patient Name: " , name);
    // console.log("Patient age: " , age);
    // console.log("Patient DOB: ", dob);

    return false; // To prevent form submission and page reload
}
function collect_name(){
    let name= document.getElementById("PatientName").value;
    console.log("Patient Name: " , name);
    if(name=="")
    {
        document.getElementById("NameError").innerHTML="Please enter the name";
        alert("Please enter the name");
        return false;
    }
    else if(name.length<5)
    {
        document.getElementById("NameError").innerHTML="Name should be at least 5 characters long";
        return false;
    }
    else
    {
        
    }
    return false;
}
function collect_age(){
    let age=document.getElementById("Age").value;
    console.log("Patient age: " , age);
    if(age=="")
    {
        document.getElementById("AgeError").innerHTML="Please enter the age";
        return false;

    }
    else{
        
    }
    return false;
}
