const openMenu = document.querySelector('#menu');
const closeBtn = document.querySelector('#close-btn');
const ul = document.querySelector('ul');

const openSidebarMenu =()=>{
    ul.classList.toggle('hide-mobile')
}
const closeSidebarMenu = ()=>{
    ul.classList.add('hide-mobile')
}

openMenu.addEventListener('click',openSidebarMenu);
closeBtn.addEventListener('click',closeSidebarMenu);