

function myMenu() {
    $(".menuButton").on('click', function(event) {
    document.getElementById('myDropdown').classList.toggle("show");
    console.log("myMenu is working");
    });
  }
  
  /*window.onclick = function(event) {
    if (!event.target.matches('#menuButton')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }*/
  myMenu();