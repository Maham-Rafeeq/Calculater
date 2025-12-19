let h1 =document.getElementById("h1");

function clickme(operater){
     let input1 =document.getElementById("num1");
let input2 =document.getElementById("num2");
let num1 =Number(input1.value);
let num2 =Number(input2.value);
 if( operater === "+"){
    let result = num1+num2;
    h1.innerText = result;
    h1.style.border = "3px solid #42a5f5";
    h1.style.boxShadow = "0 4px 10px rgba(66, 165, 245, 0.2)";

 }
 else if(operater === "-"){
     let result = num1-num2;
    h1.innerText = result;
     h1.style.border = "3px solid #42a5f5";
    h1.style.boxShadow = "0 4px 10px rgba(66, 165, 245, 0.2)";
 }
 else if(operater === "/"){
     let result = num1/num2;
    h1.innerText = result;
     h1.style.border = "3px solid #42a5f5";
    h1.style.boxShadow = "0 4px 10px rgba(66, 165, 245, 0.2)";
 }
 else if(operater === "*"){
     let result = num1*num2;
    h1.innerText = result;
     h1.style.border = "3px solid #42a5f5";
    h1.style.boxShadow = "0 4px 10px rgba(66, 165, 245, 0.2)";
 }
 else{
    alert("Enter valid number")
 }
 input1.value ="";
 input2.value ="";
}