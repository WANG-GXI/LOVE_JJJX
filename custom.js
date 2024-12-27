// custom.js
document.addEventListener('DOMContentLoaded', function () {
  var details = document.querySelectorAll('details');
  details.forEach(function (el) {
    if (!el.open) {
      el.style.display = 'none';
    }
  });
});