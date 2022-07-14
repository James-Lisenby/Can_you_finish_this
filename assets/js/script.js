//Variables for the different inputs
const OratedREL = document.getElementById('OratedR');
const EratedREL = document.getElementById('EratedR');
const YearinputEL = document.getElementById('YearInput');
const HorrorEl = document.getElementById('Horror');
const ComedyEL = document.getElementById('Comedy');
const ActionEL = document.getElementById('Action');
const RomComEL = document.getElementById('RomCom');
const DramaEL = document.getElementById('Drama');
const SatireEL = document.getElementById('Satire');

//User input interaction functions
number = document.getElementById('YearInput');

number.addEventListener('change', e =>{

console.log("Change happened");

})

checkbox = document.getElementById('OratedR');
checkbox.addEventListener('change', e => {

    if(e.target.checked){
        console.log("checked");
    } else 
        console.log("Unchecked");
});

checkbox = document.getElementById('EratedR');
checkbox.addEventListener('change', e => {

    if(e.target.checked){
        console.log("checked");
    } else 
    console.log("Unchecked");
});
checkbox = document.getElementById('Horror');
checkbox.addEventListener('change', e => {

    if(e.target.checked){
        console.log("checked");
    } else 
    console.log("Unchecked");
});
checkbox = document.getElementById('Comedy');
checkbox.addEventListener('change', e => {

    if(e.target.checked){
        console.log("checked");
    } else 
    console.log("Unchecked");
});
checkbox = document.getElementById('Action');
checkbox.addEventListener('change', e => {

    if(e.target.checked){
        console.log("checked");
    } else 
    console.log("Unchecked");
});
checkbox = document.getElementById('RomCom');
checkbox.addEventListener('change', e => {

    if(e.target.checked){
        console.log("checked");
    } else 
    console.log("Unchecked");
});
checkbox = document.getElementById('Drama');
checkbox.addEventListener('change', e => {

    if(e.target.checked){
        console.log("checked");
    } else 
    console.log("Unchecked");
});
checkbox = document.getElementById('Satire');
checkbox.addEventListener('change', e => {

    if(e.target.checked){
        console.log("checked");
    } else 
    console.log("Unchecked");
});

//Listoner for the button
generate.addEventListener('click', () => {
    
    console.log("Button clicked");
    
});