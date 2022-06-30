function notification(status, message) {
  $("main").append(`<div class="notification shadow p-1 pr-2"><button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button></div>`)

$(document).on("click", ".close", ()=>{
  $(".notification").css({
    "opacity": "0",
    "transform": "translateX(500px)",
    "transition":"1s"
  });  
});

$(document).on("click", ".notification", (e)=>{
  $(e.target).css({
    "opacity": "0",
    "transform": "translateX(500px)",
    "transition":"1s"
  });  
});

}

export{notification}