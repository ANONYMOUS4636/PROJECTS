let menu_btn = document.querySelector('.menu-toggle')
let menu_list = document.querySelector('.info')

menu_btn.addEventListener('click', () => {
    menu_list.classList.toggle('active')  // no dot
})

document.querySelector('.a01').addEventListener('click',()=>{
    window.location.href='netflix.html'
})