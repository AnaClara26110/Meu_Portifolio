// Simple JS: active link highlight and mobile nav toggle (basic)
document.addEventListener('DOMContentLoaded', function(){
  // highlight current nav link
  const links = document.querySelectorAll('.nav-list a');
  links.forEach(a=>{
    if(a.href === location.href || location.pathname.endsWith(a.getAttribute('href'))){
      a.classList.add('active');
    }
  });

  // simple accessibility improvement: focus outlines for keyboard users
  document.body.addEventListener('keydown', e=>{
    if(e.key === 'Tab') document.body.classList.add('user-is-tabbing');
  });
});
