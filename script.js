let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let res = document.getElementById('resbox');
// console.log("test");


let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            let s = eval(string);
            input.value = s;
        }
        else if(e.target.innerHTML == 'AC'){
            string ="";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value =string;
        }
        else{
            let c = string.charAt(0);
            if(c== "+" || c== "-" || c== "*" || c== "/" || c== "%"){
                string = string.substring(1,string.length)
            }
            string += e.target.innerHTML;
            input.value = string;
            res.value = string;
        }
    })
})
function reload(){
    location.reload();
}