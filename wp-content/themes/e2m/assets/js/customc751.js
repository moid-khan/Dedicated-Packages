jQuery(function($){  
  
    function stickyTabs(){
      $(window).width() > 1024 ?  $('.site-header.sticky + #portfolioTabPart').css('top', $('.site-header').outerHeight()) : '';
    }
  
    $(window).resize(function(){
      stickyTabs();
    });
  
      $(document).ready(function(){
  
       stickyTabs();
  
        $('.nextToggle').click(function(){
           $(this).toggleClass('is-open').parents('.main-navigation').toggleClass('is-open');
        });
  
        
    });    

/* white-label page slider */
$('.only-white-label-page-banner .wl-slider').slick({
  dots: true,
  infinite: true,
  autoplaySpeed:5000,
  autoplay:true,
  slidesToShow: 1,
  arrows: false,
});
      /*---Footer Form Add Span Tag Start--*/    
      $(document).ready(function(){
        jQuery(".sitemap-box ul li a[href^='#']").removeAttr("href"); 
        jQuery(".list-seo-sec .advanced-local-seo a[href^='#']").addClass("remove_hover"); 
        jQuery(".list-seo-sec .advanced-local-seo a[href^='#']").removeAttr("href"); 
  
       $('.service-menu-sub').hide()
     
      })
      jQuery(window).load(function(){
          /*------Tabing Start------*/
          
          jQuery('.philosopy-descktop .tab-header .header').click(function(){
              jQuery('.philosopy-descktop .tab-header .header').removeClass('open');
              jQuery('.philosopy-descktop .tab-data .details').removeClass('open');
              var data_id= jQuery(this).attr('data-attr'); 
              jQuery(this).addClass('open');                      
              jQuery('.section-value .philosopy-descktop .details#'+data_id).addClass('open');            
          });
          
          /*jQuery('.philosopy-mobile .expand-col-box .ditels-tog').slideUp();
          jQuery('.philosopy-mobile .expand-col-box .ditels-tog.open').slideDown();
          jQuery('.philosopy-mobile .tab-header .header').click(function(){             
              if(jQuery(this).hasClass('open')){               
                  jQuery(this).removeClass('open');                 
                  jQuery(this).next('.ditels-tog').slideUp();                
              }else{ 
                  jQuery('.philosopy-mobile .tab-header .header').removeClass('open');
                   jQuery('.philosopy-mobile .expand-col-box .ditels-tog').slideUp();
                  jQuery(this).addClass('open');   
                  jQuery(this).next('.ditels-tog').slideDown();
                  setTimeout(function(){
                  jQuery('html, body').animate({
                  scrollTop: jQuery('.philosopy-mobile .tab-header .header.open').offset().top - 90   
                  }, 1000);},500) 
              }
          });*/
          $('.philosopy-mobile > .tab-header > .ditels-tog').hide();
            $('.philosopy-mobile > .tab-header').click(function() {
              if ($(this).hasClass("active")) {
                $(this).removeClass("active").find(".ditels-tog").slideUp();
              } else {
                $(".philosopy-mobile > .tab-header.active .ditels-tog").slideUp();
                $(".philosopy-mobile > .tab-header.active").removeClass("active");
                $(this).addClass("active").find(".ditels-tog").slideDown();
              }
              return false;
            });
      /*------Tabing End------*/ 
      })
      
      /*---Footer Form Add Span Tag End--*/
      $('.menu-item-16').click(function(){
      $('.service-menu-sub').slideDown();        
      }) 
      $('.service-menu-sub .close-icon').click(function(){
      $('.service-menu-sub').slideUp();        
      })    
      /*--------- Testimonials Slider ------------*/
      $('.testimonial-slide').slick({
        dots: true, infinite: false,arrows:false, slidesToShow: 2.5, slidesToScroll: 1,adaptiveHeight: true,		  
        responsive: [
          {
            breakpoint: 1282,
            settings: { slidesToShow: 3, }
          },{
            breakpoint: 1281,
            settings: { slidesToShow: 2.25, }
          },{
            breakpoint: 1025,
            settings: { slidesToShow: 1.85, }
          },{
            breakpoint: 767,
            settings: { slidesToShow: 1, }
          }
         ]
       });
      /*--------- Testimonials Slider Ends------------*/
      /*--------- Clinet Slider ------------*/
      $('.clinet-slider').slick({
        dots: true, infinite: false,arrows:false, slidesToShow: 1, slidesToScroll: 1,fade: true, adaptiveHeight: true,		  
        responsive: [
          {
            breakpoint: 1500,
  
          },{
            breakpoint: 1281,
  
          },{
            breakpoint: 1050,
  
          },{
            breakpoint: 601,
  
          }
         ]
       }); 
      /*--------- Clinet Slider Ends------------*/    
      /*--------- communication  Slider ------------*/
      $('.communication-nav').slick({
        dots: false, infinite: true,  slidesToShow: 3, slidesToScroll: 1,fade: false,asNavFor: '.communication-slider',focusOnSelect: true,centerMode:true,
        prevArrow: '<button aria-label="slide" class="slick-arrow prev"></button>',
        nextArrow: '<button aria-label="slide" class="slick-arrow next"></button>',
        responsive: [
          {
            breakpoint: 1500,
  
          },{
            breakpoint: 1281,
  
          },{
            breakpoint: 769,
            settings: { slidesToShow: 3, }
  
          },{
            breakpoint: 640,
              settings: { slidesToShow: 1, }
  
          }
         ]
       });
      $('.communication-slider').slick({
        dots: false, infinite: true,arrows:false, slidesToShow: 1, slidesToScroll: 1,fade: false,draggable:true,asNavFor: '.communication-nav',adaptiveHeight: true,		  		  
       });
      /*--------- communication Slider Ends------------*/    
      /*------Popup Start --------*/
      $('.open-popup').click(function(){
      $(this).parents('.photo').find('.popup-deta').addClass('active');
      });
      $('.close-btn').click(function(){
      $('.popup-deta').removeClass('active');
      });    
      /*------Popup End --------*/  
  
   /*------Tabing Start------*/
      jQuery('.tab-box .tab-header .header').click(function(){
      jQuery('.tab-box .tab-header .header').removeClass('open');
      jQuery('.tab-box .tab-data .details').removeClass('open');
      var data_id= jQuery(this).attr('id');
      //console.log(data_id);
      jQuery(this).addClass('open');       
      jQuery('.section-value .values-box .expand-col-box .details').removeClass('open');
      jQuery(this).next().addClass('open');       
      jQuery('.tab-box .tab-data .details').each(function(){
          var data_attr= jQuery(this).attr('data-attr');           
          if(data_attr == data_id){              
             jQuery(this).addClass('open'); 
          }else{
            console.log(1);
          /*jQuery('.section-value .values-box .expand-col-box .details').removeClass('open');*/
          }
      })
      })
      /*------Tabing End------*/ 	
         
      /*-------Faq Start-----*/
      $('.faq-section .answer').slideUp();
      $('.faq-section .question-answer:first-child').addClass('active');
      $('.faq-section .question-answer:first-child .answer').slideDown();
      $('.faq-section .faq-detail .question-answer .question').click(function(){
      $('.faq-section .question-answer .answer').slideUp();
      if($(this).parent('.question-answer').hasClass('active')){
          $(this).parent('.question-answer').removeClass('active');
      }else{
          $('.faq-section .faq-detail .question-answer').removeClass('active'); 
          $(this).parent('.question-answer').toggleClass('active')
      }
      if($('.faq-section .question-answer').hasClass('active')){
          $('.faq-section .question-answer.active .answer').slideDown();
      }
      })
  
      /*-------Faq End-----*/
      jQuery(".mobielMainToggle").click(function(){
  
      jQuery(".mobileMenu").addClass('mobileMenuActive');
  
      });
      jQuery(".closeTogglebtn").click(function(){
  
      jQuery(".mobileMenu").removeClass('mobileMenuActive');
  
      });
      var service_menu = jQuery('#service-inner-menu ul.service-menu').html();   
      jQuery( "<span class='submenuToggle'></span>" ).insertBefore( ".site-header .menu > li > .sub-menu" );
      jQuery( "<span class='submenuToggle'></span><ul class='sub-menu' id='service_append'>"+service_menu+"</ul>" ).insertAfter( ".site-header .menu > li.custome-drop-menu > a" );
      $(".submenuToggle").click(function() {
        //$(this).closest(".site-header .menu > li").siblings().find(".open").removeClass("open");
        jQuery(this).toggleClass("open");
        jQuery(this).parents().toggleClass("active");
        jQuery('.site-header .menu > li').hide();
        jQuery('.site-header .menu > li.active').show();
        jQuery('.site-header .menu > li.active .submenuToggle').hide();
        $(this).next(".site-header .menu > li > .sub-menu").show();
       $(this).closest(".site-header .menu > li").siblings().find(".sub-menu").hide();
          setTimeout(function(){
              $('.site-header .menu > li.active').addClass('animation');            
          },100)
           $('.site-header .menu > li.active .sub-menu li').each(function(i) {
              var $li = $(this);
              setTimeout(function() {
                $li.addClass('animation');
              }, i*100); // delay 100 ms
            });
          
      });
      /*--Header Menu Animation Start----*/
      jQuery('.mobileMenu .submenuToggle').click(function(){
          var menu_name = jQuery(this).prev().text();
          jQuery('.mobileMenu .menuBreadcrumbs').append('<a class="sub_bread">'+menu_name+'</a>');
          //console.log(menu_name);
      })
      jQuery('.menuBreadcrumbs .all').click(function(){
          setTimeout(function(){
              $('.site-header .menu > li').removeClass('animation');  
              setTimeout(function(){              
                  jQuery('.site-header .menu > li').removeClass('active');
              },150)           
          },200)
           $('.site-header .menu > li.active .sub-menu li').each(function(i) {
              var $li = $(this);
              setTimeout(function() {
                $li.removeClass('animation'); 
              }, i*100); // delay 100 ms
            });        
          jQuery('.sub_bread').remove();
          $('.submenuToggle').removeClass("open");
          $('.sub-menu').slideUp();
          jQuery('.site-header .menu > li .submenuToggle').show();
          jQuery('.site-header .menu > li').show();
          
      })
      /*--Header Menu Animation End----*/
      
      jQuery(".custome-drop-menu > a").click(function(event){
        event.preventDefault();
      });
      /*Plan Tabing*/
      jQuery('.plan-list-tabs li').click(function(){
      jQuery('.plan-list-tabs li,.Tabbing-best-plan .best-plan,.plan-cards-list').removeClass('active'); 
      jQuery(this).addClass('active');
      var current_tab = jQuery(this).attr('data-id');  
      jQuery('.Tabbing-best-plan .best-plan#'+current_tab).addClass('active');
      jQuery('.plan-card-mobile-list .plan-cards-list#'+current_tab).addClass('active');
      })
      jQuery('.plan-card-body').slideUp();
      jQuery('.plan-card.active .plan-card-body').slideDown();
      
          
      jQuery('.plan-card .expand-btn, .plan-card .plan-card-top').click(function(){
      if(jQuery(this).parents('.plan-card').hasClass('active')){
          jQuery(this).parents('.plan-card').toggleClass('active');
          jQuery('.plan-card-body').slideUp();
          jQuery('.plan-cards-list.active .plan-card.active .plan-card-body').slideDown();
          console.log(11);        
      }else{
          jQuery('.plan-card-body').slideUp();
          jQuery('.plan-cards-list.active .plan-card').removeClass('active');
           jQuery(this).parents('.plan-card').addClass('active');
          jQuery('.plan-cards-list.active .plan-card.active .plan-card-body').slideDown();
          console.log(22);
         
          /*jQuery('.plan-card-body').slideUp();
          jQuery('.plan-card').removeClass('active');*/
          /*jQuery(this).addClass('active');
          jQuery('.plan-card.active .plan-card-body').slideDown();  */  
      }
      });
  
      jQuery(".plan-card-mobile-list .plan-cards-list .plan-card:first-child").addClass('active');
      /*Back To top Js*/
      
      jQuery("#toTop,.page-id-12515 .get-btn.btn.orange").click(function () {   
        jQuery("html, body").animate({scrollTop: 0}, 1000);
      });
  
      jQuery(window).scroll(function(){
      var show_top = jQuery('#toTop'),
      scroll = jQuery(window).scrollTop();
      if (scroll >= 250) show_top.addClass('active');
      else show_top.removeClass('active');
      })
      /*Header Sticky*/
      jQuery(window).scroll(function(){
      var header_height =jQuery('header.sticky').outerHeight();
      var sticky = jQuery('.site-header'),scroll = jQuery(window).scrollTop(),second_sticky = jQuery('.gallery_slider_outer'),life_e2m_gallery = jQuery('.life-e2m-gallery');  
      
      if (scroll >= 50){
          //sticky.addClass('sticky');
          if($(window).width() > 1024){
          second_sticky.addClass('second-menu-sticky');        
          life_e2m_gallery.addClass('add-more-padding');
          jQuery('.life-e2m-gallery .gallery_slider_outer.second-menu-sticky').css('top',header_height);            
          jQuery('.portfolioTabPart').css('top',header_height);            
          } 
      }
      else{
          //sticky.removeClass('sticky');
          if($(window).width() > 1024){
              second_sticky.removeClass('second-menu-sticky');
              life_e2m_gallery.removeClass('add-more-padding'); 
              jQuery('.life-e2m-gallery .gallery_slider_outer').css('top',0);
              jQuery('.portfolioTabPart').css('top',0);
          }
      }
     
      });
  
      stickyTabs();
      
      /*--Blog Page Scroll Start---*/    
      jQuery(".scroll-tag").click(function (){
          var data_scroll = jQuery(this).attr('href');
          //console.log(data_scroll);
          jQuery('html, body').animate({
              scrollTop: $(data_scroll).offset().top - 100
          }, 1000);
      });    
      /*--Blog Page Scroll End---*/    
      
      /*---Menu In remove # link Start---*/
      jQuery(document).ready(function(){
          jQuery('.remove_link>a').removeAttr('href');    
      });
      /*---Menu In remove # link End---*/
      /*----Home Page Banner button Scroll Start---*/
      jQuery(".home-banner .btn").click(function (){
          var data_scroll = jQuery(this).attr('href'); 
          //console.log(data_scroll);
          jQuery('html, body').animate({
              scrollTop: $(data_scroll).offset().top - 150
          }, 1000);
      });
      /*----Home Page Banner button Scroll End---*/
  });
  
  /*$(window).on("load", function () {
      var urlHash = window.location.href.split("#")[1];
      $('html,body').animate({
          scrollTop: $('.' + urlHash).offset().top
      }, 4000);
  });*/
  jQuery(window).load(function(){
      
      jQuery(document).on('click', '.ecommerce-guide .feature-block.common-section.keep .style5 .block a', function(e) {
          var scroll_pos_id = jQuery(this).attr('href');         
          const url_data = scroll_pos_id;
          const id_data = url_data.split('#').pop();
          //var scroll_pos = jQuery('.eg-page-padding div#'+id_data);
      jQuery('html,body').animate({
          scrollTop: jQuery('#' + id_data).offset().top - 100
      }, 1000);
         
         
                 
      });
      
         if( jQuery('.planAndPricingSection').length <= 0 && jQuery(".wpr-Header").length == 0) {
      jQuery(document).on('click', 'a[href^="#"]', function(e) {
          var header_height =jQuery('header.sticky').outerHeight();
          var portfolioTabPart_height =jQuery('.portfolioTabPart').outerHeight();
          var total_top_height = header_height + portfolioTabPart_height;
          var header_heigyht =jQuery('#masthead').outerHeight();
              var id = jQuery(this).attr('href');
                var $id = jQuery(id);
                if ($id.length === 0) {
                    return;
                }
                e.preventDefault();
                var pos = $id.offset().top;
                if(jQuery('body').hasClass('page-template-portfolio-page'))
                {
                  if(jQuery('header').hasClass('sticky')){                     
                      jQuery('body, html').animate({scrollTop: pos - total_top_height},1000);
                      console.log(1); 
                  }else{
                      jQuery('body, html').animate({scrollTop: pos - 300},1000); 
                      console.log(2); 
                  }
                }else{
                jQuery('body, html').animate({scrollTop: pos - header_heigyht},1000); 
                    console.log(4); 
                }
        });
    }
      
  });
  
  jQuery(document).ready(function(){
      if(jQuery(".wpr-Header").length == 0){
          jQuery(document).on('click', 'a[href^="#"]', function(e) {
              var header_height =jQuery('header.sticky').outerHeight();
              var portfolioTabPart_height =jQuery('.portfolioTabPart').outerHeight();
              var total_top_height = header_height + portfolioTabPart_height;
              var header_heigyht =jQuery('#masthead').outerHeight();
              /*console.log(header_heigyht);*/
                  var id = jQuery(this).attr('href');
                  var $id = jQuery(id);
                  if ($id.length === 0) {
                      return;
                  }
                  e.preventDefault();
                  var pos = $id.offset().top;
                  if(jQuery('body').hasClass('page-template-portfolio-page'))
                  {
                      if(jQuery('header').hasClass('sticky')){   
                          if(jQuery(window).width() > 1024){
                              jQuery('body, html').animate({scrollTop: pos - total_top_height},1000);
                              console.log(1); 
                              
                          }else  if(jQuery(window).width() < 1024 && jQuery(window).width() > 767 ) {
                              jQuery('body, html').animate({scrollTop: pos - 100},1000);
                              console.log(11);                         
                          }else{
                              jQuery('body, html').animate({scrollTop: pos - 70},1000);
                              console.log(12); 
                              
                          }
                          console.log(1); 
                          console.log(total_top_height); 
                      }else{
                          jQuery('body, html').animate({scrollTop: pos - 300},1000); 
                          console.log(2); 
                      }
                  }else{
                      if(id == '#white-label-scroll'){
                          if(jQuery(window).width() > 768){
                              jQuery('body, html').animate({scrollTop: pos - header_heigyht},1000);
                          }else{
                              console.log(4);                         
                              const url_data_ =  id;
                              const id_data_ = url_data_.split('#').pop();
                              console.log(id_data_);                        
                              jQuery('html,body').animate({
                              scrollTop: jQuery('#' + id_data_).offset().top - 100
                              }, 1000);
                          } 
                          
                      }else{
                          if(jQuery(window).width() > 1024){
                              jQuery('body, html').animate({scrollTop: pos - header_heigyht},1000);
                          }else{
                              jQuery('body, html').animate({scrollTop: pos - 170},1000);
                              console.log(5); 
                          }  
                      }
                  }
          });
      }
  });
  
  
  /*---popup setting Start---*/
  jQuery(document).ready( function () { 
      
      var delay = 20000; // milliseconds
      var cookie_expire = 1; // days
      var cookie = localStorage.getItem("general-cookies"); 
      var cookie_for_podcast = localStorage.getItem("podcast-cookies");    
      
      if(cookie == undefined || cookie == null ) {
          cookie = 0;
      }
  
     /* if(((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
          jQuery(".general-pop").delay(delay).fadeIn();                    
      } 
      jQuery(".general-pop .popup-close,.general-pop .popup-close-link").click(function(e){  
          var current_date_time = new Date().getTime();        
          localStorage.setItem("general-cookies",current_date_time);        
          jQuery('.general-pop').fadeOut();        
      });*/
      if(((new Date()).getTime() - cookie_for_podcast) / (1000 * 60 * 60 * 24) > cookie_expire) {
          jQuery(".podcast-pop").delay(delay).fadeIn();                    
      } 
      jQuery(".podcast-pop .popup-close,.podcast-pop .popup-close-link").click(function(e){  
          var current_pod_date_time = new Date().getTime();        
          localStorage.setItem("podcast-cookies",current_pod_date_time);
          jQuery('.podcast-pop').fadeOut();        
      });
      
  /*
  jQuery(document).bind('gform_post_render', function(event, form_id){ 
      if(form_id == 9) {
          addpodcastcookies();
     } else if(form_id == 8) {
         addgeneralcookies();
     }
      
  });
  function addgeneralcookies(){
      var current_date_time = new Date().getTime();        
      localStorage.setItem("general-cookies",current_date_time);        
      jQuery('.general-pop').fadeOut();
  }
  function addpodcastcookies(){
      var current_pod_date_time = new Date().getTime();        
      localStorage.setItem("podcast-cookies",current_pod_date_time);
      jQuery('.podcast-pop').fadeOut();
  
  }*/
      //Payment form dropdown
      
      
      
      
      
      setTimeout(function() {
          jQuery('.wpfs-selectmenu-button').hide(); 
      
      }, 500);
      jQuery('.wpfs-billing-address-country-select').show(); 
      jQuery('.wpfs-billing-address-state-select').show();  
  
  }); 
  /*---popup setting End---*/
  
  /*Remove form Top Scroll Start---*/
  function enableScroll() {
      setTimeout(function(){
          /*console.log(2)*/
          window.onscroll = function() {};
          jQuery('.Phone-number input').attr('type','number'); 
    },1500);
  }
  function disableScroll() {        
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,          
          window.onscroll = function() {
              window.scrollTo(scrollLeft, scrollTop);
          };
  }   
  jQuery('.gform_footer .gform_button').click(function() { 
      disableScroll();  
      enableScroll();
  } );
  /*Remove form Top Scroll End---*/
  
  /*gfrom in use number */
  jQuery(document).ready(function(){  
      jQuery('.Phone-number input').attr('type','number'); 
      if( /Android/i.test(navigator.userAgent) ) {
          jQuery('body').addClass('device_android');
      }
      
     /* jQuery('.Phone-number input[type="number"]').keyup(function(){
        this.value = this.value.replace(/[^0-9\.]/g,'');
      }); */
  });
  /*gfrom in use number */
  
  jQuery(document).ready( function () { 
  jQuery('.schedule-btn').on('click',function(){
          var plan = jQuery(this).data('plan');
          var plan_name = jQuery(this).data('plan-name');
          jQuery('#plan').val(plan);
          jQuery('#plan_name').val(plan_name);
      })
      
      jQuery('.cancel-plan').on('click',function(){
          var warning = 'Are you sure you want to do this?';
          var plan = jQuery(this).data('plan');
          var data = {
                  'action': 'user_cancel_subscription_plan',
                  'plan': plan
  
          }; 
          if (confirm(warning)) {
                  jQuery.ajax({
                      url: frontend_ajax_object.ajaxurl,
                      type: "POST",
                      data: data,
                      success: function (response) {
                          if( response != '' ){
                              jQuery('.error').html('<h1 class="error">'+response+'</h1>');
                              jQuery('.fancybox-close-small').trigger('click');
                              window.location.href=window.location.href;
  
                          }
                      }	
                  });
  
          }
          else {
              return false;
          }
      });
      
      jQuery('#country').on('change',function(){
          var countryID = jQuery(this).val();
          set_country_by_state(countryID);
      });
      
      if( jQuery('#country').length > 0 ){
          var countryID = jQuery('.country').find('option:selected').attr('value');
          set_country_by_state(countryID);
      }
      var checkcall = 0;
      jQuery(document).on('click','.coupon_btn',function(){
      //jQuery('.coupon_btn').on('click',function(){
          if(checkcall != 0 ){
              return;
          }
          
          jQuery('.coupon_message').html('');
          jQuery('.coupon_message_success').html('');
          var coupon_code = jQuery('.coupon_code').val();
          var length = jQuery.trim(jQuery('.coupon_code').val()).length;
          var plans = jQuery('.selected-plan').val();
          var qty = [];
           jQuery('input[name="monthly_plans[]"]:checked').each(function(i) {
                       qty.push(jQuery(this).parent().parent().find('.count').val());
                      
           });
          if( !jQuery(this).hasClass('remove-coupon') ){
              if( plans != '' ){
              var data = {
                      'action': 'check_coupon_code',
                      'plans' : plans,
                      'coupon_code': coupon_code,
                      'qty':qty
              };
              if((coupon_code) && length != 0)  {
                  checkcall = 1;
                  jQuery.ajax({
                      type:'POST',
                      url:frontend_ajax_object.ajaxurl,
                      data:data,
                      dataType:'json',
                      beforeSend: function() {
                          jQuery('body').addClass('page-loader');
                      },              
                      success:function(response){
                           checkcall = 0;
                          if(!response.api_error.includes("You saved") ){
                              jQuery('.coupon_code').val('');
                               jQuery('.coupon_message').html(response.api_error);
                               jQuery('.old-amount').hide();
                               jQuery('.per-month-msg').hide();
  
                          }else{
                              var coupon_amount = response.code_amount;
                              var subtotal = jQuery('.subtotal').html();
                              var total = parseInt(subtotal) - parseInt(coupon_amount);
                              jQuery('.coupon_code').attr('data-amount',coupon_amount);
                              jQuery('.subtotal').html(total);
                              jQuery('.coupon_btn').attr('value','REMOVE');
                              jQuery('.coupon_btn').addClass('remove-coupon');
                              jQuery('input[name=coupon_code]').removeClass('coupon_btn');
                              jQuery('.apply-coupon-code').val(coupon_code);
                              //jQuery('.coupon_message_success').html('<span>'+response.api_error+'</span>');
  
                              jQuery('.old-amount .subtotal-old').html(subtotal);
                              jQuery('.old-amount').show();
                              jQuery('.per-month-msg').show();
                          }
                          jQuery('body').removeClass('page-loader');
                         
                      }
                  }); 
              }else{
                  jQuery('.coupon_message').html('Please enter coupon code.');
                  jQuery('.per-month-msg').hide();
                   jQuery('.old-amount').hide();
              }
              }else{
                  jQuery('.coupon_message').html('Please select at least one plan.');
                   jQuery('.per-month-msg').hide();
                   jQuery('.old-amount').hide();
              }
          }
          return false;
      });
      
      //remove coupon code
      jQuery(document).on('click','.remove-coupon',function(){
          var subtotal = jQuery('.subtotal').html();
          var coupon_amount = jQuery('.coupon_code').attr('data-amount');
          var total = parseInt(subtotal) + parseInt(coupon_amount);
          jQuery('.subtotal').html(total);
          jQuery(this).attr('value','APPLY');
          jQuery(this).attr('data-amount','');
          jQuery('.coupon_code').attr('data-amount','');
          jQuery(this).addClass('coupon_btn');
          jQuery(this).removeClass('remove-coupon');
          jQuery('.coupon_message').html('');
          jQuery('.coupon_code').val('');
          jQuery('.coupon_message_success').html('');
          jQuery('.apply-coupon-code').val('');
          jQuery('.old-amount').hide();
          jQuery('.per-month-msg').hide();
  
      });
      
      jQuery(".confirm_password").keyup(checkPasswordMatch);
  
  
       // company duplicate validation 
       jQuery('.company1').on('keyup',function(){
          jQuery('.register-btn').removeClass("disabled");
          jQuery('.company_error').hide();
          var company = jQuery(this).val();
          var data = {
                  'action': 'check_duplicate_company',
                  'company': company
          };
          if (company) {
                  jQuery.ajax({
                      url: frontend_ajax_object.ajaxurl,
                      type: "POST",
                      data: data,
                      success: function (response) {
                          if( response ==false ){
                              jQuery('.company_error').html("User already exists with the same company name. Please enter a unique company name.");
                              jQuery('.company_error').show();
                              jQuery('.register-btn').addClass("disabled");
                          }else{
                               jQuery('.company_error').html('');                             
                              jQuery('.company_error').hide();
                              jQuery('.register-btn').removeClass("disabled");
                          }
                      }   
                  });
  
          }
          else {
              return false;
          }
      });
      
      // Email duplicate validation 
       jQuery('.email1').on('keyup',function(){
          jQuery('.register-btn').removeClass("disabled");
          jQuery('.email_error').hide();
          var email = jQuery(this).val();
          var data = {
                  'action': 'check_duplicate_email',
                  'email': email
          };
          if (email) {
                  jQuery.ajax({
                      url: frontend_ajax_object.ajaxurl,
                      type: "POST",
                      data: data,
                      success: function (response) {
                          if( response ==false ){
                              jQuery('.email_error').html("That E-mail is already registered");
                              jQuery('.email_error').show();
                              jQuery('.register-btn').addClass("disabled");
                          }else{
                               jQuery('.email_error').html('');                             
                              jQuery('.email_error').hide();
                              jQuery('.register-btn').removeClass("disabled");
                          }
                      }   
                  });
  
          }
          else {
              return false;
          }
      });
      
      //form validation
      jQuery('.register-btn').on('click',function(){
          jQuery("#user-form").submit();
          jQuery("#user-form").validate();
          var plan = jQuery('input[name="monthly_plans[]"]:checked').val();
          jQuery('.selected-plan').val(plan);
      });
  
      jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
      }, "Letters only please"); 
      
      // jQuery.validator.addMethod("strongePassword", function(value) {
      //     return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) && /[a-z]/.test(value) && /\d/.test(value) && /[A-Z]/.test(value);
      // },"The password must contain at least 1 number, at least 1 lower case letter, and at least 1 upper case letter"); 
  
  
      jQuery.validator.addMethod("strongePassword", function (value, element) {
          let password = value;
          if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])(.{6,20}$)/.test(password))) {
              return false;
          }
          return true;
      }, function (value, element) {
          let password = jQuery(element).val();
          if (!(/^(.{6,20}$)/.test(password))) {
              return 'Password must be between 6 to 20 characters long.';
          }
          else if (!(/^(?=.*[A-Z])/.test(password))) {
              return 'Password must contain at least one uppercase.';
          }
          else if (!(/^(?=.*[a-z])/.test(password))) {
              return 'Password must contain at least one lowercase.';
          }
          else if (!(/^(?=.*[0-9])/.test(password))) {
              return 'Password must contain at least one digit.';
          }
          else if (!(/^(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/.test(password))) {
              return "Password must contain special characters.";
          }
          return false;
      });
  
      jQuery("#user-form").validate({     
              rules: {
                  "country":{
                      required: true
                  },
                  "email": {
                      required: true,
                      email: true,
                      remote: {                        
                          url: frontend_ajax_object.ajaxurl,
                          type: "post",
                          data: {
                            email: function() {
                              return jQuery( "input[name=email]" ).val();
                            },
                            'action': 'check_duplicate_email'
                          }
                        }
                  },
                  "company":{
                      required: true,
                      remote: {                        
                          url: frontend_ajax_object.ajaxurl,
                          type: "post",
                          data: {
                            email: function() {
                              return jQuery( "input[name=company]" ).val();
                            },
                            'action': 'check_duplicate_company'
                          }
                        }
                  },
                  "password":{
                      required: true,
                      strongePassword: true,
                      minlength: 6
                  },
                  "confirm_password":{
                      required: true,
                      equalTo: "#password"
                  },
                  "fname":{
                      required: true
                  },
                  "lname":{
                      required: true
                  },
                  "phone":{
                      required: true,
                      maxlength: 12,
                      minlength: 10,
                  },
                  "address":{
                      required: true
                  },
                  "state":{
                      required: true
                  },
                  "city":{
                      required: true
                  },
                  "zipcode":{
                      required: true
                  },
              },
              messages: {
                  "email": {
                      required: "Please enter an email",
                      email: "Email is invalid",
                      remote: "That E-mail is already registered"
                  },
                   "company":{
                      required: "Please enter company name",
                      remote: "User already exists with the same company name. Please enter a unique company name."
                  },
                  "password":{
                      required: "Please enter password",
                      minlength: "Password must contain at least six character ",
                  },
                  "confirm_password":{
                      required: "Please enter confirm password",
                      equalTo: "Please enter the same password"
                  },
                  "fname":{
                      required: "Please enter first name",
                  },
                  "lname":{
                      required: "Please enter last name",
                  },
                  "phone":{
                      required: "Please enter phone number",
                      maxlength: "Please enter valid phone number",
                      minlength: "Phone Number must contain at least 10 digits"
                  },
                  "address":{
                      required: "Please enter address",
                  },
                  "country":{
                      required: "Please select country name",
                  },
                  "state":{
                      required: "Please select state name",
                  },
                  "city":{
                      required: "Please enter city name",
                  },
                  "zipcode":{
                      required: "Please enter zipcode",
                  }
              },
              submitHandler: function (form) { // for demo
                  var email = jQuery('.email').val();
                  var company = jQuery('.company').val();
                  var password = jQuery('.password').val();
                  var fname = jQuery('.fname').val();
                  var lname = jQuery('.lname').val();
                  var phone = jQuery('.phone').val();
                  var address = jQuery('.address').val();
                  var country = jQuery('.country').find('option:selected').attr('data-name');
                  var state = jQuery('.state').val();
                  var city = jQuery('.city').val();
                  var zipcode = jQuery('.zipcode').val();
                  let date = new Date();
                  date.setTime(date.getTime() + (1000 * 24 * 60 * 60 * 1000));
                  const expires = "expires=" + date.toUTCString();
                  var cValue = JSON.stringify({email: email, company:company,password:password,fname:fname,lname:lname,phone:phone,address:address,country:country,state:state,city:city,zipcode:zipcode});
                  var userinfo = 'userinfo';
                  document.cookie = userinfo + "=" + cValue + "; " + expires + "; path=/";
                 
                  //jQuery('.progress-bar li').removeClass('active');
                  jQuery('.progress-bar li:eq(1)').addClass('active');
                  jQuery('.step1').hide();
                                  jQuery('.step2').show();
                  // Validate recaptcha
                  grecaptcha.ready(function() {
                    grecaptcha.execute('6LcoYcEdAAAAACzbJd4nRDD9kGy8LJTF69NwQYnq', {action: 'submit'}).then(function(token) {
                        // Add your logic to submit to your backend server here.
                         jQuery.ajax({
                          type:'POST',
                          url:frontend_ajax_object.ajaxurl,
                          data:{'token':token,'action':'validate_recaptcha'},
                          success:function(data){
                              if(data == 'true'){
                                   jQuery('.step1').hide();
                                  jQuery('.step2').show();
                              }else{
                                   jQuery('.step1').show();
                                  jQuery('.step2').hide();
                                  alert("Something went wrong. Please try after some time");
                              }
                          }
                      }); 
                    });
                  });
              }
             
          });
      
      //Form wizard
      jQuery('.step2').hide();
      jQuery('.step3').hide();
  
  
      //Subscription checkbox
      jQuery('.subscription-plan').on('click',function(){
         if(jQuery(".tab-data-plan.active").attr('id') == 'tab_1'){ 
              jQuery(".tab-data-plan").not('.active').find('.col').removeClass("active");
          }else{
              jQuery(".tab-data-plan").find('.col').removeClass("active");
          }
         jQuery(this).parents('.col').toggleClass('active'); 
      });
      
      jQuery('.subscription-plan').on('change',function(){
         
  
          var change_sub_total = 0;
          //jQuery(".tab-data-plan").not('.active').find('.subscription-plan').prop('checked', false);
          var old_amount = jQuery('.subtotal').text();
          //Change the plan lable
            if(jQuery(".tab-data-plan.active").attr('id') == "tab_1"){
          jQuery(".plan-time").html('/mo');
      }else if(jQuery(".tab-data-plan.active").attr('id') == "tab_2"){
          jQuery(".plan-time").html('/qtr');
      }else if(jQuery(".tab-data-plan.active").attr('id') == "tab_3"){
          jQuery(".plan-time").html('/yr');
      }
           if(old_amount){
              
              if(jQuery(".tab-data-plan.active").attr('id') == 'tab_1'){
                  jQuery(".tab-data-plan").not('.active').find('.subscription-plan').each(function(){
                          if(!jQuery(this).hasClass('allow-multiple-selection')){
                              if(jQuery(this).is(':checked')){
                                   if(jQuery(this).parent().parent().find('.count').length > 0){
                                      var qty = jQuery(this).parent().parent().find('.count').val();
                                  }else{
                                       var qty = 1;
                                  }
  
                                  change_sub_total = change_sub_total + (parseInt(jQuery(this).data('amount')) * parseInt(qty));
  
                              }
                          }
                          
                  });
                  jQuery(".tab-data-plan").not('.active').find('.subscription-plan').prop('checked', false);
               }else{
                    
                      jQuery(".tab-data-plan").find('.subscription-plan').not(this).each(function(){
                          if(jQuery(this).is(':checked')){
                               if(jQuery(this).parent().parent().find('.count').length > 0){
                                  var qty = jQuery(this).parent().parent().find('.count').val();
                              }else{
                                   var qty = 1;
                              }
                            
                              change_sub_total = change_sub_total + (parseInt(jQuery(this).data('amount')) * parseInt(qty));
                          }
                  });
                  jQuery(".tab-data-plan").find('.subscription-plan').not(this).prop('checked', false);
               }  
               
               
               console.log(old_amount + " - " + change_sub_total);
              jQuery('.subtotal').html(parseInt(old_amount) - change_sub_total);
  
              
              
           }
          // Update qty of every plan
         // jQuery('.count').val(1);
          var plans = [];
          jQuery('.selected-plan').val(plans);
          jQuery('input[name="monthly_plans[]"]:checked').each(function(i) {
                  plans.push(jQuery(this).val());
                  jQuery('.selected-plan').val(plans);
          });
              
          //jQuery('.coupon_code').val('');
         jQuery('.remove-coupon').addClass('coupon_btn');
          jQuery('.remove-coupon').attr('value','APPLY');
         jQuery('.coupon_btn').removeClass('remove-coupon');
         jQuery('.coupon_message').html('');
         jQuery('.coupon_message_success').html('');
          if(jQuery(this).is(":checked")) {
              var amount = jQuery(this).data('amount');
              var old_amount = jQuery('.subtotal').html();
              var total = parseInt(old_amount) + parseInt(amount);
              jQuery('.subtotal').html(total);
              var withcoupon = jQuery('.subtotal').html();
              var coupon_amount = jQuery('.coupon_code').attr('data-amount');
              if( coupon_amount && coupon_amount != null ){
                  var old_total = parseInt(withcoupon) + parseInt(coupon_amount);
                  jQuery('.subtotal').html(old_total);
                  jQuery('.coupon_code').attr('data-amount','');
              }
          }else{
              var amount = jQuery(this).data('amount');
              var subtotal = jQuery('.subtotal').html();
              if(jQuery(this).parent().parent().find('.count').length > 0){
                  var plan_count = jQuery(this).parent().parent().find('.count').val();
              }else{
                   var plan_count = 1;
              }
               var coupon_amount = jQuery('.coupon_code').attr('data-amount');
               console.log("Coupon Value:"+coupon_amount);
                 if( coupon_amount && coupon_amount != null ){
                  var subtotal = parseInt(subtotal) + parseInt(coupon_amount);
                  jQuery('.subtotal').html(subtotal);
                  jQuery('.coupon_code').attr('data-amount','');
              }
              
              var total = ( parseInt(amount) * parseInt(plan_count) ) - parseInt(subtotal);
              total = total.toString().replace('-','');
              jQuery('.subtotal').html(total);
              //jQuery(this).parent().parent().find('.count').val(1);
              jQuery(this).parents('.col').removeClass("active");
  
              jQuery(this).parents('.col').find('.count').val(1);
          }
  
          if(jQuery(".tab-data-plan.active").attr('id') == 'tab_1'){
              jQuery('.tab-data-plan').not('.monthly_plans_mn').find('.count').val(1);
           }else{
              jQuery('.count').val(1);
           }   
          var subtotal = jQuery('.subtotal').html();
          var coupon_code = jQuery('.coupon_code').val();
          if(coupon_code && subtotal ){
              
              jQuery('.coupon_btn').click();
          }
  
          
          let date = new Date();
          date.setTime(date.getTime() + (1000 * 24 * 60 * 60 * 1000));
          const expires = "expires=" + date.toUTCString();
          var cValue = JSON.stringify({plans: plans,subtotal:total});
          var selected_plans = 'selected_plans';
          document.cookie = selected_plans + "=" + cValue + "; " + expires + "; path=/"; 
  
      });
    
      //subscription form
      jQuery(document).on('click','.subscription-btn',function(){
          jQuery("#subscription-form").validate();
          jQuery("#subscription-form").submit();
      });
      
      jQuery("#subscription-form").validate({
          rules: {
              "monthly_plans[]": {
                  required: true
              }
          },
          messages: {
              "monthly_plans[]": {
                  required: "Please select at least one plan"
              },
          },
          errorPlacement: function(error, element) {
              if ( element.attr("name") == "monthly_plans[]" ) {
                  error.insertAfter(".inner-content");
              }
          },
          submitHandler: function (form) {
              var plans = [];
              var quantity = [];
              jQuery('input[name="monthly_plans[]"]:checked').each(function(i) {
                      var count = jQuery(this).parent().parent().find('.count').val();
                      plans.push(jQuery(this).val());
                      quantity.push(count);
  
              });
              var subtotal = jQuery('.subtotal').html();
              jQuery('.final-amount').html(subtotal);
              jQuery('.selected-plan').val(plans);
              jQuery('.quantity').val(quantity);
              jQuery('.step1').hide();
              jQuery('.step2').hide();
              jQuery('.step3').show();
            //  jQuery('.progress-bar li').removeClass('active');
              jQuery('.progress-bar li:eq(2)').addClass('active');
          }
      });
      
      //Quantity field
      jQuery('.add').click(function () {
          if(jQuery(this).parent().parent().find('.subscription-plan').is(":checked")) {
              var th = jQuery(this).closest('.wrap').find('.count');   
              if (th.val() >= 1) { 	
                  th.val(+th.val() + 1);
                  var amount = jQuery(this).data('amount');
                  var old_amount = jQuery('.subtotal').html();
                  var total = parseInt(old_amount) + parseInt(amount);
                  jQuery('.subtotal').html(total);
              }else if(th.val() == 0){
                  var cv = 1;
                  th.val(cv);
                  var amount = jQuery(this).data('amount');
                  var total = parseInt(amount) * parseInt(cv);
                  jQuery('.subtotal').html(total);                
              }
          }
         apply_coupon_qty_change();
      });
      jQuery('.sub').click(function () {
          if(jQuery(this).parent().parent().find('.subscription-plan').is(":checked")) {
              var th = jQuery(this).closest('.wrap').find('.count');    	
              if (th.val() > 1) {
                  th.val(+th.val() - 1);
                  var amount = jQuery(this).data('amount');
                  var old_amount = jQuery('.subtotal').html();
                  var total = parseInt(old_amount) - parseInt(amount);
                  jQuery('.subtotal').html(total);
              }
          }
         apply_coupon_qty_change();
      });
      jQuery(".count").change(function(){
          if(jQuery(this).parent().parent().find('.subscription-plan').is(":checked")) {
                  var th = jQuery(this).closest('.wrap').find('.count');      
                  if (th.val() >= 1) {
                      var cv = th.val();
                      th.val(cv);
                      var amount = jQuery(this).data('amount');
                      var total = parseInt(amount) * parseInt(cv);
                      jQuery('.subtotal').html(total);
                  }
                  // else if(th.val() == 0){
                  //     var cv = 1;
                  //     th.val(cv);
                  //     var amount = jQuery(this).data('amount');
                  //     var total = parseInt(amount) * parseInt(cv);
                  //     jQuery('.subtotal').html(total);
                  // } 
           }
      });
      
      //previous btn
      jQuery('.previous-step1').on('click',function(){
          console.log("fdsgdfg");
          jQuery('.step1').show();
          jQuery('.step2').hide();
          jQuery('.step3').hide();
          jQuery('.progress-bar li').removeClass('active');
          jQuery('.progress-bar li:eq(0)').addClass('active');
      });
      jQuery('.previous-step2').on('click',function(){
          jQuery('.step1').hide();
          jQuery('.step2').show();
          jQuery('.step3').hide();
         // jQuery('.progress-bar li').removeClass('active');
          jQuery('.progress-bar li:eq(2)').removeClass('active');
          jQuery('.progress-bar li:eq(1)').addClass('active');
      });
      
      jQuery('.final-subscription-btn').on('click',function(){
  //       jQuery('#custom-payment-form').submit();
         jQuery('#custom-payment-form').validate();
      });
  
      jQuery('input[term_and_condition]').on('change',function(){        
                 jQuery('#custom-payment-form').validate();
              });
  
  
      
      jQuery("#custom-payment-form").validate({
          rules: {
              "term_and_condition": {
                  required: true
              }
          },
      });
  
  
      jQuery(".final-subscription-btn").on("click", function(e){
          if(!jQuery('.term-and').is(':checked')){
              jQuery('.custom-error').remove();
              jQuery('.term-and-error').append('<div class="error custom-error">This field is required.</div>');
              return false;
          }else{
              jQuery('.custom-error').remove();
          }
  
      });
  
      jQuery('input[name="term_and_condition"]').change(function(){
              if(jQuery(this).prop("checked") == true){
                  jQuery('.custom-error').remove();
              }
              else if(jQuery(this).prop("checked") == false){
                 jQuery('.term-and-error').append('<div class="error custom-error">This field is required.</div>');
                 return false;
              }
      });
          
  var hidden_sub_total = jQuery(".hidden_sub_total").val();
  if(hidden_sub_total != null && hidden_sub_total != ''){
     jQuery('.subtotal').html(hidden_sub_total);
  }else{
    var subtotal = jQuery('.subscription-plan:checked').data('amount');
     jQuery('.subtotal').html(subtotal);  
  }   
  
  var amount = 0;
  jQuery("#tab_1 .col,#tab_2 .col,#tab_3 .col").removeClass("active");
  jQuery('input[name="monthly_plans[]"]:checked').each(function(i) {
              jQuery(this).parents('.col').toggleClass("active");
              var tid=jQuery(this).parents('.tab-data-plan').attr("id");
              jQuery('.tabs-list-plan li').each(function() {
                  if(jQuery( this ).data("id")==tid)
                  {
                      jQuery( this ).click();
                  }				
              });	 
              amount = parseInt(amount) + (parseInt(jQuery(this).attr('data-amount'))*parseInt(jQuery(this).parent().parent().find('.count').val()));
  });
  jQuery('.subtotal').html(amount);
      
      //Change user password
      jQuery("#change-password").validate({
          "password":{
                      required: true
          },
          "confirm":{
              required: true,
              equalTo: "#password"
          },
      });
      
      
  });
  
  
  
  (function($) {
      $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
          if (inputFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
          } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
          } else {
            this.value = "";
          }
        });
      };
    }(jQuery));
    
  
    jQuery("input[name=phone]").inputFilter(function(value) {
      return /^[0-9-]*$/.test(value);        
      
      });
  
  function set_country_by_state(countryID=''){
      var data = {
              'action': 'get_country_by_state',
              'country_id': countryID
  
      };
      if(countryID){
          jQuery.ajax({
              type:'POST',
              url:frontend_ajax_object.ajaxurl,
              data:data,
              success:function(html){
                  jQuery('#state').html(html); 
              }
          }); 
      }else{
          jQuery('#state').html('<option value="">Select country first</option>');
      }
  }
  
  function checkPasswordMatch() {
          var password = jQuery(".password").val();
          var confirmPassword = jQuery(".confirm_password").val();
          if (password != confirmPassword){
              jQuery("#check_password_match").html("Passwords does not match!");
              jQuery('#check_password_match').css('color','red');
              jQuery('#check_password_match').show();
          } else {
              jQuery("#check_password_match").html("Passwords match.");
              jQuery('#check_password_match').css('color','green');
              jQuery('#check_password_match').hide();
          }
  }
  function apply_coupon_qty_change(){
      var subtotal = jQuery('.subtotal').html();
      var coupon_code = jQuery('.coupon_code').val();
      if(coupon_code && subtotal ){
          var coupon_amount = jQuery('.coupon_code').attr('data-amount');
           if( coupon_amount && coupon_amount != null ){
                  var subtotal = parseInt(subtotal) + parseInt(coupon_amount);
                  jQuery('.subtotal').html(subtotal);
                  jQuery('.coupon_code').attr('data-amount','');
           }
           jQuery('.remove-coupon').addClass('coupon_btn');
           jQuery('.remove-coupon').attr('value','APPLY');
           jQuery('.coupon_btn').removeClass('remove-coupon');
           jQuery('.coupon_message').html('');
           jQuery('.coupon_message_success').html('');
          jQuery('.coupon_btn').click();
      }
  }
  
  
