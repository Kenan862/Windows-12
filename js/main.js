import { deviceCheck } from "./components/device-check.js";
import { ms_edge } from "./components/ms-edge.js";
import { notification } from "./components/notification.js";

$(document).ready(() => {
   deviceCheck();
    notification();
    $(document).on("click", "#microsoft_edge_btn", ()=>{
        ms_edge();
        $("#microsoft_edge_btn").css({
            "border-bottom" : "3px solid blue",
        });
    });
});