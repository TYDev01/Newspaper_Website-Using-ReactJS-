import React from 'react'
import '../App.css'

export const Head = () => {
  return (
<head>
    <meta charset="UTF-8" />
    <meta name="description" content="" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <title>The News Paper - News &amp; Lifestyle Magazine Template</title>

    <link rel="icon" href="img/core-img/favicon.ico" />

    <link rel="stylesheet" href="style.css" />
    <script nonce="e825f24e-0a2f-4b07-bc7e-0ad0c0c6db4c">
      (function (w, d) {
        !(function (cO, cP, cQ, cR) {
          cO[cQ] = cO[cQ] || {};
          cO[cQ].executed = [];
          cO.zaraz = { deferred: [], listeners: [] };
          cO.zaraz.q = [];
          cO.zaraz._f = function (cS) {
            return function () {
              var cT = Array.prototype.slice.call(arguments);
              cO.zaraz.q.push({ m: cS, a: cT });
            };
          };
          for (const cU of ["track", "set", "debug"])
            cO.zaraz[cU] = cO.zaraz._f(cU);
          cO.zaraz.init = () => {
            var cV = cP.getElementsByTagName(cR)[0],
              cW = cP.createElement(cR),
              cX = cP.getElementsByTagName("title")[0];
            cX && (cO[cQ].t = cP.getElementsByTagName("title")[0].text);
            cO[cQ].x = Math.random();
            cO[cQ].w = cO.screen.width;
            cO[cQ].h = cO.screen.height;
            cO[cQ].j = cO.innerHeight;
            cO[cQ].e = cO.innerWidth;
            cO[cQ].l = cO.location.href;
            cO[cQ].r = cP.referrer;
            cO[cQ].k = cO.screen.colorDepth;
            cO[cQ].n = cP.characterSet;
            cO[cQ].o = new Date().getTimezoneOffset();
            if (cO.dataLayer)
              for (const da of Object.entries(
                Object.entries(dataLayer).reduce((db, dc) => ({
                  ...db[1],
                  ...dc[1],
                }))
              ))
                zaraz.set(da[0], da[1], { scope: "page" });
            cO[cQ].q = [];
            for (; cO.zaraz.q.length; ) {
              const dd = cO.zaraz.q.shift();
              cO[cQ].q.push(dd);
            }
            cW.defer = !0;
            for (const de of [localStorage, sessionStorage])
              Object.keys(de || {})
                .filter((dg) => dg.startsWith("_zaraz_"))
                .forEach((df) => {
                  try {
                    cO[cQ]["z_" + df.slice(7)] = JSON.parse(de.getItem(df));
                  } catch {
                    cO[cQ]["z_" + df.slice(7)] = de.getItem(df);
                  }
                });
            cW.referrerPolicy = "origin";
            cW.src =
              "../../cdn-cgi/zaraz/sd0d9.js?z=" +
              btoa(encodeURIComponent(JSON.stringify(cO[cQ])));
            cV.parentNode.insertBefore(cW, cV);
          };
          ["complete", "interactive"].includes(cP.readyState)
            ? zaraz.init()
            : cO.addEventListener("DOMContentLoaded", zaraz.init);
        })(w, d, "zarazData", "script")}
      )(window, document);
    </script>
  </head>
  )
}
