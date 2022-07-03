import { deviceCheck } from "./components/device-check.js";
import { explorer } from "./components/explorer.js";
import { ms_edge } from "./components/ms-edge.js";
import { notification } from "./components/notification.js";
import { search } from "./components/search.js";
import { security } from "./components/security.js";
import { settings } from "./components/settings.js";
import { start_menu } from "./components/start_menu.js";
import { store } from "./components/store.js";

$(document).ready(() => {
   deviceCheck();
    notification();
    start_menu();
    $(document).one("click", "#search_btn", search);
    $(document).on("click", "#file_explorer_btn", ()=>{
        explorer();
        $("#file_explorer_btn").css({
            "border-bottom" : "3px solid #0EA2FF",
        });
    });
    $(document).on("click", "#microsoft_store_btn", ()=>{
        store();
        $("#microsoft_store_btn").css({
            "border-bottom" : "3px solid #0EA2FF",
        });
    });
    $(document).on("click", "#microsoft_defender_btn", ()=>{
        security();
        $("#microsoft_defender_btn").css({
            "border-bottom" : "3px solid #0EA2FF",
        });
    });
    $(document).on("click", "#microsoft_settings_btn", ()=>{
        settings();
        $("#microsoft_settings_btn").css({
            "border-bottom" : "3px solid #0EA2FF",
        });
    });
    $(document).on("click", "#microsoft_edge_btn", ()=>{
        ms_edge();
        $("#microsoft_edge_btn").css({
            "border-bottom" : "3px solid #0EA2FF",
        });
    });
});