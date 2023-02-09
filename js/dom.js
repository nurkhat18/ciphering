function updateOffset(){
  const offset = document.getElementById("slider").value;
  document.getElementById("slider-value").value = offset;
  return offset;
}

function updateValue(){
  squareCipher();
  ceaserCipher();
}

function ceaserCipher(){
  const textValue = document.getElementById("text").value;
  const ceaserCipher = document.getElementById("ceaser-text");

  let cipher = "";
  const offset = updateOffset();
  
  for (i in textValue){
    let char = textValue.charCodeAt(i);
    let cipheredChar = char + parseInt(offset)
    if (char + parseInt(offset) > 90){
        cipheredChar -= 26;
    }
    if (64 < char && char < 91){
      cipher += String.fromCharCode(cipheredChar);
    }
    else{
      cipher += textValue[i];
    }
  }
  ceaserCipher.innerHTML = cipher;
}

function squareCipher(){
  let table = {};
  let letters = document.getElementsByTagName("th");
  for (i in letters){
    table[i] = letters[i].innerText;
  }

  const textValue = document.getElementById("text").value;
  const squareCipher = document.getElementById("square-text");

  let cipher = "";
  
  for (i in textValue){
    let char = textValue.charCodeAt(i);
    if (0 <= char - 65 && char - 65 < 25){
      cipher += table[char - 65];
    }
    else{
      cipher +=textValue.charAt(i);
    }
  }
  squareCipher.innerText = cipher;
  console.log(cipher);
}

function updateSquare(){
  let table = {};
  for (let i = 65; i < 90; i++){
    table[i -65] = String.fromCharCode(i);
  }

  for (let i = 0; i < 26; i++) {
    let x = Math.floor(Math.random() * 25);
    let y = Math.floor(Math.random() * 25);
    let temp = table[x];
    table[x] = table[y];
    table[y] = temp;
  }


  let letters = document.getElementsByTagName("th");
  for (i in table){
    letters[i].innerText = table[i];
  }
  squareCipher();
}