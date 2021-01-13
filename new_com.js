// ==UserScript==
// @name StalkerUz.Com - новый дизайн
// @namespace http://tampermonkey.net/
// @version 1.0
// @description UserScript, который обновляет дизайн на сайте.
// @author Дымча, Страж
// @match *://stalkeruz.com/*
// @grant none
// ==/UserScript==

(function() {
    'use strict';

    // ================================== Область querySelectorAll ================================== //

    // * Фон, header и footer
    document.body.style.cssText = `background: url("https://stalkeruz.com/stalker_images/pic_b/dd772ea76c06ce8711ae695211e9a254.png") 0% 0% / cover no-repeat fixed;`;
    document.querySelector("body #page #fonepage #header #headerimg a img.sitetitle").style.cssText += `opacity: 0`;
    document.querySelector("body #page #fonepage").style.cssText = `background: #000 url(https://stalkeruz.com/stalker_images/pic_b/8d56ab24a54ff02c9fbe814e894a0796.png) repeat-y;`;
    document.querySelector("body #page #fonepage #header #headerimg #fixed10.specia999 .specia2l5").style.cssText += `margin-left: 1.5%;`;
    document.querySelector("body #page #footer").style.cssText = `background: #000 url(https://stalkeruz.com/stalker_images/pic_b/4c48442cb16d38d0b4e157454f77ebde.png) no-repeat top;`;

    // Если пользователь присутствует на форуме, применить шапку форума, иначе применить стандартную шапку
    if (window.location.pathname == "/forum.html") {
      document.querySelector("body #page #fonepage #header").style.cssText = `background: #000 url(https://stalkeruz.com/stalker_images/pic_b/da4af9053db1258d78e40318fe3e35a3.png) no-repeat bottom center;`;
    } else {
      document.querySelector("body #page #fonepage #header").style.cssText = `background: #000 url(https://stalkeruz.com/stalker_images/pic_b/da4af9053db1258d78e40318fe3e35a3.png) no-repeat bottom center;`;
    }

    // Удаление текста у underpost под слайдером с баннерами, если такой контейнер существует
    if (document.querySelector("body #page #fonepage #content .underpost .nodelinks .special26")) {
      document.querySelector("body #page #fonepage #content .underpost .nodelinks .special26").innerText = "";
    }

    // * Блок "Актуальные темы на сегодня"
    if (document.querySelector("body #page #fonepage .contenttop.special44")) {
      document.querySelector("body #page #fonepage .contenttop.special44").style.cssText = "background:url(https://stalkeruz.com/stalker_images/pic_b/128b5c8a3e43cd5e4fc28ab671485619.png); background-repeat:no-repeat; overflow: hidden;";
      document.querySelector("body #page #fonepage .contentbody.special45").style.cssText = "background:url(https://stalkeruz.com/stalker_images/pic_b/1718dc15116f86cc38b50670649bb6b5.png); background-repeat:repeat-y;";
      document.querySelector("body #page #fonepage .contentbottom.special46").style.cssText = "background:url(https://stalkeruz.com/stalker_images/pic_b/63effdc0fc55321d088d7961d22ba153.png); background-repeat:no-repeat;";
      document.querySelector("body #page #fonepage .contenttop.special44 .special47").style.paddingLeft = "20px";
    }

    // * Блок контента (форум, темы форума)
    if (document.querySelectorAll("body #page #fonepage #content .contenttop")[0]) {
      document.querySelectorAll("body #page #fonepage #content .contenttop")[0].style.cssText = "background:url(https://stalkeruz.com/stalker_images/pic_b/128b5c8a3e43cd5e4fc28ab671485619.png); background-repeat:no-repeat;";
      document.querySelectorAll("body #page #fonepage #content .contentbody")[0].style.cssText = "background:url(https://stalkeruz.com/stalker_images/pic_b/1718dc15116f86cc38b50670649bb6b5.png); background-repeat:repeat-y;";
      document.querySelectorAll("body #page #fonepage #content .contentbottom")[0].style.cssText = "background:url(https://stalkeruz.com/stalker_images/pic_b/63effdc0fc55321d088d7961d22ba153.png); background-repeat:no-repeat;";
    }

    // ================================== Область querySelectorAll ================================== //

    // * Блок записей (статьи)
    var nodetop = document.querySelectorAll("body #page #fonepage #content .nodetop"), i;
    var nodecontent = document.querySelectorAll("body #page #fonepage #content .nodecontent");
    var nodelinks = document.querySelectorAll("body #page #fonepage #content .nodelinks");
    var sidebar_top = document.querySelectorAll("body #page #fonepage #sidebar h6"), j;
    var sidebar_content = document.querySelectorAll("body #page #fonepage #sidebar .content");
    var sidebar_footer = document.querySelectorAll("body #page #fonepage #sidebar .bfoot");

    // Если существует nodetop, заменить стили всех nodetop, nodecontent и nodelinks
    if (nodetop) {
        for (i = 0; i < nodetop.length; ++i) {
          nodetop[i].style.cssText = "background:url(https://stalkeruz.com/stalker_images/pic_b/bf4009d1c2b27a1f9892b831ed8603b5.png); background-repeat:no-repeat;";
          nodecontent[i].style.cssText = "background:url(https://stalkeruz.com/stalker_images/pic_b/226e8a129ad49f00bfc74f943c800c6d.png); background-repeat:repeat-y;";
          nodelinks[i].style.cssText = "background:url(https://stalkeruz.com/stalker_images/pic_b/7396a753f775d018e9a464769374e25e.png); background-repeat:no-repeat;";
        }
    }

    // Если существует sidebar, заменить стили всех sidebar_top, sidebar_content и sidebar_footer
    if (sidebar_top) {
        for (j = 0; j < sidebar_top.length; ++j) {
          sidebar_top[j].style.cssText = "background:url(https://stalkeruz.com/stalker_images/pic_b/5e82f8a6de2604be6968bd6576abea7c.png); background-repeat:no-repeat;";
          sidebar_content[j].style.cssText = "background:url(https://stalkeruz.com/stalker_images/pic_b/88ec78775f22d4af3a012e11fe9144e2.png); background-repeat:repeat-y;";
          sidebar_footer[j].style.cssText = "background:url(https://stalkeruz.com/stalker_images/pic_b/936848fe1e4b0569b3d662b3433ba6e2.png); background-repeat:no-repeat;";
        }
    }

    if (window.location.pathname == "/tribune") {
      document.querySelectorAll("body #page #fonepage #content .contenttop")[1].style.cssText = "background:url(https://stalkeruz.com/themes/stalker/images/contenttop.png); background-repeat:no-repeat;";
      document.querySelectorAll("body #page #fonepage #content .contentbody")[1].style.cssText = "background:url(https://stalkeruz.com/themes/stalker/images/contentbody.png); background-repeat:repeat-y;";
      document.querySelectorAll("body #page #fonepage #content .contentbottom")[1].style.cssText = "background:url(https://stalkeruz.com/themes/stalker/images/contentbottom.png); background-repeat:no-repeat;";

      document.querySelector("body #page #fonepage #ul-tribune-page").style.cssText = `background: url(https://stalkeruz.com/stalker_images/pic_b/c298848de9fcd787ff5997c6f3832c25.png); background-repeat: repeat-y;`;

    }
})();