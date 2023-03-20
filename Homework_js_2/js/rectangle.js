///Використовуючи пробіли &nbsp; та зірочки * намалюйте використовуючи цикли Порожній прямокутник

let y=0;
let x=0;
let i=0;

for(let i=0; i<5; i++){
    document.write("*")
    if(i==0 || i==5-1){
        for(x=0; x<20; x++){
            document.write("*") 
        }
    } else{
        for(y=0; y<x*2-2; y++){
            document.write("&nbsp")
        }
        document.write("*")
    }
    document.write("<br/>")
}
document.write("<br/>")

//Потренувалась робити паралелограм
for(let x=0; x<7; x++){
    for(let a=x-1; a<7; a++){
        document.write("&nbsp")
    }
    for(let i=0; i<20; i++){
        document.write("*");
    }
    document.write("<br/>")
}



