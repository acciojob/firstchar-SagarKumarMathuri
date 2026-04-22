// function firstChar(text) {
//   // your code here
// }

// // Do not change the code below

// //Uncomment the following line to show the prompt popup
// //const text = prompt("Enter text:");
// alert(firstChar(text));

function firstChar(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      return text[i];
    }
  }
  return "";
}

// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));
