var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var i=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,i.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=i);var n=i("iQIUW");const r=document.querySelector(".form");r.addEventListener("submit",function(e){e.preventDefault();let o=Number(r.delay.value),t=Number(r.step.value),i=Number(r.amount.value);for(let e=0;e<i;e+=1){let i=o;e>0&&(i=o+t*e),(function(e,o){return new Promise((t,i)=>{setTimeout(()=>{Math.random()>.3?t({position:e,delay:o}):i({position:e,delay:o})},o)})})(e,i).then(({position:e,delay:o})=>{(0,n.Notify).success(`✅ Fulfilled promise ${e+1} in ${o}ms`)}).catch(({position:e,delay:o})=>{(0,n.Notify).failure(`❌ Rejected promise ${e+1} in ${o}ms`)})}});
//# sourceMappingURL=03-promises.886c2f5a.js.map