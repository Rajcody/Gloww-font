

var ul = document.querySelector("ul");


var but = document.querySelector('button');
var input = document.getElementById('user');

function inputlen(){
    return input.value.length;
}
function create(){
    console.log(input.value);
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));  
    ul.appendChild(li);
    console.log(li);
}

but.addEventListener('click',inputuser);
//keypress

input.addEventListener('keypress', key);

function key(e){
    console.log(e);
    if(inputlen()>0 && e.keyCode===13 ){
        create();  
    }

}
function inputuser(){
    if(inputlen()>0 ){
        create();
    }

}