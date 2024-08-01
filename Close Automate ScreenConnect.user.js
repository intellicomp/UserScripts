// ==UserScript==
// @name         Close Automate ScreenConnect
// @namespace    http://tampermonkey.net/
// @version      2024-08-01
// @description  try to take over the world!
// @author       You
// @match        https://labtechsc.intellicomp.net/App_Extensions/fc234f0e-2e8e-4a1f-b977-ba41b14031f7/Launch.aspx*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=intellicomp.net
// @grant        window.close
// @downloadURL  https://github.com/intellicomp/UserScripts/raw/main/Close%20Automate%20ScreenConnect.user.js
// @updateURL    https://github.com/intellicomp/UserScripts/raw/main/Close%20Automate%20ScreenConnect.user.js
// ==/UserScript==

(function() {
    'use strict';

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    sleep(4000).then(() => { window.close(); });

})();
