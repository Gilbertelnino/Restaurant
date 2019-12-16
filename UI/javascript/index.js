const openMenu = document.querySelector('#menu');
const closeBtn = document.querySelector('#close-btn');
const ul = document.querySelector('ul');

const openSidebar =()=>{
    ul.classList.toggle('hide-mobile')
}
const closeSidebar = ()=>{
    ul.classList.add('hide-mobile')
}

openMenu.addEventListener('click',openSidebar);
closeBtn.addEventListener('click',closeSidebar);