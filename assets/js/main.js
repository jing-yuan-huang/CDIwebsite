

function changeContent(selectedId) {
  var bodies = document.getElementsByClassName("body");
  var links = document.querySelectorAll('.link > div'); 
  for (var i = 0; i < bodies.length; i++) {
    if (bodies[i].id == selectedId) {
      bodies[i].classList.add("display-show");
      bodies[i].classList.remove("display-none");
    } else {
      bodies[i].classList.add("display-none");
      bodies[i].classList.remove("display-show");
    }
  }

  links.forEach(link => {
    link.classList.remove('active');
  });

  var activeLink = Array.from(links).find(link => link.querySelector('a').getAttribute('href') === `#${selectedId}`);
  
  if (activeLink) {
    activeLink.classList.add('active');
  }
}



function changeMembers (selectedId) {
  var rows = document.getElementsByClassName("member-row")

  for (var i = 0; i < rows.length; i++) {
    if (rows[i].id) {
      if (rows[i].id == selectedId) {
        rows[i].classList.add("display-show")
        rows[i].classList.remove("display-none")
      } else {
        rows[i].classList.add("display-none")
        rows[i].classList.remove("display-show")
      }
    }
  }

  var tabs = document.getElementById("member-tab").children

  console.log(tabs)

  for (var i = 0; i < tabs.length; i++) {
    if (tabs[i].id == selectedId) {
      tabs[i].classList.add("selected")
      tabs[i].children[0].classList.add("highlight")
    }else {
      tabs[i].classList.remove("selected")
      tabs[i].children[0].classList.remove("highlight")
    }
  }
}


const menuToggle = document.querySelector(".menu-toggle");
const closeMenu = document.querySelector(".close-menu");
const menuItem = document.querySelector(".menu-item"); 

if (menuToggle && closeMenu && menuItem){

  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    menuItem.classList.add("active");

  });

  closeMenu.addEventListener("click", function () {
    menuItem.classList.remove("active");
  });

  document.addEventListener("click", function (event) {
    if (!menuItem.contains(event.target) && !menuToggle.contains(event.target)) {
      menuItem.classList.remove("active");
    }
  });

}