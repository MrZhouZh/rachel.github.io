// (function(doc, win) {
//     var docEl = doc.documentElement,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         recalc = function() {
//             var clientWidth = docEl.clientWidth;
//             if (!clientWidth) return;
//             docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
//             // console.log('docEle:', docEl.style.fontSize)
//         };

//     if (!doc.addEventListener) return;
//     recalc();
//     win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);
//     /*DOMContentLoaded文档加载完成不包含图片资源 onload包含图片资源*/
// })(document, window);
! function(n) {
    var e = n.document,
        t = e.documentElement,
        i = 1920,
        d = i / 100,
        o = "orientationchange" in n ? "orientationchange" : "resize",
        a = function() {
            var n = t.clientWidth || 320;
            n > 1920 && (n = 1920);
            t.style.fontSize = n / d + "px"
        };
    e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window);


/*

var iWidth=document.documentElement.clientWidth  //getBoundingClientRect().width;
 iWidth=iWidth>640?640:iWidth;
 document.getElementsByTagName("html")[0].style.fontSize=iWidth/6.4+"px";*/