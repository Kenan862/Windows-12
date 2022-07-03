function notification(status, message) {
  $("main").append(`<div class="toast toast-demo fade show notification" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <strong class="me-auto">Windows 12</strong>
    <small>1 min ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Welcome to Windows 12.
    I hope you will like this project.
  </div>
</div>`)

$(document).on("click", ".notification", ()=>{
  $(".notification").css({
    "opacity": "0",
    "transform": "translateX(500px)",
    "transition":"1s"
  });  
});

}

export{notification}