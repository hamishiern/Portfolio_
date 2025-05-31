document.addEventListener("DOMContentLoaded", function () {
 const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');

  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

});

window.onscroll = function () {
  document.getElementById('scrollTopBtn').style.display =
    document.documentElement.scrollTop > 300 ? 'block' : 'none';
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

 