function ms_edge() {
  $("main").append(`
    <div class="card shadow-lg position-absolute h-75 w-50 ms_edge_window" style="display: none">
    <div class="card-header border-bottom-0 d-flex align-items-center p-0" style="height:25px;">
    &nbsp;<img style="height:15px;"src="../assets/edge.png"/>&nbsp;<div class="card p-1 border-bottom-0 border-info rounded-0 d-flex justify-content-center" style="height:100%; width:150px; n">
    <small>Welcome
    <button type="button" class="close position-absolute" aria-label="Close" style="left:86%; top:-15%;">
  <span style="font-size:20px" aria-hidden="true">&times;</span>
</button>
    </small>
    </div>
    <button type="button" class="close m-1" aria-label="New Tab" style="font-size:15px;">
  <span aria-hidden="true"><i class="fal fa-plus"></i></span>
</button>
<button type="button" class="btn btn-outline-dark minimize_btn rounded-0 position-absolute d-flex justify-content-center align-items-center border-0" style="left:83.4%; height:25px; font-size:12px;"><i class="fal fa-window-minimize"></i></button>
<button type="button" class="btn btn-outline-dark maximize_btn rounded-0 position-absolute d-flex justify-content-center align-items-center border-0" style="left:89%; height:25px; font-size:12px;"><i class="fal fa-window-maximize"></i></button>
  <button type="button" class="btn btn-outline-danger close_btn rounded-sm position-absolute d-flex justify-content-center align-items-center border-0" style="left:94.7%; height:25px; font-size:15px;"><i class="fal fa-times"></i></button>
  </div>
  <div class="input-group input-group-sm">
  <div class="input-group-prepend">
    <span class="input-group-text p-0"><button type="button" class="btn btn-outline-dark border-0 btn-sm back_btn"><i class="fal fa-angle-left"></i></button><button type="button" class="btn btn-outline-dark border-0 btn-sm forward_btn"><i class="fal fa-angle-right"></i></button><button type="button" class="btn btn-outline-dark border-0 btn-sm refresh_btn"><i class="fal fa-redo"></i></button></span>
  </div>
  <input type="text" placeholder="Search" class="form-control web-search">
  <div class="input-group-append">
    <span class="input-group-text">Beta</span>
  </div>
</div>
  <div class="card-body d-flex flex-direction-column p-0 justify-content-center align-items-center">
    
  </div>
  </div>
    `)
  $(".ms_edge_window").show('fast',()=>{
    $(".card-body").empty().append(`<iframe src="https://www.bing.com?igu=1" class="h-100 w-100 border-0 embed-responsive-item windowframe">
    </iframe>`);
  });
  $(document).on("click", ".back_btn", ()=>{
      if(!$(".windowframe").attr("src", "https://www.bing.com?igu=1")){
        window.history.back();
      }
  });
  $(document).on("click", ".refresh_btn", ()=>{
    if(!$(".windowframe").attr("src", "https://www.bing.com?igu=1")){
      window.location.reload();
    }
});
$(document).on("click", ".forward_btn", ()=>{
  if($(".windowframe").attr("src", "https://www.bing.com?igu=1")){
    window.history.forward();
  }
});
$(".web-search").bind("enterKey",function(e){
  $(".windowframe").attr("src",`https://www.${$(this).val()}?igu=1`);    
});
  $(".web-search").keyup(function(e){
  if(e.keyCode == 13)
  {
    $(this).trigger("enterKey");
  }
  });

  $(document).on("click", ".close_btn",()=>{
    $(".ms_edge_window").css({
      "transform": "scale(0.5,0.5)",
      "opacity":"0",
      "transition": "0.5s",
    });
    $("#microsoft_edge_btn").css({
      "border-bottom" : "0px solid blue",
      "transition": "0.1s",
  });
    setTimeout(() => {
      $("main").children().remove(".ms_edge_window");
    }, 500);
  });

  $(document).on("click", ".minimize_btn",()=>{
    $(".ms_edge_window").css({
      "transform": "scale(0.5,0.5) translateY(300px)",
      "opacity":"0",
      "transition": "0.5s",
    });
    $("#microsoft_edge_btn").css({
      "border-bottom" : "2px solid blue",
      "transition": "0.1s",
  });
    setTimeout(() => {
      $("main").children().remove(".ms_edge_window");
    }, 500);
  });
  
$(document).on("click", ".maximize_btn",()=>{
  $(".ms_edge_window").css({
    "transform": "translate(-50%, -50%)",
    "height": "100% !important",
    "width": "100% !important",
    "transition": "1s",
  });
});
}

export {
  ms_edge
}

// "height": "100%",
//     "width":"100%",
//     "transition": "0.5s",