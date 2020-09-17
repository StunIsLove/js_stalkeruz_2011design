// ==UserScript==
// @name         StalkerUz - дизайн 2011 года
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  UserScript, который возвращает на сайт дизайн 2011-го года. Версия для домена stalkeruz.com.
// @author       Страж
// @match        *://stalkeruz.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // ================================== Область querySelectorAll ================================== //

    // * Фон и header 
    document.body.style.cssText = `background: url("http://img.stalkeruz.com/pic_b/96ec01e6cf4cb52019f771257232c76f.jpg") 0% 0% / cover no-repeat fixed;`;
    document.querySelector("body #page #fonepage #header #headerimg").innerHTML = `<div class="special1"><a href="https://stalkeruz.com/rss.xml" class="feed-icon"><img src="/misc/feed.png" alt="RSS-материал" title="Территория Сталкера RSS" width="16" height="16"></a></div><div class="submenu"><ul class="links"><li class="menu-959 first"><a href="/search/yandexsearch" title="Поиск по сайту с помошью Google и Яндекс">Поиск</a></li><li class="menu-176"><a href="/user/register" title="зарегистрируйтесь если у вас нет доступа">Регистрация</a></li><li class="menu-175"><a href="/mobiletheme" title="Мобильная версия сайта StalkerUz.com Территория Сталкера">Мобильная версия</a></li><li class="menu-499 last"><a href="/rss.xml" title="Лента событий сайта STALKER.UZ">Лента</a></li></ul></div> <a href="/" title="StalkerUz.com Территория Сталкера"><img src="/themes/logo.jpg" alt="StalkerUz.com Территория Сталкера" title="StalkerUz.com Территория Сталкера" class="sitetitle"></a> <marquee behavior="scroll" scrollamount="1" direction="up" width="450" height="140" onmouseover="this.stop()" onmouseout="this.start()" class="special2"> <h3 class="special3">Привет, Сталкер </h3> <h3 class="special4">Большой выбор <a href="/mods.html">Моды и Патчи для Тень Чернобыля, Чистое Небо, Зов Припяти</a>,<br> а также <a href="/forum.html">форум фанатов</a> и интересное <a href="/tribune">общение в чате</a>.<br> Сталкерские <a href="/galereya.html">обои и картинки в галереи.</a><br> <a href="/istorii-rasskazy.html">Интересные Рассказы в разделе Истории, Рассказы.</a><br> <a href="/faily.html">Возможность скачать полезные темы, файлы.</a></h3> </marquee> <div id="fixed10" class="specia999"> <div class="specia2l5"><a href="/" title="StalkerUz.Com">StalkerUz.Com</a></div> <div class="specia2l6"><ul class="links"><li class="menu-707 first"><a href="/battling" title="Территория Сталкера играть онлайн, ТС-Онлайн, играть сталкер онлайн,"><strong>ТС-Онлайн</strong></a></li><li class="menu-498"><a href="/stalkeruz/kodeks-polzovatelya-stalkeruz.html" title="Кодекс пользователя STALKER.UZ"><strong>Кодекс</strong></a></li><li class="menu-907"><a href="/last.html" title="Послдение события на сайте, форуме и в коментариях Stalker.Uz - Территория Сталкера"><strong>Трекер</strong></a></li><li class="menu-496"><a href="/mods.html" onmouseover="a_hover('mods');" title="Моды к S.T.A.L.K.E.R. :: Тень Чернобыля, Чистое Небо, Зов Припяти, Shadow of Chernobyl, Clear Sky, Call of Pripyat"><strong>Моды</strong></a></li><li class="menu-493"><a href="/forum.html?r=all" onmouseover="a_hover('forummenu');" title="Форум фанатов игры S.T.A.L.K.E.R. - описание прохождеиня игры, где скачать игру, моды, патчи, файлы, хороший сталкерский юмор, интересные рассказы, книги, стихи, отличная помошь с проблемами любой сложности."><strong>Форум</strong></a></li><li class="menu-1358 last"><a href="/stalkeruz/faq-voprosy-i-otvety.html" title="F.A.Q. - Вопросы и Ответы"><strong>F.A.Q.</strong></a></li></ul></div> </div> <div onmouseover="a_hover('mods');" class="special9" onmouseout="a_out('mods');" id="mods" style="display: none;"><a href="/mods/soc.html" title="Моды для S.T.A.L.K.E.R.: Shadow of Chernobyl / Тень Чернобыля">Моды для Тень Чернобыля</a><br><a href="/mods/cs.html" title="Моды для S.T.A.L.K.E.R.: Clear Sky / Чистое Небо">Моды для Чистое Небо</a><br><a href="/mods/cop.html" title="Моды для S.T.A.L.K.E.R.: Call of Pripyat / Зов Припяти">Моды для Зов Припяти</a></div> <div onmouseover="a_hover('forummenu');" class="special10" onmouseout="a_out('forummenu');" id="forummenu"><a href="/forum.html" title="Форум Staker Uz Территория Сталкера">Основной форум</a><br><a href="/forum.html?r=stalker" title="Форум StalkerUz.com Группировки и Локации">Группировки и Локации</a><br><a href="/forum.html?r=object" title="Форум StalkerUz.com Программы и Болталка">Программы и Болталка</a><br><a href="/forum-stalker-uz-territoriya-stalkera/frpg.html" title="Форум ФРПГ">ФРПГ</a></div>`;
    
    // Если пользователь присутствует на форуме, применить шапку форума, иначе применить стандартную шапку
    if (window.location.pathname == "/forum.html") {
   		document.querySelector("body #page #fonepage #header").style.cssText = `background: #000 url(https://stalkeruz.com/themes/stalker/images/headf.jpg) no-repeat bottom center;`;
   	} else {
   		document.querySelector("body #page #fonepage #header").style.cssText = `background: #000 url(https://stalkeruz.com/themes/stalker/images/head.jpg) no-repeat bottom center;`;
   	}

   	// Удаление надписи StalkerUz.Com
   	document.querySelector("body #page #fonepage #header #headerimg #fixed10.specia999 .specia2l5").innerText = "";
    
   	// Удаление текста у underpost под слайдером с баннерами, если такой контейнер существует
    if (document.querySelector("body #page #fonepage #content .underpost .nodelinks .special26")) {
   		document.querySelector("body #page #fonepage #content .underpost .nodelinks .special26").innerText = "";
    }

   	// * Блок "Актуальные темы на сегодня"
    document.querySelector("body #page #fonepage .contenttop.special44").style.cssText = "background:url(https://stalkeruz.com/themes/stalker/images/contenttop.png); background-repeat:no-repeat; overflow: hidden;";
	document.querySelector("body #page #fonepage .contentbody.special45").style.cssText = "background:url(https://stalkeruz.com/themes/stalker/images/contentbody.png); background-repeat:repeat-y;";
	document.querySelector("body #page #fonepage .contentbottom.special46").style.cssText = "background:url(https://stalkeruz.com/themes/stalker/images/contentbottom.png); background-repeat:no-repeat;";
	document.querySelector("body #page #fonepage .contenttop.special44 .special47").style.paddingLeft = "20px";

	// * Блок контента (форум, темы форума)
	if(document.querySelectorAll("body #page #fonepage #content .contenttop")[0]) {
		document.querySelectorAll("body #page #fonepage #content .contenttop")[0].style.cssText = "background:url(https://stalkeruz.com/themes/stalker/images/contenttop.png); background-repeat:no-repeat;"; 
		document.querySelectorAll("body #page #fonepage #content .contentbody")[0].style.cssText = "background:url(https://stalkeruz.com/themes/stalker/images/contentbody.png); background-repeat:repeat-y;"; 
		document.querySelectorAll("body #page #fonepage #content .contentbottom")[0].style.cssText = "background:url(https://stalkeruz.com/themes/stalker/images/contentbottom.png); background-repeat:no-repeat;"; 
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
	    	nodetop[i].style.cssText = "background:url(https://stalkeruz.com/themes/stalker/images/nodetop.png); background-repeat:no-repeat;";
	    	nodecontent[i].style.cssText = "background:url(https://stalkeruz.com/themes/stalker/images/nodemiddle.png); background-repeat:repeat-y;";
	    	nodelinks[i].style.cssText = "background:url(https://stalkeruz.com/themes/stalker/images/nodebottom.png); background-repeat:no-repeat;";
	    }
	}

	// Если существует sidebar, заменить стили всех sidebar_top, sidebar_content и sidebar_footer
	if (sidebar_top) {
	    for (j = 0; j < sidebar_top.length; ++j) {
	    	sidebar_top[j].style.cssText = "background:url(https://stalkeruz.com/themes/stalker/images/menutop_02.png); background-repeat:no-repeat;";
	    	sidebar_content[j].style.cssText = "background:url(https://stalkeruz.com/themes/stalker/images/menumiddle_04.png); background-repeat:repeat-y;";
	    	sidebar_footer[j].style.cssText = "background:url(https://stalkeruz.com/themes/stalker/images/menubottom_08.png); background-repeat:no-repeat;";
	    }
	}
})();