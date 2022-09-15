// 0.0.0 Copyright 2019 Ren-Wen Zhange
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (global = global || self, factory(global.dd = global.dd || {}));
}(this, function (exports) {
    var version = "0.0.0";
    function clickOpenSelection(e) {
        e.stopPropagation();
        var el = e.target.classList;
        if (el.contains("open")) {
            e.target.lastElementChild.classList.remove("ul");
            el.remove("open");

        } else {
            closeAllOption();
            e.target.lastElementChild.classList.add("ul");
            el.add("open");
        }
    }
    function clickChooseOption(e) {
        // e.preventDefault();
        e.stopPropagation();
        e.target.parentNode.parentNode.parentNode.querySelector(".replace").textContent = e.target.textContent;//user setting
        e.target.offsetParent.classList.remove("ul");
        e.target.offsetParent.offsetParent.classList.remove("open");
    }

    function closeAllOption() {
        var all_dd = document.querySelectorAll(".dropdown");
        let open = document.querySelectorAll(".open");
        let ul = document.querySelectorAll(".ul");
        if (open.length !== 0 && ul.length !== 0) {
            for (let index = 0; index < all_dd.length; index++) {
                all_dd[index].classList.remove("open");;

            }
            for (let index = 0; index < ul.length; index++) {
                ul[index].classList.remove("ul");;

            }
        }
    }


    function dropdownEventsMount() {
        var all_dd = document.querySelectorAll(".dropdown");
        var option = document.querySelectorAll(".dd_option");
        if (all_dd.length !== 0) {//開選單
            for (let index = 0; index < all_dd.length; index++) {
                all_dd[index].addEventListener("click", clickOpenSelection)
            }
        }
        if (option.length !== 0) {//點選項
            for (let index = 0; index < option.length; index++) {
                option[index].addEventListener("click", clickChooseOption)
            }
        }
    }


    function beExcludeElements_EventsMount() {
        document.addEventListener("click", closeAllOption)
    }
    function removeDocumentEvent() {
        document.removeEventListener("click", closeAllOption);
    }
    function removeDropdownEvents() {
        var all_dd = document.querySelectorAll(".dropdown");
        var option = document.querySelectorAll(".dd_option");
        if (all_dd.length !== 0) {//開選單
            for (let index = 0; index < all_dd.length; index++) {
                all_dd[index].removeEventListener("click", clickOpenSelection)
            }
        }
        if (option.length !== 0) {//點選項
            for (let index = 0; index < option.length; index++) {
                option[index].removeEventListener("click", clickChooseOption)
            }
        }
    }
    exports.clickOpenSelection = clickOpenSelection;
    exports.clickChooseOption = clickChooseOption;
    exports.closeAllOption = closeAllOption;
    exports.dropdownEventsMount = dropdownEventsMount;
    exports.beExcludeElements_EventsMount = beExcludeElements_EventsMount;
    exports.removeDocumentEvent = removeDocumentEvent;
    exports.removeDropdownEvents = removeDropdownEvents;
    Object.defineProperty(exports, '__esModule', { value: true });

}));