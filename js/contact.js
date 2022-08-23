const names = [ 'Elon Musk', 'Alex Nechaev', 'Thomas Jefferson', 'Gabe Newell'];
const send= document.getElementById("send");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
//sort names in ascending order
let sortedNames = names.sort();

//reference
let input = document.getElementById('userField');

//Execute function on keyup
input.addEventListener('keyup', () =>{
//loop through above array
// removeElements();
removeElements();

for(let i of sortedNames){
  //convert input to lowercase and compare with each string
  if(i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != ""){
//create li element
    let listItem = document.createElement("li");
    //one common class name
    listItem.classList.add('list-items');
    
    listItem.style.cursor = 'pointer';
    listItem.setAttribute('onclick', "displayNames('"+ i +"')");
    //display match part in bold
    let word = "<b>"+ i.substring(0,input.value.length)+"</b>";
    word += i.substring(input.value.length);
    //display the value in array
    listItem.innerHTML = word;
    document.querySelector('.list').appendChild(listItem);
  }
}

})

function displayNames(value){
  input.value = value;
  removeElements();
}

function removeElements(){
  let clear = document.getElementById('listClear');
clear.innerHTML = '';
}


send.addEventListener("click", () =>{
    if(user.value === "" && message.value === ""){
    alert("Please fill out user and message fields before sending");
    
    }else if(user.value === ""){
      alert('Please fill out user field before sending');
    }
    else if(message.value === ""){
      alert('Please fill out message field before sending"');
    }
    else{
      alert(`Message successfully sent to: ${user.value}`);
    }
    
    });
