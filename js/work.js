console.log("text analyzer");


function count(){
	var textValue  = document.getElementById("floatingTextarea").value;
    let character=0;
    let word=0;
    let number=0;
    let punctuation=0; 
    textValue=textValue+" ";
for( let i=0; i<textValue.length; i++)
 {
var code = textValue.charCodeAt(i);
console.log(code);


 if( code == 32 )
{
    word++;
}
else if( code>=48 && code<=57)
{
    number++;
   
}
else if(code>=33 && code<=47 || code>=58 && code<=64){
    punctuation++;
}



 console.log(character, word,number);
 
 let para = document.getElementById("para").innerHTML= ` You Have Entered ${word} words, ${textValue.length-1} characters, ${number} numbers and ${punctuation}punctuations.`;
}};

function erase(){
     document.getElementById("floatingTextarea").value = "";
    
}






/*

if(code>=97&&code<=122 || code>=65&&code<=90)
{
    character++;
}
else if( code == 32)
{
    ++word;
}
else if( code>=48 || code<=57)
{
    number++;
    character++;
}

 console.log(character, word,number);
 
 let para = document.getElementById("para").innerHTML= ` You Have Entered ${word+1} words, ${character} characters and ${number} numbers`;
}};

function erase(){
     document.getElementById("floatingTextarea").value = "";
    
}*/







/*let btn = document.getElementById("pri").onclick=testing();

function testing(){
    console.log("started testing");
  
    let text= document.getElementById(floatingTextarea);
    if(text===null)
    {
        console.log("no value");

    }
    else{
       let read = text.nodeValue.split('\n');
    }
    
 console.log(text);
}
function testing(){
    let text = document.getElementById("floatingTextarea");
    
  

  
    localStorage.setItem('entry',text.value);
   
    
      
    /*let valo = localStorage.getItem('entry');
    let entry;
    if(valo== 0){
        console.log("no value");

    }
    else{
         var stringArray = document.getElementById('floatingTextarea').nodeValue;
    console.log(stringArray);
    }
   
}*/
