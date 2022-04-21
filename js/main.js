let xrh = new XMLHttpRequest();
let url = 'https://reqres.in/api/users';

xrh.open('GET', url);

let row = document.getElementById('row');
let arr = [];

xrh.onload = function(){
  let data =  JSON.parse(this.responseText) ;

   arr = data.data;

   function renderItems(array){
    array.forEach((item)=>{
      let card = document.createElement('div');
      card.innerHTML = `
      <div class="card__inner">
    <div class="card__header">
      <img src="${item.avatar}" alt="card-img" class="card__img">
      <div class="header__desc">
        <p class="name">${item.first_name}</p>
        <p class="full-name">${item.first_name} ${item.last_name}</p>
      </div>
    </div>
    <ul class="card__list">
    <li class="card__item">
      <p class="card__text">Company</p>
      <p class="card__par">Nisa</p>
    </li>
    <li class="card__item">
      <p class="card__text">Email</p>
      <p class="card__par">${item.email}</p>
    </li>
    <li class="card__item">
      <p class="card__text">Phone</p>
      <p class="card__par">1-463-123-4447</p>
    </li>
    <li class="card__item">
      <p class="card__text">Website</p>
      <p class="card__par">ola.org</p>
    </li>
  </ul>
  <button onclick="removeItem(${item.id})" class="btn-delete">Remove User</button>
  </div>
      `
      card.classList= 'card col-md-4 col-sm-6 col-xs-12'
      row.appendChild(card)
    })
   }
   renderItems(arr);
}

xrh.send();


function removeItem(el){
  let btns = document.querySelector('.btn-delete')
  btns.parentNode.parentNode.remove();
}
