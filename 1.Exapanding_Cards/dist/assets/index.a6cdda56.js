const n=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};n();const l=document.querySelectorAll(".card");l.forEach(s=>{s.addEventListener("click",()=>{a(),s.classList.add("active-class-div"),s.lastElementChild.classList.add("active-class-text")})});function a(){l.forEach(s=>{s.classList.contains("active-class-div")&&(s.classList.remove("active-class-div"),s.lastElementChild.classList.remove("active-class-text"))})}