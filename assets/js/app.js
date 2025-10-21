
// Set footer year
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// Basic success toast for Formspree demo (optional)
const form = document.getElementById('leadForm');
if(form){
  form.addEventListener('submit', function(){
    // You can intercept fetch here if you want AJAX; for now, we'll let the browser post it.
  });
}
