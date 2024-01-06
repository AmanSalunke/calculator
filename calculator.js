
let string = " ";
let buttons = document.querySelectorAll('.button');
// document.queryselectorall selects all the things which has button class
//create a array from buttons
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e)=>{
        //when someone click the button it should come
        if(e.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string=" "
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string=string.slice(0,-1)
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }

        
    })
})


