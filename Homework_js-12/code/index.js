/* Створіть сайт з коментарями. 
    Коментарі тут : https://jsonplaceholder.typicode.com/
    Сайт має виглядати так : https://kondrashov.online/images/screens/120.png
    На сторінку виводити по 100 коментарів, у низу сторінки зробити поле пагінації (перемикання сторінок) при перемиканні
    сторінок показувати нові коментарі. 
    з коментарів виводити : 
    "id": 1,
    "name"
    "email"
    "body": */

    import req from "./method.js"
    req("https://jsonplaceholder.typicode.com/comments", show);

    
function show (data = []) {

    if(!Array.isArray(data)) return;
    const state = {
        currentPage: 1,
        limit: 100
      };


  function displayList(data, limitPage, page){
    const coments = document.querySelector(".coments");
    coments.innerHTML = "";
    page--;

    const PaginatedData = data.slice(page*limitPage, page*limitPage+limitPage);

    PaginatedData.forEach((obj)=>{
            const pattern = `
            <div class="coment">
            <div class="coment-info">
                <div class="coment-id">${obj.id}</div>
                <div class="name">${obj.name}</div>
                <div class="email">${obj.email}</div>
            </div>
            <div class="coment-text">${obj.body}</div>
            </div>
            `
            coments.insertAdjacentHTML("beforeend", pattern)
        })
  }


  function displayPagitation(data, limitPage){
    
    const pagination  = document.querySelector(".pagination");
    const pageCount = Math.ceil(data.length / limitPage)
    const ul = document.createElement("ul")
    ul.classList.add("pagination-list")

   for(let i=0; i < pageCount; i++){
        const li = displayPagitationBtn(i+1)
        ul.appendChild(li)
        }
    pagination.appendChild(ul)
  }

  
   function displayPagitationBtn(page){
        const li = document.createElement('li')
        li.classList.add('pagination-item')
        li.innerText = page;

        if(state.currentPage == page) li.classList.add('pagination-item-active')

        li.addEventListener('click', () => {
            state.currentPage = page
            displayList(data, state.limit, state.currentPage)

            let currentItemLi = document.querySelector('li.pagination-item-active')
            currentItemLi.classList.remove('pagination-item-active')
            li.classList.add('pagination-item-active')
        })
        return li
    }

  displayPagitation(data, state.limit)
  displayList(data, state.limit, state.currentPage)
}
