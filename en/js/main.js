
// import { realDb } from "./firebase";

var bannerDatas = [];
var gallery1=[];
var gallery2=[];
var ourCaviar=[];
var contact=[];
var careNature=[];
var whereBuy=[]

$(document).ready( async function(){
    
        var response = await fetch('https://baku-caviar-ba330-default-rtdb.firebaseio.com/dataCountEn.json')
        var responseData= await response.json()

        var demo=[]
        for (const key in responseData) {
            let blog = {
              id: responseData[key].id,
              title: responseData[key].title,
              photo:responseData[key].imageUrl,
            };
    
            demo.push(blog);
          }

          bannerDatas=demo;
          console.log(bannerDatas);

    

   await bannerDatas.forEach((data) => {
        $('.banner-swiper-wrapper').append(`
        <div class="swiper-slide banner-swiper-slide"
        s>
        <img src="${data.photo}" class="banner-image" alt="">
        <div class="col-md-6 banner-title ">
            <h1 class="lang" key="h1">${data.title}
            </h1>
        </div>
         </div>
   `)
    })


        var resAbout = await fetch('https://baku-caviar-ba330-default-rtdb.firebaseio.com/dataCountAboutEn.json')
        var responseDataAbout= await resAbout.json()

        var demoAbout=[]
        for (const key in responseDataAbout) {
            let blog = {
              id: responseDataAbout[key].id,
              title: responseDataAbout[key].title,
              photo:responseDataAbout[key].imageUrl,
            };
    
            demoAbout.push(blog);
          }

          gallery1=demoAbout;


          console.log(gallery1);
        
          await gallery1.forEach(function(gallery){
            $('#gallery1').append(`
            <div class="swiper-slide banner-swiper-slide1" >
            <a href="${gallery.photo}" data-lightbox="mygallery">
                <img src="${gallery.photo}" alt="">
            </a>
            
        </div>
            `)
          })

          await $('#gallery-text1').html(`
            ${gallery1[0].title}
          `)




          var resHeritage = await fetch('https://baku-caviar-ba330-default-rtdb.firebaseio.com/dataCountHeritageEn.json')
          var responseDataHeritage= await resHeritage.json()
  
          var demoHeritage=[]
          for (const key in responseDataHeritage) {
              let blog = {
                id: responseDataHeritage[key].id,
                title: responseDataHeritage[key].title,
                photo:responseDataHeritage[key].imageUrl,
              };
      
              demoHeritage.push(blog);
            }
  
            gallery2=demoHeritage;
  
          
            await gallery2.forEach(function(gallery){
              $('#gallery2').append(`
              <div class="swiper-slide banner-swiper-slide1" >
              <a href="${gallery.photo}" data-lightbox="mygallery1">
                  <img src="${gallery.photo}" alt="">
              </a>
              
          </div>
              `)
            })
  
            await $('#gallery-text2').html(`
              ${gallery2[0].title}
            `)



        
            var resOurCaviar = await fetch('https://baku-caviar-ba330-default-rtdb.firebaseio.com/dataCountOurCaviarEn.json')
            var responseDataOurCaviar= await resOurCaviar.json()
    
            var demoOurCaviar=[]
            for (const key in responseDataOurCaviar) {
                let blog = {
                //   id: responseDataOurCaviar[key].id,
                  title: responseDataOurCaviar[key].title,
                  photo:responseDataOurCaviar[key].imageUrl,
                };
        
                demoOurCaviar.push(blog);
              }
    
              ourCaviar= await demoOurCaviar;
            
              
                $('.box1').prepend(`
                <div class="logo-img"><img src="${ourCaviar[0].photo}" alt=""></div>
                `)
                $('.box2').prepend(`
                <div class="logo-img"><img src="${ourCaviar[1].photo}" alt=""></div>
                `)
                $('.box3').prepend(`
                <div class="logo-img"><img src="${ourCaviar[2].photo}" alt=""></div>
                `)
                $('.box4').prepend(`
                <div class="logo-img"><img src="${ourCaviar[3].photo}" alt=""></div>
                `)
             
                $('.box1').append(`
                <p class="lang" key="caviar_text_1">${ourCaviar[0].title}</p>
                `)
                $('.box2').append(`
                <p class="lang" key="caviar_text_3">${ourCaviar[1].title}</p>
                `)
                $('.box3').append(`
                <p class="lang" key="caviar_text_4">${ourCaviar[2].title}</p>
                `)
                $('.box4').append(`
                <p class="lang" key="caviar_text_5">${ourCaviar[3].title}</p>
                `)
    
  
                var resOurContact = await fetch('https://baku-caviar-ba330-default-rtdb.firebaseio.com/dataCountContact.json')
                var responseDataContact= await resOurContact.json()
        
                var demoContact=[]
                for (const key in responseDataContact) {
                    let blog = {
                    //   id: responseDataOurCaviar[key].id,
                      title: responseDataContact[key].title,
                    //   photo:responseDataOurCaviar[key].imageUrl,
                    };
            
                    demoContact.push(blog);
                  }
        
                  contact= await demoContact;

                  $('.call').append(`
                   <a href="${"tel"+":"+ contact[0].title}">${contact[0].title}</a>
                  `)
                  $('.footer-phone').append(`
                   <a href="${"tel"+":"+ contact[0].title}">${contact[0].title}</a>
                  `)


                  var resCareNature = await fetch('https://baku-caviar-ba330-default-rtdb.firebaseio.com/dataCountCareNatureEn.json')
                  var responseDataCareNature= await resCareNature.json()
          
                  var demoCareNature=[]
                  for (const key in responseDataCareNature) {
                      let blog = {
                        id: responseDataCareNature[key].id,
                        title: responseDataCareNature[key].title,
                        photo:responseDataCareNature[key].imageUrl,
                      };
              
                      demoCareNature.push(blog);
                    }
          
                    careNature=demoCareNature;
          
                    await $('.third_img_bg').append(
                        `
                        <img src="${careNature[0].photo}" alt="">
                        `
                    )

                    await  $('.text1').append(`
                    <p class="lang" key="" class="nature_text_1">${careNature[0].title}</p>
                    `)
                    await $('.text2').append(`
                    <p class="lang" key="" class="nature_text_2">${careNature[1].title}</p>
                    `)


                    var responseWhereBuy= await fetch('https://baku-caviar-ba330-default-rtdb.firebaseio.com/dataCountWhereBuyEn.json')
                    var responseDataWhereBuy= await responseWhereBuy.json()
            
                    var demoWhereBuy=[]
                    for (const key in responseDataWhereBuy) {
                        let blog = {
                          id: responseDataWhereBuy[key].id,
                          title: responseDataWhereBuy[key].title,
                          photo:responseDataWhereBuy[key].imageUrl,
                        };
                
                        demoWhereBuy.push(blog);
                      }
            
                      whereBuy=demoWhereBuy;
                      
                      console.log(whereBuy);
                
                

                   await whereBuy.forEach((data) => {
                        $('.last-swiper-wrapper').append(`
                        <div class="swiper-slide last-swiper-slide"
                        s>
                        <img src="${data.photo}" class="banner-image" alt="">
                        
                         </div>
                   `)
                    })

                    await $('.title-container').append(`
                    
                    <p class="lang" key="buy_text">${whereBuy[0].title}</p>
                    `)
                    
                

      
})

$(document).ready(function() {
    
/*  ======================================================================
    MOBILE MENU
========================================================================== */
    $('.js-mb-menu-open').on('click', function(){
        $('.responsive-menu').addClass('active');
        $('.no-touch #cd-vertical-nav .cd-label').css({opacity: 1});
        $('.responsive-overlay').addClass('active');
        $('body').addClass('not-scroll');
        $('#cd-vertical-nav').show();
    });

    $('.responsive-overlay').on('click', function(){
        $('.responsive-menu').removeClass('active'); 
        $('.responsive-overlay').removeClass('active');
        $('.no-touch #cd-vertical-nav .cd-label').css({opacity: 0});
        $('body').removeClass('not-scroll');
        if($(window).width() < 767) {
            $('#cd-vertical-nav').hide();
        }
    });

    $('.responsive-menu__close').on('click', function(){
        $('.responsive-menu').removeClass('active'); 
        $('.responsive-overlay').removeClass('active');
        $('.no-touch #cd-vertical-nav .cd-label').css({opacity: 0})
        $('body').removeClass('not-scroll');
        if($(window).width() < 767) {
            $('#cd-vertical-nav').hide();
        }
    });

/*  ======================================================================
    OPEN SUB MENU
========================================================================== */
    $('.mb-menu__open-sub-menu').on('click', function(){
        var mb_item = $(this).parent();
        if (!mb_item.hasClass('active')){
            mb_item.addClass('active');
            $(this).next('.mb-sub-menu').slideDown(200);
        }
        else {
            mb_item.removeClass('active');
            $(this).next('.mb-sub-menu').slideUp(200);
        }
    });

    $('.js-mb-open-sub-menu').on('click', function(e){
        e.preventDefault();
        var mb_item = $(this).parent();
        if (!mb_item.hasClass('active')){
            mb_item.addClass('active');
            $(this).next().next('.mb-sub-menu').slideDown(200);
        }
        else {
            mb_item.removeClass('active');
            $(this).next().next('.mb-sub-menu').slideUp(200);
        }
    });


    $('.select').find('.select__title').on('click', function(e){
        var title  = $(this), 
            select = $(this).parent(), 
            list   = title.next('.select__list');

        if( title.hasClass('active') ){
            title.removeClass('active');
            list.removeClass('active');
            select.removeClass('active');
            return false;
        } 
        else {
            $('.select__title').removeClass('active');
            $('.select__list').removeClass('active');
            $('.select').removeClass('active');
            title.addClass('active');
            list.addClass('active');
            select.addClass('active');
            return false;
        }
    });

    
    // $("a[data-lightbox='mygallery']").click(function(){
    //     console.log($(window).scrollTop()=0);

    //     console.log('sksksks');
    // })

    $(document).click(function(e){
        $('.select__title').removeClass('active');
        $('.select__list').removeClass('active');
        $('.select').removeClass('active');
    });

    $('.select__item').on('click', function(e){
        var item  = $(this), 
            title = item.parent().prev('.select__title'),
            input = item.parent().parent().find('.select__input'),
            select = title.parent();         

        if(select.attr('data-select') != undefined){
            title.removeClass().addClass('select__title').addClass(item.data('class'));
        }; 

        $(this).addClass('active').siblings().removeClass('active');

        if (!item.parent().hasClass('js-no-select')) {
            title.text(item.text());
            input.val(item.text());
        }
        item.parent().removeClass('active');  
    });

    $('.select__title').on('mousedown', function(e){
        e.preventDefault();
    });

    $('.select__title').on('selectstart', function(e){
        e.preventDefault();
    });
})

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 5) {
        //clearHeader, not clearheader - caps H
        $(".header-responsive").addClass("fixed");
    } else {
        $(".header-responsive").removeClass("fixed");
    }
});

var lastScrollTop = 0;
// $(window).scroll(function(event){
//     var st = $(this).scrollTop();

//     if (st > lastScrollTop || st === 0){
//         $('.logotype').removeClass("UpImg");
//         $('.logotype').addClass("DownImg");
//     } else {
//         $('.logotype').removeClass("DownImg");
//         $('.logotype').addClass("UpImg");
//     }
//     lastScrollTop = st;
// });

$(document).ready(function(){
    $('').on('hover',function(){;
        $('.').show();
        console.log('1');
    })
});

jQuery(document).ready(function($){
    var contentSections = $('.cd-section'),
        navigationItems = $('#cd-vertical-nav a');

    updateNavigation();
    $(window).on('scroll', function(){
        updateNavigation();
    });

    //smooth scroll to the section
    // navigationItems.on('click', function(event){
    //     event.preventDefault();
    //     smoothScroll($(this.hash));
    // });
    // //smooth scroll to second section
    // $('.cd-scroll-down').on('click', function(event){
    //     event.preventDefault();
    //     smoothScroll($(this.hash));
    // });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
        $('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
        $('.touch #cd-vertical-nav').removeClass('open');
    });

    function updateNavigation() {
        contentSections.each(function(){
            $this = $(this);
            var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
            if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
                navigationItems.eq(activeSection).addClass('is-selected');
            }else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }
        });
    }

    function smoothScroll(target) {
        $('body,html').animate(
            {'scrollTop':target.offset().top},
            600
        );
    }
});

$(document).ready(function(){
    $('#cd-vertical-nav ul li a').on('click', function(){
        $('.responsive-menu').removeClass('active');
        $('.responsive-overlay').removeClass('active');
        $('.no-touch #cd-vertical-nav .cd-label').css({opacity: 0})
        $('body').removeClass('not-scroll');

        if($(window).width() < 767) {
            $('#cd-vertical-nav').hide();
        }
    });

  
});

/* form */

$(document).ready(function(){
    
    /* Modal styles, show & hide*/ 
    $('.callback-button').on('click', function(){
        $('.mb-modal').addClass('show');
        console.log('akakakak');
        $('.mb-modal__overlay').show();
    });
    $('.mb-modal__close').on('click', function(){
        $('.mb-modal').removeClass('show');
        $('.mb-modal__overlay').hide();
    });
    $('.mb-modal__overlay').on('click', function(){
        $('.mb-modal').removeClass('show');
        $(this).hide();
    });

    /* Modal Axaj to php */
    $('#form').submit(function (event){
        event.preventDefault();
        var data_form = $('form').serialize();

        $.ajax({
            url: 'ajax/mail.php',
            type: 'post',
            // dataType: 'json',
            data: data_form,
            success: function(data) {
                $('.mb-modal-good').show();
                setTimeout(function(){
                    $('.mb-modal').hide();
                    $('.mb-modal__overlay').hide();
                    $('.mb-modal-good').hide();
                    $("#form")[0].reset();
                }, 1000);
            }
        });
    }
    );
})











