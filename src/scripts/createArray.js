function CreateArray(display){
  let randomArray= [];
  document.getElementById(display).textContent = "";
  for(i = 0; i < 10; i++){
    randomNumber = Math.floor( Math.random() * 100);
    randomArray.push(randomNumber);
  }
  document.getElementById(display).textContent = randomArray;
}