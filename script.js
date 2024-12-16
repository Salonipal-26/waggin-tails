function redirectToPage(page, section) {
  window.location.href = `${page}${section}`; // Redirect to the specified page and section
}

document.getElementById("saveAniesLi").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  navigateto('SaveAnies.html');
});

function navigateto(url) {
  window.location.href = url;
}


// Header scroll effect
// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) { // Change to solid black after scrolling 50px
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});




