//task 1
const btn = document.querySelector("#btn");

btn.onclick = function(){
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;

    document.getElementById("input1").value = input2;
    document.getElementById("input2").value = input1;
}

//task2
const [...div] = document.getElementsByTagName("div");

div.forEach(element => {
    element.style.backgroundColor = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;
})
function randomNum (num) {
    return Math.floor(Math.random() * (num + 1)); 
}

//task3
const coment_btn = document.getElementById("coment_btn");
const comentSection = document.querySelector(".comentSection");
const coment_input = document.getElementById("coment_input");


coment_btn.onclick = function(){
const div = document.createElement("div");
div.className = "coment_text"
div.innerText = coment_input.value;
comentSection.appendChild(div);
coment_input.value = "";

// div.onclick = function(){
//     comentSection.removeChild(div);
// }
}

//task4
const image = [ "https://itproger.com/img/courses/1476977240.jpg", "https://itproger.com/img/courses/1476977488.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
];

const img_btn = document.getElementById("img_btn");

    current = 0;

img_btn.onclick = function(){
    const sectionImage = document.querySelector(".image img");
    current++;
    if(current>=image.length){
        current = 0;
    }
    sectionImage.src = image[current];
}

//task5

const quantity_btn = document.getElementById("quantity_btn")

quantity_btn.onclick = function(){
    const quantityInput = document.getElementById("quantity");

    const quantity = parseInt(quantityInput.value);

    for(let i = 0; i < quantity; i++){
    const paragraphs = document.createElement("p")
    paragraphs.className = "paragraphs";
    paragraphs.innerText = `${i+1}. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione voluptas similique quae rerum ipsum delectus, ipsa adipisci, mollitia illo dolores expedita a voluptatum. Voluptatum laborum dolorem aliquam culpa recusandae ut`;
    const sectionParagraphs = document.querySelector(".sectionParagraphs");
    sectionParagraphs.append(paragraphs);
    
    paragraphs.onclick = function(){
        paragraphs.remove();
    }
    quantityInput.value = "";
}
}

//task6
const list = document.getElementById("list");
const li = document.getElementsByTagName("li");
const currentNode = document.querySelector(".selected")

function selectFirstChild(){
    const currentNode = document.querySelector(".selected")

    list.firstElementChild.classList.add('selected');
    currentNode.classList.remove('selected');
}

function selectLastChild(){
    const currentNode = document.querySelector(".selected")

    list.lastElementChild.classList.add('selected');
    currentNode.classList.remove('selected');
}

function selectNextNode() {
    const currentNode = document.querySelector(".selected");
    
    if (!currentNode) {
        list.firstElementChild.classList.add('selected');
        return;
      }

    const nextNode = currentNode.nextElementSibling;

    if (!nextNode) {
        list.firstElementChild.classList.add('selected');
        currentNode.classList.remove('selected');
        return;
    } 
    currentNode.classList.remove('selected');
    nextNode.classList.add('selected');
}


function selectPrevNode() {
    const currentNode = document.querySelector(".selected");
    
    if (!currentNode) {
        list.firstElementChild.classList.add('selected');
        return;
      }

    const prevNode = currentNode.previousElementSibling;

    if (!prevNode) {
        list.lastElementChild.classList.add('selected');
        currentNode.classList.remove('selected');
        return;
    } 
    currentNode.classList.remove('selected');
    prevNode.classList.add('selected');
}

function createNewChild(){
    const li = document.createElement("li")
    list.append(li);
    const numItems = list.getElementsByTagName('li').length;
    li.innerText = `List Item ${numItems}`;
}

function removeLastChild(){
    const lastChild = list.lastChild;
    if(lastChild){
         list.removeChild(lastChild)
    }
   
}

function createNewChildAtStart(){
    const li = document.createElement("li")
    list.insertBefore(li, list.firstChild);
    li.innerText = `List Item`;
};