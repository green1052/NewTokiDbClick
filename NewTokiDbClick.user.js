// ==UserScript==
// @name NewTokiDbClick
// @description	뉴토끼에서 더블 클릭으로 다음화로 갈 수 있게 해줍니다.
// @version		1.0.0
// @author		green1052
// @homepageURL	https://github.com/green1052/NewTokiDbClick
// @downloadURL	https://raw.githubusercontent.com/green1052/NewTokiDbClick/main/NewTokiDbClick.user.js
// @include		newtoki*.com/webtoon/*
// @run-at		document-end
// ==/UserScript==

(() => {
    'use strict';

    document.querySelector('.view-img').parentNode.addEventListener('dblclick', () => {
        document.querySelector('.navbar-wrapper > div:nth-child(1) > a:nth-child(3)').click();
    });
})();