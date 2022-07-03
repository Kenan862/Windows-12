function explorer() {
    $("main").append(`
    <div class="card shadow-lg position-absolute d-flex justify-content-center align-items-center h-75 w-50 explorer_window" style="display: none ">
            <img style="height:100px;"src="/assets/files.png"/>
    </div>
    `)

    setTimeout(() => {
        $(".explorer_window").children().fadeOut(() => {
            $(".explorer_window").empty().removeClass("d-flex justify-content-center align-items-center").append(`<div class="card-header border-bottom-0 d-flex align-items-center p-0" style="height:25px;">
        &nbsp;<img style="height:15px;"src="/assets/files.png"/>&nbsp;<small>File Explorer</small>
        <button type="button" class="btn btn-outline-dark minimize_btn rounded-0 position-absolute d-flex justify-content-center align-items-center border-0" style="left:83.4%; height:25px; font-size:12px;"><i class="fal fa-window-minimize"></i></button>
        <button type="button" class="btn btn-outline-dark maximize_btn rounded-0 position-absolute d-flex justify-content-center align-items-center border-0" style="left:89%; height:25px; font-size:12px;"><i class="fal fa-window-maximize"></i></button>
      <button type="button" class="btn btn-outline-danger close_btn rounded-sm position-absolute d-flex justify-content-center align-items-center border-0" style="left:94.7%; height:25px; font-size:15px;"><i class="fal fa-times"></i></button>
      </div>
      <div class="card-body explorer_content d-flex flex-direction-column p-0 justify-content-center align-items-center">
            <h1 class="display-4">Coming Soon!</h1>
      </div>
  `);

            $(document).on("click", ".close_btn", () => {
                $(".explorer_window").css({
                    "transform": "scale(0.5,0.5)",
                    "opacity": "0",
                    "transition": "0.5s",
                });
                $("#file_explorer_btn").css({
                    "border-bottom": "0px solid #0EA2FF",
                    "transition": "0.1s",
                });
                setTimeout(() => {
                    $("main").children().remove(".explorer_window");
                }, 500);
            });

            $(document).on("click", ".minimize_btn", () => {
                $(".explorer_window").css({
                    "transform": "scale(0.5,0.5) translateY(300px)",
                    "opacity": "0",
                    "transition": "0.5s",
                });
                $("#file_explorer_btn").css({
                    "border-bottom": "2px solid #0EA2FF",
                    "transition": "0.1s",
                });
                setTimeout(() => {
                    $("main").children().remove(".explorer_window");
                }, 500);
            });

            $(document).on("click", ".maximize_btn", () => {
                $(".explorer_window").css({
                    "transform": "translate(-50%, -50%)",
                    "height": "100% !important",
                    "width": "100% !important",
                    "transition": "1s",
                });
            });

        });
    }, 1000);

    $(".explorer_window").show('fast');
}

export {
    explorer
}