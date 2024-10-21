// ==UserScript==
// @name         HaloPSA Prevent Leaving When Entering Ticket Notes
// @namespace    http://tampermonkey.net/
// @version      2024-10-21
// @description  HaloPSA Prevent Leaving When Entering Ticket Notes
// @author       Andrea Mastellone
// @match        https://service.intellicomp.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=intellicomp.net
// @grant        none
// @downloadURL  https://github.com/intellicomp/UserScripts/raw/refs/heads/main/HaloPSA%20Prevent%20Leaving%20When%20Entering%20Ticket%20Notes.user.js
// @updateURL    https://github.com/intellicomp/UserScripts/raw/refs/heads/main/HaloPSA%20Prevent%20Leaving%20When%20Entering%20Ticket%20Notes.user.js
// ==/UserScript==

(function () {
    'use strict';

    function onBeforeUnload(e) {
        // Cancel the event
        e.preventDefault();
        // Chrome requires returnValue to be set
        e.returnValue = '';
    }

    function activateReloader() {
        window.addEventListener('beforeunload', onBeforeUnload);
    }

    function deactivateReloader() {
        window.removeEventListener('beforeunload', onBeforeUnload);
    }

    function onElementAvailable(selector, callback) {
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                callback();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    onElementAvailable("#ticketdetails-details", () => {
        // Element-specific code here
        const targetNode = document.getElementById('ticketdetails-details');
        function callback(mutationsList, observer) {
            mutationsList.forEach((mutation) => {
                console.log(mutation.type);
                if (mutation.type === 'childList') {
                    if (document.querySelector(".action-history-item.wcontainer.isadding")) {
                        activateReloader();
                        console.log('notes exists');
                    } else {
                        deactivateReloader();
                        console.log('notes removed');
                    }
                }
            });
        };

        const observer = new MutationObserver(callback);
        const config = { childList: true, subtree: true };
        observer.observe(targetNode, config);
    });

})();
