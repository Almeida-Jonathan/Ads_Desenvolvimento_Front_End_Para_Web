"use strict";
document.documentElement.classList.add('js');
const nav=document.getElementById('navegacao'),toggle=document.querySelector('.botao-menu'),bp=matchMedia('(min-width:768px)');
function sync(){nav.hidden=!bp.matches;toggle.setAttribute('aria-expanded',String(!nav.hidden));toggle.setAttribute('aria-label',nav.hidden?'Abrir menu':'Fechar menu')}
sync();bp.addEventListener('change',sync);
toggle.addEventListener('click',()=>{nav.hidden=!nav.hidden;toggle.setAttribute('aria-expanded',String(!nav.hidden));toggle.setAttribute('aria-label',nav.hidden?'Abrir menu':'Fechar menu')});
const subButton=document.querySelector('.submenu-botao'),sub=document.getElementById('submenu-projetos');
subButton.addEventListener('click',()=>{sub.hidden=!sub.hidden;subButton.setAttribute('aria-expanded',String(!sub.hidden))});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!sub.hidden){sub.hidden=true;subButton.setAttribute('aria-expanded','false');subButton.focus()}else if(!bp.matches&&!nav.hidden){nav.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu');toggle.focus()}}});
document.addEventListener('click',e=>{if(!e.target.closest('.item-submenu')){sub.hidden=true;subButton.setAttribute('aria-expanded','false')}});
