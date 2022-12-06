
// GLOBAL VARIABLES
let headerMenuIcon  = document.querySelectorAll('.headerIconSpan');
let header_bottom = document.querySelector('.header_bottom');

// STICKI HEADER 
document.addEventListener('scroll', () =>{
    let headerMiddle = document.getElementById("header-middle")
    if( window.innerWidth > 768){
        headerMiddle.classList.toggle("fixedHeader" , window.scrollY > 200);
    }
    let hiddenText = document.querySelectorAll('.heade_text_naem');
    let menuIconWindow= document.querySelector('.menuIconWindow');
    // When window scroll then add header icon style
    for (let i = 0; i < headerMenuIcon.length; i++) {
        const addStyleElement = headerMenuIcon[i];
        if( window.scrollY > 200 ){
            addStyleElement.classList.add('headerIconStyle');
        }else{
            addStyleElement.classList.remove('headerIconStyle');
            header_bottom.classList.remove('headerBottomSticky');
        }
    }

    // Header icon text none and menu btn hide & show 
    for (let i = 0; i < hiddenText.length; i++) {
        const element = hiddenText[i];
        if( window.scrollY > 200 ){
            element.style.display='none';
            menuIconWindow.style.display = 'block';
        }else{
            element.style.display='block';  
            menuIconWindow.style.display = 'none';          
        }
    }
})



// HOME PAGE LEFT CATEGORY SHOW / HIDE
let headercatButtonWrapper = document.querySelector(".headercatButtonWrapper");
headercatButtonWrapper.addEventListener('click', function(){
    let headerCategoryGroup = document.querySelector('.header_category_group');
    headerCategoryGroup.classList.toggle('categoryActive');
})


// Window menu sticky
let menuIconWindow = document.querySelector('.menuIconWindow');
menuIconWindow.addEventListener('click', () => {
    header_bottom.classList.toggle('headerBottomSticky');
})



// MOBILE SEARCH 
let searchDisplay = document.querySelector('.searchDisplay');
searchDisplay.addEventListener('click', () => {
    let header_search  = document.querySelector('.header_search');
    header_search.classList.toggle('active')
})

