// ==UserScript==
// @name         Hide vrv description
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide vrv description
// @author       You
// @match        https://vrv.co/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

var css = document.createElement("style")
css.type = "text/css"
css.innerHTML = "#content .description{ opacity: 0; } #content .description:hover { opacity: 0.5; }"
document.head.appendChild(css)
