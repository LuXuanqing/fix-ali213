// ==UserScript==
// @name         修复游侠图片不展示问题
// @namespace    http://tampermonkey.net/
// @version      0.2.0
// @description  fix img display
// @author       Xuanqing Lu
// @match        https://down.ali213.net/pcgame/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ali213.net
// @grant        none
// @license      MIT
// @supportURL   https://github.com/LuXuanqing/fix-ali213/tree/main
// @updateURL    https://raw.githubusercontent.com/LuXuanqing/fix-ali213/main/fix-ali213.js
// @downloadURL  https://raw.githubusercontent.com/LuXuanqing/fix-ali213/main/fix-ali213.js
// ==/UserScript==

(function () {
    'use strict';
    // fix pcgame list img src 
    const nodes = document.querySelectorAll('.content-a>img')
    for (const node of nodes) {
        const url = node.getAttribute('data-original')
        if (url) {
            node.src = url
        }
    }

    // scroll to game list smoothly
    const list = document.querySelector('.famous-ul-container')
    if (list) {
        list.scrollIntoView({ behavior: 'smooth' })
    }
})();