// time to get text when a button is clicked

//get form action submit

let form1=document.querySelector("#form1");

form1.addEventListener("submit",myfun);

function myfun(e){
e.preventDefault();
let inp=document.querySelector("#textinput");

var str=inp.textContent;

// if(inp.value==null){
// alert("Enter something you dofus");
// }
if (!str.replace(/\s/g, '').length) {
  console.log('string only contains whitespace (ie. spaces, tabs or line breaks)');
  alert("Enter something you dofus");
}

document.querySelector("#Output").innerHTML=inp.value;

}

//console.log("Yo Man");