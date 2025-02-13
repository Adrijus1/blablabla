//const pirmasparagrafas = document.getElementById("pirmasparagrapahas");
//const mygtukas = document.getElementById("mygtukas");

//mygtukas.addEventListener("click", () => {
  //  pirmasparagrafas.style.color = "red";
   // console.log("mygtukas paspaustas");
//});

const kempiniukas = document.getElementById("kempiniukas");
const nuotrauka = document.getElementById("nuotrauka");

mygtukas.addEventListener("click", () => {
    if (nuotrauka) {
        nuotrauka.style.width = "150px";
        nuotrauka.style.borderRadius = "50%";
        console.log("mygtukas paspaustas");
    }
});


///////////////////////////////////////
const input = document.getElementById("firstname");
const Formbutton = document.getElementById("Formbutton");
const body = document.getElementById("body");
const unorderList = document.querySelector("#unorderList");

Formbutton.addEventListener("click", (event) => {
    event.preventDefault();
    let inputinputvalue = input.value;

    if (input.value.length > 2) {
        const listItem = document.createElement("li");
        listItem.innerText = inputinputvalue;

        const pirmasparagrafas = document.createElement("p");
        pirmasparagrafas.innerText = inputinputvalue;

        unorderList.appendChild(listItem);
    }
});
    let inputinputvalue = input.value;

if (input.value.length > 2) {
    const listItem = document.createElement("li");
    listItem.innerText = inputinputvalue;


   const pirmasparagrafas = document.createElement("p");
   pirmasparagrafas.innerText = inputinputvalue;

   unorderList.appendChild(pirmasparagrafas);


}

