// Button search
let searchForm = document.querySelector('.home_search_form_container')
document.querySelector('#search_btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

// Button cart
let cart = document.querySelector('.home_shopping_cart_container')
document.querySelector('#cart_btn').onclick = () =>{
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

// Button login
let loginForm = document.querySelector('.home_login_form_container')
document.querySelector('#login_btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
}

// Button menu bar
let navbar = document.querySelector('.home_header .home_navbar')
document.querySelector('#menu_btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
}

//di chuyển hình ảnh theo chuột
document.querySelector('.home_page').onmousemove = (e) =>{
    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;
    document.querySelector('.home_page .home_parallax_img').style.transform = `translateX(${y}px) translateY(${x}px) `; //alt + 96 = ``
}
document.querySelector('.home_page').onmouseleave = (e) =>{
    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;
    document.querySelector('.home_page .home_parallax_img').style.transform = `translateX(0px) translateY(0px) `; //alt + 96 = ``
    

}