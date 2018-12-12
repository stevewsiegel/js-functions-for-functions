//master ja
"use strict";

// GLOBAL VARS
//needed to count number of factors and determin when ighest factor//
let totalFactors = 1;

// MASTER FUNCTIONS

function Calculate(){
  //needed to store final output string//
  let msg = "";
  //grabs number fromminput field//
  let num = document.getElementById('userInput').value;
  //determines if checkbox is checked//
  let wantHighest = document.getElementById('onlyHighest').checked;
  //stoes final returned result of all factors()//
  let result = allFactors(num, wantHighest);
  //checked to see if result is a string or number and sets our message accordingly//
  if(typeof result === "string"){
    //final message if result is a data type of string//
    msg = `There are ${totalFactors} factors of ${num}, and they are ${result}.`;
  }else{
    //final message if result is a numerical type or other//
    msg = `The highest factor of ${num} is ${result}.`;
  }
  //js takes final mesage and put it in our 'p' element//
  document.getElementById('jsOutlet').innerHTML = msg;
  //resets back to one afterr a calculation has been complete//
  totalFactors = 1;
}

function Reset(){
  document.getElementById('jsOutlet').innerHTML = "";
  //js resets the'p' tag back to empty string/
  document.getElementById('userInput').value = "";
  //js resets input field back to empty//
  totalFactors = 1;
}

// HELPER FUNCTIONS

//either rturns all factors of given number or justnhighest number of that given factor//
function allFactors(n, returnHighest) {
  //creates number to divide into original number//
  let factor = n - 1;
  //create a string that contains starting number//
  let str = n;
  //cycles through all numbers less than original  number//
  while(factor !== 0){
    // to finds if factor is actually a factor of original number//
    if(n % factor === 0){
      //runs only if this is first factor found//
      if(totalFactors === 1 && returnHighest){
        //if first factor then only return that number//
        return factor;
      }
      //for each new factor foun add to the string//
      str += `, ${factor}`;
      //adds one to total factor each time a new factor is found//
      totalFactors++;
    }
    //provides nw number to be tested in next cycle//
    factor--;
  }
  //returns string containg all the found factors found in while loop//
  return str;
}
