'use strict';
const nav=document.getElementById('nav');
const header=document.getElementById('header');
const info=document.getElementById('info');
const articles=document.getElementById('articles');
const footer=document.getElementById('footer');
const menu=document.getElementById('menu');
const closed=document.getElementById('closed');
const headerBtn=document.getElementById('headerBtn');


menu.addEventListener('click',function(e){
    menu.classList.add('hide')
    closed.classList.remove('hide')
    navLinks.classList.remove('hide')
   document.body.classList.add('blurred')
  
})
closed.addEventListener('click',function(e){
    closed.classList.add('hide');
    menu.classList.remove('hide');
    navLinks.classList.add('hide');
      document.body.classList.remove('blurred');
});
headerBtn.addEventListener('click',function(e){
    const footerCoords=footer.getBoundingClientRect();
    window.scrollTo({
        left:footerCoords.left+window.scrollX,
        top:footerCoords.top+window.scrollY,
        behavior:"smooth"
    })
    
});
const stickyNav=function(entries,observer){
const [entry]=entries;
if(!entry.isIntersecting){
    nav.classList.add('sticky')
}
else nav.classList.remove('sticky')

 }

const headerObserver=new IntersectionObserver(stickyNav,{
    root:null,
    threshold:0,
    rootMargin:'-70px'
})

headerObserver.observe(header);

info.classList.add('moveDown')
const revealInfo=function(entries,observer){
const [entry]=entries
if(!entry.isIntersecting)return
entry.target.classList.remove('moveDown')
infoObserver.unobserve(entry.target)
}
const infoObserver=new IntersectionObserver(revealInfo,{
    root:null,
    threshold:0.4
})
infoObserver.observe(info)