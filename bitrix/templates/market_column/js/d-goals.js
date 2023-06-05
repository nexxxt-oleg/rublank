$(document).ready(function(){
    $('.btn-callback-header').click(function(){
        yaCounter11338723.reachGoal('zakazat-zvonok-click');
        console.log('zakazat-zvonok-click');
        setTimeout(function(){
            $('form#iblockForm10 input[type="submit"]').click(function(){
              if( $('input[name="PROPERTY[48][0]"]').val()!=""){
                yaCounter11338723.reachGoal('zakazat-zvonok-otpravka');
                console.log('zakazat-zvonok-otpravka');
              }
              else console.log('zakazat-zvonok-otpravka no');
              
            });  
          }, 1000);
    })

    $('.footer-btn-call').click(function(){
        yaCounter11338723.reachGoal('napishite-click');
        console.log('napishite-click');
        setTimeout(function(){
            $('form#iblockForm31 input[type="submit"]').click(function(){
              if( $('input[name="PROPERTY[292][0]"]').val()!="" || $('input[name="PROPERTY[293][0]"]').val()!="" || $('input[name="PROPERTY[294][0]"]').val()!=""){
                yaCounter11338723.reachGoal('napishite-otpravka');
                console.log('napishite-otpravka');
              }
              else console.log('napishite-otpravka no');
              
            });  
          }, 1000);
    })

    if($('.row').is('#iblockForm35')){
        $('form#iblockForm35 input[type="submit"]').click(function(){
            if( $('input[name="PROPERTY[305][0]"]').val()!="" || $('input[name="PROPERTY[306][0]"]').val()!=""){
              yaCounter11338723.reachGoal('obratnaya-svyaz');
              console.log('obratnaya-svyaz');
            }
            else console.log('obratnaya-svyaz no');
            
          });  
    }

    $('form#iblockForm35 input[type="submit"]').click(function(){
        if( $('input[name="PROPERTY[305][0]"]').val()!="" || $('input[name="PROPERTY[306][0]"]').val()!=""){
          yaCounter11338723.reachGoal('obratnaya-svyaz');
          console.log('obratnaya-svyaz');
        }
        else console.log('obratnaya-svyaz no');
        
      });  

      $('.bxr-one-click-buy').click(function(){
        yaCounter11338723.reachGoal('one-click-click');
        console.log('one-click-click');
        setTimeout(function(){
            $('form#iblockForm9 input[type="submit"]').click(function(){
              if( $('input[name="PROPERTY[43][0]"').val()!="" || $('input[name="PROPERTY[44][0]"').val()!="" || $('input[name="PROPERTY[45][0]"').val()!=""|| $('input[name="captcha_word"').val()!=""){
                yaCounter11338723.reachGoal('one-click-otpravka');
                console.log('one-click-otpravka');
              }
              else console.log('one-click-otpravka no');
              
            });  
          }, 1000);
    })

    $('.bxr-basket-add').click(function(){
        yaCounter11338723.reachGoal('v-korzinu');
        console.log('v-korzinu');
    })
})