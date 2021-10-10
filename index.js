let main = document.getElementById('main');
let menuDesktop = document.getElementById('menu-desktop');

const menuToggle = () =>{
    console.log('menuToggle');
    if (main.style.display === 'flex'){
        menuDesktop.style.display = 'flex';
        main.style.display = 'none';
       
    } else {
        main.style.display = 'flex';
        menuDesktop.style.display = 'none';
    }
}



