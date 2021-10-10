let main = document.getElementById('main');
let menuDesktop = document.getElementById('menu-desktop');

const menuOpen = () =>{
    console.log('menu open');
    main.style.display = 'none';
    menuDesktop.style.display = 'flex';
    
}

const menuClose = () =>{
    console.log('menu close');
        main.style.display = 'flex';
        menuDesktop.style.display = 'none';
    
}



