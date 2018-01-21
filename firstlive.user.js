// ==UserScript==
// @name First Live
// @description Refresh les topics de la première page et le compteur de connecté toutes les X secondes si le curseur de la souris n'est pas sur la liste des sujets
// @author baisela
// @match www.jeuxvideo.com/forums/0-51-0-1-0-1-0-blabla-18-25-ans.htm
// @match m.jeuxvideo.com/forums/0-51-0-1-0-1-0-blabla-18-25-ans.htm
// @run-at document-end
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @version 1.1
// ==/UserScript==

var timer = 14; //secondes
var timeOut = 0;

$(".topic-list.topic-list-admin").mouseenter(function(){
    timeOut = 1;
}).mouseleave(function(){
    timeOut = 0;
});

setInterval(function(){
    if(!timeOut){
        $(".topic-list.topic-list-admin").load(location.href + " .topic-list.topic-list-admin > *");
        $.get(location.href).then(function(page) {
            $(".nb-connect-fofo").text($(page).find(".nb-connect-fofo").text());
        });
    }
}, timer*1000);
