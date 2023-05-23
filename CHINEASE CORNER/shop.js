$(document).ready(function () {
    $(".cotegory").click(function () {
      const Value = $(this).attr("data-filter");
      if (Value == "all") {
        $(".product-foods").show("1000");
      } else {
        $(".product-foods")
          .not("." + Value)
          .hide("1000");
        $(".product-foods")
          .filter("." + Value)
          .show("1000");
      }
    });
  
    $(".cotegory").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  });
  
  // let list = document.querySelectorAll('.cotegory');
  // let products = document.querySelectorAll('.product-foods');
  
  // for (let i = 0; i < list.length; i++) {
  //     list[i].addEventListener('click', function(){
  //         for(let j=0; j<list.length; j++){
  //             list[j].classList.remove('active');
  //         }
  //         this.classList.add('active');
  
  //         let datafilter = this.getAttribute('data-filter');
  
  //         for (let k = 0; k < products.length; k++) {
  //             products[k].classList.add('hide');
  
  //             if (products[k].getAttribute('')) {
  
  //             }
  
  //         }
  //     })
  
  // }