function start_menu() {
    $('#start_btn').on('click', function () {
        if ($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(".start_menu").hide('fast');
            setTimeout(() => {
                $(".start_menu").remove();    
            }, 100);
            
        } else {
            $(this).attr('data-click-state', 1);
            $("main").append(`
            <div class="card position-absolute shadow rounded-3 start_menu" style="display:none;height:500px; width:720px; top: 24%; left:0.4%;">
            <div class="card-body d-flex justify-content-center align-items-center p-1">
            <div class="card border-0 rounded-0 bg-transparent d-flex justify-content-evenly h-100 w-25">
            <div class="card border-0 rounded-0 bg-transparent">
                <div class="card-body p-0">
                    <button type="button" class="btn btn-outline-light border-0" style="color:#000; height:60px; width:180px;"><img src="./assets/Accounts.png"/><small>&nbsp;&nbsp;Administrator&nbsp;</small>&nbsp;&nbsp;<i class="fal fa-angle-down"></i></button>
                </div>
            </div>
            <div class="card border-0 rounded-0 bg-transparent">
                <div class="card-body p-0">
                <button type="button" class="btn btn-outline-light border-0" style="color:#000;"><i class="fal fa-home-alt"></i>&nbsp;Home</button><br>
                <button type="button" class="btn btn-outline-light border-0" style="color:#000;"><i class="fal fa-shapes"></i>&nbsp;All Apps</button><br>
                <button type="button" class="btn btn-outline-light border-0" style="color:#000;"><i class="fal fa-video"></i>&nbsp;Video Tools</button><br>
                <button type="button" class="btn btn-outline-light border-0" style="color:#000;"><i class="fal fa-crop-alt"></i>&nbsp;Graphic Design</button><br>
                <button type="button" class="btn btn-outline-light border-0" style="color:#000;"><i class="fal fa-hashtag"></i>&nbsp;Social Apps</button><br>
                <button type="button" class="btn btn-outline-light border-0" style="color:#000;"><i class="fal fa-plus-circle"></i></button><br>
                </div>
            </div>
            <div class="card border-0 rounded-0 bg-transparent">
                <div class="card-body p-0">
                    <div class="d-grid">
                        <button type="button" class="btn btn-outline-light border-0" style="text-align:start; color:#000;"><i class="fal fa-cog"></i>&nbsp;Settings</button><br>
                        <button type="button" class="btn btn-outline-light border-0" style="text-align:start; color:#000;"><i class="fal fa-power-off"></i>&nbsp;Power</button><br>    
                    </div>
                </div>
            </div>
            </div>
            <div class="card border-0 rounded-0 bg-transparent h-100 w-75">
                <ul class="list-group bg-transparent list-group-flush">
                    <li class="list-group-item bg-transparent border-0"><input class="form-control shadow form-control-lg" type="text" placeholder="Search" aria-label=".form-control-lg"></li>
                    <li class="list-group-item bg-transparent border-0">Suggested<br class="m-1">
                    <button type="button" class="btn btn-outline-light border-0" style="color:#000; height:80px; width:80px; font-size: 43px;"><i class="fal fa-file-word"></i></button>
                    <button type="button" class="btn btn-outline-light border-0" style="color:#000; height:80px; width:80px; font-size: 43px;"><i class="fal fa-file-word"></i></button>
                    <button type="button" class="btn btn-outline-light border-0" style="color:#000; height:80px; width:80px; font-size: 43px;"><i class="fal fa-file-word"></i></button>
                    <button type="button" class="btn btn-outline-light border-0" style="color:#000; height:80px; width:80px; font-size: 43px;"><i class="fal fa-file-word"></i></button>
                    <button type="button" class="btn btn-outline-light border-0" style="color:#000; height:80px; width:80px; font-size: 43px;"><i class="fal fa-file-word"></i></button>
                    <button type="button" class="btn btn-outline-light border-0 m-1" style="color:#000; height:40px; width:30px"><i class="fal fa-angle-right"></i></button>
                    </li>
                    <li class="list-group-item bg-transparent border-0">Recent apps<br class="m-1">
                    <button type="button" class="btn btn-outline-light border-0" style="color:#000; height:80px; width:80px; font-size: 43px;"><i class="fal fa-file-word"></i></button>
                    <button type="button" class="btn btn-outline-light border-0" style="color:#000; height:80px; width:80px; font-size: 43px;"><i class="fal fa-file-word"></i></button>
                    <button type="button" class="btn btn-outline-light border-0" style="color:#000; height:80px; width:80px; font-size: 43px;"><i class="fal fa-file-word"></i></button>
                    <button type="button" class="btn btn-outline-light border-0" style="color:#000; height:80px; width:80px; font-size: 43px;"><i class="fal fa-file-word"></i></button>
                    <button type="button" class="btn btn-outline-light border-0" style="color:#000; height:80px; width:80px; font-size: 43px;"><i class="fal fa-file-word"></i></button>
                    <button type="button" class="btn btn-outline-light border-0 m-1" style="color:#000; height:40px; width:30px"><i class="fal fa-angle-right"></i></button></li>

                    <li class="list-group-item bg-transparent border-0">Pinned apps<br class="m-1">
                    <button type="button" class="btn btn-outline-light border-0" style="color:#000; height:80px; width:80px; font-size: 43px;"><i class="fal fa-file-word"></i></button>
                    <button type="button" class="btn btn-outline-light border-0" style="color:#000; height:80px; width:80px; font-size: 43px;"><i class="fal fa-file-word"></i></button>
                    <button type="button" class="btn btn-outline-light border-0" style="color:#000; height:80px; width:80px; font-size: 43px;"><i class="fal fa-file-word"></i></button>
                    <button type="button" class="btn btn-outline-light border-0" style="color:#000; height:80px; width:80px; font-size: 43px;"><i class="fal fa-file-word"></i></button>
                    <button type="button" class="btn btn-outline-light border-0" style="color:#000; height:80px; width:80px; font-size: 43px;"><i class="fal fa-file-word"></i></button>
                    <button type="button" class="btn btn-outline-light border-0 m-1" style="color:#000; height:40px; width:30px"><i class="fal fa-angle-right"></i></button></li>
                </ul>
          </div>
            </div>
          </div>
            `);
            $(".start_menu").show("fast");
        }
    });
}

export {
    start_menu
}