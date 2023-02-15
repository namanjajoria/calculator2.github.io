let a=document.querySelector('input');;
let string="";
let buttons=document.querySelectorAll('button');
buttons.forEach((e)=>{
    e.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string= eval(string);
            a.value=string;
        }
        else if(e.target.innerHTML == 'AC'){
            string="";
            a.value=string;
        }
        else{
            string+=e.target.innerHTML;
            a.value=string;
        }
    });
});


