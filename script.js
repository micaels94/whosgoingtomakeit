function task(){
  let value1 = document.getElementById("value1").value; 
  let value2 = document.getElementById("value2").value; 
  let value3 = document.getElementById("value3").value; 
  
  let valueArray = [value1, value2, value3]; 
  let randomValue = valueArray[(Math.random() * valueArray.length) | 0]; 
  
  if (value1 === "" && value2 === "" && value3 === ""){
    document.querySelector("form").style.display = "none";
    document.getElementById("h1-result").innerHTML = "Insere pelo menos dois nomes.";
    document.getElementById("h1-result").style.display = "block";
    document.getElementById("nova-decisao").style.display = "block";
    newDecision(event);
  } else if (value1 === "" || value2 === "") {
    document.querySelector("form").style.display = "none";
    document.getElementById("h1-result").innerHTML = "Insere pelo menos dois nomes.";
    document.getElementById("h1-result").style.display = "block";
    document.getElementById("nova-decisao").style.display = "block";
    newDecision(event);
  } else if (value1 !== "" && value2 !== "") {
    let twoValues = [value1, value2];
    let twoValuesRandom = twoValues[(Math.random() * twoValues.length) | 0];
    document.getElementById("chosen-one").innerHTML = twoValuesRandom;
    document.getElementById("h1-result").style.display = "block";
    document.querySelector("form").style.display = "none";
    document.getElementById("nova-decisao").style.display = "block";
  } else {
    document.getElementById("chosen-one").innerHTML = randomValue;
    document.getElementById("h1-result").style.display = "block";
    document.querySelector("form").style.display = "none";
    document.getElementById("nova-decisao").style.display = "block";
  }
}

function addingNames(event){
  event.preventDefault();
  let nameNum = 4; 
  // Rest of the code for adding names
  const label = document.createElement('label');
  label.id = "name"; 
  label.for = "fname"; 
  
  
  const newInput = document.createElement('input');
  newInput.id = "value" + nameNum;
  nameNum++
  console.log(nameNum); 
  newInput.type = "text"; 
    // newInput.value = "";
   
  document.getElementById("option-cont").appendChild(newInput); 
  
}

function newDecision(event){
  event.preventDefault();
  document.getElementById("h1-result").style.display = "none";
  document.getElementById("chosen-one").innerHTML = '';
  document.getElementById("value1").value = ''; 
  document.getElementById("value2").value = ''; 
  document.getElementById("value3").value = '';  
  document.querySelector("form").style.display = "block";
  document.getElementById("nova-decisao").style.display = "none";
}
