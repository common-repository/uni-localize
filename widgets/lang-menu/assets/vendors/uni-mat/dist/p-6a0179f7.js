function n(n,o,e="",t=""){o&&""!==o&&n.classList.add(`${e}${o}${t}`)}function o(n,o,e){const t=o?e?n.querySelectorAll(e):n.children||[]:e?n.querySelector(e)?[n.querySelector(e)]:[]:n.firstElementChild?[n.firstElementChild]:[];return t&&t[0]||(console.error("No Element target: "+e),console.warn("For Element",n)),Array.from(t)}export{n as a,o as u}