/* 站点交互：主题、侧边栏、搜索 */
(function(){
  var root=document.documentElement;
  var t=localStorage.getItem('nn-theme'); if(t) root.setAttribute('data-theme',t);
  function toggleTheme(){var n=root.getAttribute('data-theme')==='dark'?'light':'dark';root.setAttribute('data-theme',n);localStorage.setItem('nn-theme',n);}
  window.nnToggleTheme=toggleTheme;
  document.addEventListener('DOMContentLoaded',function(){
    var b=document.getElementById('themeBtn'); if(b) b.onclick=toggleTheme;
    var m=document.getElementById('menu'); var sb=document.getElementById('sidebar');
    if(m&&sb) m.onclick=function(){sb.classList.toggle('open');};
    var cur=document.body.getAttribute('data-cur');
    if(cur){var el=document.querySelector('#sidebar a[href="'+cur+'"]'); if(el){el.classList.add('on'); var d=el.closest('details'); if(d)d.open=true; el.scrollIntoView({block:'center'});}}
  });
})();
