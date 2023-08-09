 document.addEventListener("DOMContentLoaded", function(){
  let header_block = document.querySelector('.block.header');


  if (header_block) {

    
    let hamburger = header_block.querySelector('.hamburger');
    hamburger.addEventListener("click", function () {
        header_block.classList.toggle('active');

    });

    console.log(hamburger);

  }
});

    document.addEventListener('DOMContentLoaded')
     aside.addEventListener("click")