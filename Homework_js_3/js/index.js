window.addEventListener("load",()=>{
    document.getElementsByTagName("ol")[0].addEventListener("dblclick", (e)=>{
        e.target.style.backgroundColor = "green"
        e.target.style.opacity = ".3"
        e.target.style.fontSize = ".8rem"
    })
const arr = new Array(50);

arr.forEach((e,i,a)=>{
   arr[i] = 5
})

})




//1. Дані два масиви: ['a', 'b', 'c'] та [1, 2, 3]. Об'єднайте їх разом.
       
    let arr1 = ['a', ' b', ' c'];
    let arr2 = [1, 2, 3];
    let arrayContact = [].concat(arr1, arr2);
    document.write("1. " + arrayContact.join(", ") + "<br/>");
    console.log(arrayContact);

//2. Дан масив ['a', 'b', 'c']. Додайте йому до кінця елементи 1, 2, 3.

    let a = arr1.concat(1, 2, 3);
    document.write("2. " + a.join(", ")  + "<br/>");
    console.log(a);

//3. Дан масив [1, 2, 3]. Зробіть із нього масив [3, 2, 1].

    let arrReverse = arr2.reverse()
    document.write("3. " + arrReverse.join(", ")  + "<br/>");
    console.log(arrReverse);

//4. Дан масив [1, 2, 3]. Додайте йому до кінця елементи 4, 5, 6.

    let x = [1, 2, 3];    
    let b = x.concat(4, 5, 6);
    document.write("4. " + b.join(", ")  + "<br/>");
    console.log(b);

//5. Дан масив [1, 2, 3]. Додайте йому на початок елементи 4, 5, 6.

    let c = [4, 5, 6, x];
    document.write("5. " + c.join(", ")  + "<br/>");
    console.log(c);

//6. Дан масив ['js', 'css', 'jq']. Виведіть перший елемент на екран.
        
    let d = ['js', 'css', 'jq'];
    let e = d.indexOf(0);
    document.write("6. " + d[0]  + "<br/>");
    console.log(c);

//7. Дан масив [1, 2, 3, 4, 5]. За допомогою методу slice запишіть нові елементи [1, 2, 3].

    let temp = b.slice(0, 3);
    document.write("7. " + temp.join(", ") + "<br/>");
    console.log(temp);

//8. Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 4, 5].
        
    let f = [1, 2, 3, 4, 5];
    f.splice(1, 2);
    document.write("8. " + f.join(", ") + "<br/>");
    console.log(f);

//9. Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 2, 10, 3, 4, 5].
       
    let j = [1, 2, 3, 4, 5];
    j.splice(2, 0, 10);
    document.write("9. " + j.join(", ") + "<br/>");
    console.log(j);

//10. Дан масив [3, 4, 1, 2, 7]. Відсортуйте його.

    let v = [3, 4, 1, 2, 7];
    v.sort()
    document.write("10. " + v.join(", ") + "<br/>");

//11. Дан масив з елементами 'Привіт, ', 'світ' і '!'. Потрібно вивести на екран фразу 'Привіт, мир!'.
        
    let h = ['Привіт, ', 'світ', '!'];
    let hello = h.join("");
    document.write("11. " + hello + "<br/>");

//12. Дан масив ['Привіт, ', 'світ', '!']. Необхідно записати в нульовий елемент цього масиву слово 'Поки, ' (тобто замість слова 'Привіт, ' буде 'Поки, ').
        
    h.shift();
    h.unshift("Пока, ");
    document.write("12.1 " + h.join("") + "<br/>");

    h[0] = "Пока, ";
    document.write("12.2 " + h.join("") + "<br/>");

//13. Створіть масив arr з елементами 1, 2, 3, 4, 5 двома різними способами.
        
    let arrNew = [1, 2, 3, 4, 5];
    document.write("13.1. " + arrNew.join(", ") + "<br/>")

    let arrNew2 = new Array (1, 2, 3, 4, 5);
    document.write("13.2. " + arrNew2.join(", ") + "<br/>")

//14. Дан багатовимірний масив arr:

    var arr = [
         ['блакитний', 'червоний', 'зелений'],
         ['blue', 'red', 'green'],
    ];

    //Виведіть за його допомогою слово 'блакитний' 'blue' .

    document.write("14. " + arr[0][0] + " " + arr[1][0]  + "<br/>")

//15. Створіть масив arr = ['a', 'b', 'c', 'd'] і за допомогою його виведіть на екран рядок 'a+b, c+d'.
       
    let s = ['a', 'b', 'c', 'd'];
    document.write("15. " + s[0] + "+" + s[1] + ", " + s[2] + "+" + s[3] + "<br/>")

/*16. Запитайте у користувача кількість елементів масиву. Виходячи з даних, які ввів користувач
 створіть масив на ту кількість елементів, яку передав користувач.
у кожному індексі масиву зберігайте чило який показуватиме номер елемента масиву.*/

    let amountElements = +prompt("Яка кількість елементів в масиві?", "Введіть число");

    let myArray = []
    for (let i = 0; i < amountElements; i++) {
        myArray[i] = i + 1;
    }
    console.log(myArray)
    document.write("16. " + myArray.join(", ") + "<br/>");

//17. Зробіть так, щоб з масиву, який ви створили вище, вивелися всі непарні числа в параграфі, а парні в спані з червоним тлом.

    //масиву, який виводить всі непарні числа в параграфі

    let evenNumbers = myArray.filter(function(elem) {
        return elem % 2 == 0;
    });

    console.log(evenNumbers);
    document.write("<p>" + "17.1 " + evenNumbers.join(", ") + "</p>");
    

    //масиву, який виводить всі парні числа в спані з червоним тлом

    let oddNumbers = myArray.filter(function(elem) {
        return elem % 2 !== 0;
    });

    console.log(oddNumbers);
    document.write("17.2 " + "<span>" + oddNumbers.join(", ") + "</span>" + "<br/>");


//18. Напишіть код, який перетворює та об'єднує всі елементи масиву в одне рядкове значення. Елементи масиву будуть розділені комою.
    var vegetables = ['Капуста', 'Ріпа', 'Редиска', 'Морковка'];
    // Ваш код
    let str = vegetables.join(", ");
    let str1 = str.toString();

   document.write("18. " + str1 + "<br/>"); 
    

   