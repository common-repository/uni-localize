import{i as n,b as t,f as o}from"./p-53fd397d.js";function c(n,t,o){var c;const{el:s,strict:e,state:u,index:f,bindstart:r,bindend:a,uniReplaced:l}=n;i((null===(c=s.querySelector("slot"))||void 0===c?void 0:c.assignedNodes())||s.childNodes,e,o,u,f,t,r,a),null==l||l.emit()}function i(t,o,c,u,f,r,a,l){t.forEach((t=>{if(t.hasChildNodes())1===t.nodeType&&s(t,o,c,u,f,a,l),r.toUpperCase().split(",").map((n=>n.trim())).includes(t.nodeName)||i(t.childNodes,o,c,u,f,r,a,l);else switch(t.nodeType){case 1:s(t,o,c,u,f,a,l);break;case 3:!function(t,o,c,i,s,u){const f=function(n){return(n.textContent||n.data).trim()}(t);if(f.length>0){const r=o?f:t.originalContent||f,a=e(c,i,r,s,u);a!==f&&(t.originalContent=r,function(t,o){n(t.textContent)?t.textContent=o:t.data=o}(t,a))}}(t,c,u,f,a,l)}}))}function s(t,o,c,i,s,u,f){const r=t.attributes;if(r&&r.length>0)for(let a=0;a<r.length;++a){const l=r[a].name;if("class"!==l){n(t.originalAttributes)||(t.originalAttributes=new Map);const d=r[a].value,p=c?d:t.originalAttributes.get(l)||d;if(""!==p.trim()){const n=e(i,s,p,u,f,o);n!==d&&(t.originalAttributes.set(l,p),r[a].value=n)}}}}function e(n,t,o,c,i,s){return u(n,t,f(n,t,o,s)||o,c.trim(),i.trim())}function u(n,t,o,c,i){return o.includes(c)&&o.includes(i)?function(n,t,o,c,i){return function(n,t,o){const c=[],i=n.split(o).filter((n=>""!==n)),s=t.split("").map((n=>"["+n+"]")).join("");return i.forEach((n=>{const o=new RegExp(`${s}.+`,"g"),i=n.match(o);i&&i.length&&c.push(i[0].replace(t,""))})),c}(o,c,i).forEach((s=>{const e=c+s+i,r=u(n,t,f(n,t,s,!1)||s,c,i);o=o.replace(e,r!==s?r:e)})),o}(n,t,o,c,i):o}function f(c,i,s,e){const u=e?s:"uniself"===s.trim()?o(c)?c:n(c)&&JSON.stringify(c):"unindex"===s.trim()?`${i}`:c&&c[s.trim()];return u?t(u)?JSON.stringify(u):u.toString():u}export{c as u}