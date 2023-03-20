//Використовуючи пробіли &nbsp; та зірочки * намалюйте використовуючи цикли Ромб

for(let i=0; i<10; i++){
    for(let a=i+1; a<10; a++){
        document.write("&nbsp")
    }
    for(let y=i+1; y>0; y--){
        document.write("*")
    }
    document.write("<br/>")
};
for(let i=10; i>0; i--){
    for(let a=i-1; a<10; a++){
        document.write("&nbsp")
    }
    for(let y=i-1; y>0; y--){
        document.write("*")
    }
    document.write("<br/>")
};
