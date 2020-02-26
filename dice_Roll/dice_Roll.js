//Initialize variables on load
var i = 0;
var vOne = Math.floor((Math.random() * 100) % 6 + 1);
console.log('vOne = ' + vOne);

var vTwo = Math.floor((Math.random() * 100) % 6 + 1);
console.log('vTwo = ' + vTwo);

var rolls = 0;

function start_Roll() {
    //Resets the variables and styling after first roll 
    if (rolls != 0) {
       document.getElementById('one' + vOne).style.border = 'none';
       document.getElementById('one' + vOne).style.width = '15%';

       document.getElementById('two' + vTwo).style.border = 'none';
       document.getElementById('two' + vTwo).style.width = '15%';
        
        i = 0;
        vOne = Math.floor((Math.random() * 100) % 6 + 1);
        console.log('vOne = ' + vOne);
        
        
        vTwo = Math.floor((Math.random() * 100) % 6 + 1);
        console.log('vTwo = ' + vTwo);
    }

    myFunction();
}

//Controls rolling animation and calls display
function myFunction() {
    console.log('my');
    i++;
    console.log(i);
    displayOne();
    displayTwo();
    setTimeout(() => {
        if (i < vOne || i < vTwo) {
            myFunction();
        } else {
            show_Results();
        }
    }, 500);
   
} 

//Creates  new orange border and gets rid of last one for Dice One
function displayOne () {
    var dOne = document.getElementById('one' + i);

    if (i == 1) {
        dOne.style.border = '0.3em solid orange';
        dOne.style.width =  '13%';
    } else if (i > 1 && i <= vOne) {
        dOne.style.border = '0.3em solid orange';
        dOne.style.width =  '13%';

        y = i - 1;
        document.getElementById('one' + y).style.border = 'none';
        document.getElementById('one' + y).style.width = '15%';
    } else {

    }
}


//Creates  new orange border and gets rid of last one for Dice Two
function displayTwo () {
    var dTwo = document.getElementById('two' + i);

    if (i == 1) {
        dTwo.style.border = '0.3em solid orange';
        dTwo.style.width =  '13%';
    } else if (i > 1 && i <= vTwo) {
        dTwo.style.border = '0.3em solid orange';
        dTwo.style.width =  '13%';

        y = i - 1;
        document.getElementById('two' + y).style.border = 'none';
        document.getElementById('two' + y).style.width = '15%';
    } else {

    }
}

//Calculates and shows result
function show_Results() {
    var total = vOne + vTwo;
    console.log('FInished. Total = ' + total);

    var seeTotal = document.getElementById('total');
    seeTotal.innerHTML = total;
    seeTotal.style.fontSize = '5vh';
    seeTotal.style.margin = '7.5vh';

    rolls++;
}

document.getElementById('submit').addEventListener('click', start_Roll);

