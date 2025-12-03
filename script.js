function nav(id) {
   
    document.querySelectorAll('.page').forEach(p => p.classList.remove('visible'));
    
   
    const target = document.getElementById(id);
    if(target) target.classList.add('visible');
    
    /
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
   
    if (typeof event !== 'undefined' && event.target) {
        event.target.classList.add('active');
    }

   
    document.querySelector('main').scrollTop = 0;
}


document.addEventListener('DOMContentLoaded', () => {
    nav('web-xss');

});
