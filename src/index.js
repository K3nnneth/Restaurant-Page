import { pageLoad } from "./pagestart.js";
import { homeLoad } from "./home.js";
import { menuLoad } from "./menu.js";
import { contactLoad } from "./contact.js";

pageLoad();
homeLoad();
menuLoad();
contactLoad();

const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        const pages = document.querySelectorAll(".page");
        pages.forEach((page) => {
            page.classList.remove('active');
        })
        let curr = document.querySelector(`.${e.target.id}`);
        // console.log(e.target.id);
        // console.log(curr);
        curr.classList.add('active');
    });
});


