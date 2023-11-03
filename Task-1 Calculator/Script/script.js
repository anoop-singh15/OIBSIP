let screen=document.getElementById('maininput');
let buttons=document.getElementsByClassName('btn');

let screenVal=' ';

for(btn of buttons)
{
    btn.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
       
        if(buttonText=='x'){
            buttonText="*";
            screenVal+=buttonText;
            screen.value=screenVal;
        }
        else if(buttonText=='C')
        {
            screenVal="";
            screen.value=screenVal;
           
        }
        else if(buttonText=='←')
        {
           
            screenVal=screenVal.substring(0,screenVal.length-1);
            screen.value=screenVal;
           
        }
       
        else  if(buttonText=='=')
        {
            screen.value=eval(screenVal);
            screenVal="";
        }
        else
        {
            screenVal+=buttonText;
            screen.value=screenVal;
        }
        
    });
}