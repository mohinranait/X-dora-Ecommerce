
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
    let menuIconWindow = document.querySelector('.menuIconWindow');
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

// WINDOW LOADING TIME
$(window).on('load', function () {
    $(".loader").fadeOut('fast');
});

// SELECT1 JS
$('.custome-select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});



// HOME PAGE LEFT CATEGORY SHOW / HIDE
$(".headercatButtonWrapper").click(function(){
    $(".header_category_group").slideToggle('slow');
    var icon = $(".headercatButtonWrapper i.browesCategory");
    
    if($(icon).hasClass("fa-angle-down")){
        $(icon).addClass("fa-angle-up").removeClass("fa-angle-down");
    }else{
        $(icon).addClass("fa-angle-down").removeClass("fa-angle-up");
    }
   
})

// Window Navbar menu sticky
$(".menuIconWindow").click(()=>{
    $(header_bottom).toggleClass("headerBottomSticky");
})

// MOBILE SEARCH 
$(".searchDisplay").click(()=>{
    $(".header_search").toggleClass("active")
})

// SHOPPING CARD SHOW & HIDE
let shoppingCartWrapper = $('.shoppingCartWrapper');
$(".headerCart").click(()=>{
    $(shoppingCartWrapper).addClass("shoppingCartBlock");
    $(overly).addClass('active');
})

let closeCartWrapper  = $('.closeCartWrapper');
$(closeCartWrapper).click(()=>{
    $(shoppingCartWrapper).removeClass("shoppingCartBlock");
    $(overly).removeClass('active');
})

$(overly).click(function(){
    $(shoppingCartWrapper).removeClass("shoppingCartBlock");
    $(overly).removeClass('active');
})

$('.shoppingCartFooter .couponshow').click(function(){
    $(".shoppingCartBody .cuponform_wrapper").slideToggle('first')
})

$(".appCartIcon").click(function(){
    $(shoppingCartWrapper).addClass("shoppingCartBlock");
    $(overly).addClass('active');
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
                                SINGLE PRODUCT PAGE  START
=======================================================================================================*/
$(document).ready(function(){
    $('.tab-link').click( function() {
        var tabID = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('#tab-'+tabID).addClass('active').siblings().removeClass('active');
    });

    // Single Product Variant js code
    $(".product_attr_label").click(function(e){
        var parentElement = $(this).parents('li')
        if( $(".size_item input[type='radio'],.color_item input[type='radio']").is(":checked") ){
            $(parentElement).addClass('active').siblings().removeClass('active');
        }
    })

    // Single Product Increment and Decrement js code
    var quintityMinusBtn = $(".quintity_minus");
    var maximumPlusBtn = $(".maximum_plus");

    // Increment
    maximumPlusBtn.click(function(){
        var quintity = $(this).parent(".single_quintity_group").find(".single_quintity");
        quintity.val(Number(quintity.val())+1);
    })
    // Decrement
    quintityMinusBtn.click(function(){
        var quintity = $(this).parent('.single_quintity_group').find(".single_quintity");
        var quintityValue = Number(quintity.val());
        if( quintityValue > 1){
            quintity.val(quintityValue - 1);
        }
    })


})
/*====================================================================================================
                                SINGLE PRODUCT PAGE  END
=======================================================================================================*/



//======================== Register Page start ===================================
$('.tab-link-auth').click( function() {
	var tabID = $(this).attr('data-tab');
	$(this).addClass('active').siblings().removeClass('active');
	$('#tab-'+tabID).addClass('active').siblings().removeClass('active');
});
// ================================= Register Page end ===========================

/*====================================================================================================
                                CHECKOUT PAGE  START
=======================================================================================================*/

    $('#showProductCheckout').click(function(){
        $(".checkout_product_cart").slideToggle('first');
    })

    $('.checkout_login_btn').click(function(){
        $("#loginCollops").slideToggle('first');
    })

    $('.checkout_discount_btn').click(function(){
        $("#couponCollops").slideToggle('first');
    })

    function differentShippingChecked() {
        if($('.different_shipping_checked').is(":checked"))   
            $(".different_address_wrapper").slideDown('first');
        else
            $(".different_address_wrapper").slideUp('first');
    };
/*====================================================================================================
                                CHECKOUT PAGE  END
=======================================================================================================*/



/* ============================================ GLOBAL JS CODE START ============================= */
// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();
// Click function
$('#tabs-nav li').click(function(){
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});



// Mobile navmenu js code start 
$('.appCategoryIcon,.closeNav').click( function() {
    $('.mobile_navbar').toggleClass('mobileMenuShow');
    $(".overly").toggleClass("active");
});
$(".overly").click(function(){
    $('.mobile_navbar').removeClass('mobileMenuShow');
})
$('.mobile_nav_item a i').click(function(){
    var parentElement = $(this).parents('a')
    let mobileSubLinkNavs = parentElement.next();
    $(mobileSubLinkNavs).slideToggle('first');
})
  // Mobile navmenu js code end


