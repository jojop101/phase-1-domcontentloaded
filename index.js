// document.addEventListener('DOMContentLoaded', function () {
//     updateDom()
    
// });

// function updateDom(){
//     document.querySelector('text')
//     .textContent = 'This is really cool!'
//}

document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
  } );
 
 
  function updateDOM() {
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }