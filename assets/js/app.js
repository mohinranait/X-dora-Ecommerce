
// GLOBAL VARIABLES
let headerMenuIcon  = document.querySelectorAll('.headerIconSpan');
let header_bottom = document.querySelector('.header_bottom');
let overly = document.querySelector('.overly');

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




// SHOPPING CARD SHOW & HIDE
let headerCart = document.querySelector('.headerCart');
let shoppingCartWrapper = document.querySelector('.shoppingCartWrapper');
headerCart.addEventListener('click', function(){
    shoppingCartWrapper.classList.add('shoppingCartBlock');
    overly.classList.add('active');
})
let closeCartWrapper  = document.querySelector('.closeCartWrapper');
closeCartWrapper.addEventListener('click', () => {
    shoppingCartWrapper.classList.remove('shoppingCartBlock')
    overly.classList.remove('active');
})
overly.addEventListener('click', () => {
    shoppingCartWrapper.classList.remove('shoppingCartBlock')
    overly.classList.remove('active');
})



let appCartIcon = document.querySelector('.appCartIcon');
appCartIcon.addEventListener('click', () => {
    shoppingCartWrapper.classList.add('shoppingCartBlock');
    overly.classList.add('active');
})



/*====================================================================================================
                                USER DASHBOARD PAGE JQUERY START
=======================================================================================================*/
// DASHBOARD VERTICAL TAB
$(document).on("click", ".naccs .vertical_menu .vertical_menu_item", function() {
    var numberIndex = $(this).index();
    if (!$(this).is("active")) {
        $(".naccs .vertical_menu .vertical_menu_item").removeClass("active");
        $(".naccs ul li").removeClass("active");
        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
        var listItemHeight = $(".naccs ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
    }
});

// USER DASHBOARD AVATER IMAGE UPLOAD AND PREVIEW 
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').attr('src', e.target.result );
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});
/*====================================================================================================
                                USER DASHBOARD PAGE JQUERY END
=======================================================================================================*/


/*====================================================================================================
                                SINGLE PRODUCT PAGE  END
=======================================================================================================*/
$('.tab-link').click( function() {
    var tabID = $(this).attr('data-tab');
    $(this).addClass('active').siblings().removeClass('active');
    $('#tab-'+tabID).addClass('active').siblings().removeClass('active');
});
/*====================================================================================================
                                SINGLE PRODUCT PAGE  END
=======================================================================================================*/

