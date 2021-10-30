import{r as u,e as c,s as b,p as m,o as p,n as f}from"./vendor.94a94584.js";const v=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};v();var h=Object.defineProperty,y=Object.getOwnPropertyDescriptor,d=(t,o,s,n)=>{for(var e=n>1?void 0:n?y(o,s):o,r=t.length-1,i;r>=0;r--)(i=t[r])&&(e=(n?i(o,s,e):i(e))||e);return n&&e&&h(o,s,e),e},l;(function(t){t.PRIMARY="primary",t.SECONDARY="secondary"})(l||(l={}));let a=class extends b{constructor(){super(...arguments);this.variant=l.PRIMARY,this.disabled=!1}render(){const t={"remindle-button":!0,disabled:this.disabled,primary:this.variant===l.PRIMARY,secondary:this.variant===l.SECONDARY};return m`
      <button
        @click=${this._onClick}
        part="button"
        class=${p(t)}
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `}_onClick(){this.dispatchEvent(new CustomEvent("button-pressed"))}};a.styles=u`
    :host {
      display: var(--remindle-button-display, inline-block);
      box-sizing: inherit;
    }

    :host(.block) {
      --remindle-button-display: block;
      --remindle-button-width: 100%;
    }

    button {
      border: solid 1px var(--remindle-button-border-color, red);
      background: solid 1px var(--remindle-button-border-color, red);
    }

    .remindle-button {
      background-color: var(--remindle-button-bg-color, blue);
      border: none;
      border-radius: 0.25rem;
      color: var(--remindle-button-color, var(--white, #ffffff));
      cursor: pointer;
      font-weight: 400;
      font-size: 1.6rem;
      height: 4.8rem;
      line-height: 1.5;
      min-width: var(--remindle-button-min-width, 12rem);
      outline: 0;
      padding: 0 var(--remindle-button-padding-horizontal, 2.4rem);
      -webkit-appearance: button;
      position: relative;
      transition: color 0.15s ease-in-out 0s,
        background-color 0.15s ease-in-out 0s;
      text-align: center;
      text-decoration: none;
      text-transform: none;
      user-select: none;
      vertical-align: middle;
      width: var(--remindle-button-width, auto);
    }

    button[disabled],
    button[disabled]:hover {
      opacity: 0.65;
      pointer-events: none;
    }

    button:focus::before {
      content: '';
      border-radius: 0.25rem;
      border: 1px solid var(--white, #fff);
      box-sizing: inherit;
      display: block;
      position: absolute;
      height: calc(100% - 0.8rem);
      top: 0.4rem;
      left: 0.4rem;
      visibility: visible;
      width: calc(100% - 0.8rem);
    }

    .primary {
      --remindle-button-bg-color: var(--primary, #F49739);
    }

    .primary:active,
    .primary:hover {
      --remindle-button-bg-color: var(--primary-active, #FFCF2B);
    }

    .secondary {
      --remindle-button-bg-color: var(--secondary, #FFCF2B);
    }

    .secondary:active,
    .secondary:hover {
      --remindle-button-bg-color: var(--secondary-active, #F49739);
    }
  `;d([c()],a.prototype,"variant",2);d([c({type:Boolean})],a.prototype,"disabled",2);a=d([f("remindle-button")],a);
