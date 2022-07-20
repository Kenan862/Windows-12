function store() {
    $("main").append(`
    <div class="card shadow-lg position-absolute d-flex justify-content-center align-items-center h-75 w-50 ms_store_window" id="ms_store_window" style="display: none ">
            <img style="height:100px;"src="./assets/store.png"/>
    </div>
    `)

    setTimeout(() => {
        $(".ms_store_window").children().fadeOut(() => {
            $(".ms_store_window").empty().removeClass("d-flex justify-content-center align-items-center").append(`<div class="card-header overflow-hidden ms_store_window_header border-bottom-0 d-flex align-items-center p-0" style="height:40px;">
        &nbsp;&nbsp;<img style="height:15px;"src="./assets/store.png"/>&nbsp;<small>Microsoft Store</small><input class="form-control form-control-sm" style="width:300px; margin-left:15px;" type="text" placeholder="Search" aria-label=".form-control-sm"><button type="button" class="btn btn-outline-light border-0" style="color:#000; font-size:25px;"><i class="far fa-user-circle"></i></>
        <button type="button" class="btn btn-outline-dark minimize_btn rounded-0 position-absolute d-flex justify-content-center align-items-center border-0" style="left:83.4%; height:40px; font-size:12px;"><i class="fal fa-window-minimize"></i></button>
        <button type="button" class="btn btn-outline-dark maximize_btn rounded-0 position-absolute d-flex justify-content-center align-items-center border-0" style="left:89%; height:40px; font-size:12px;"><i class="fal fa-window-maximize"></i></button>
      <button type="button" class="btn btn-outline-danger close_btn rounded-sm position-absolute d-flex justify-content-center align-items-center border-0" style="left:94.7%; height:40px; font-size:15px;"><i class="fal fa-times"></i></button>
      </div>

        <div class="ms_store_window_maincontent w-100 d-flex justify-content-space-between" style="height:100%;">
            <div class="ms_store_window_leftpart rounded shadow h-100 border border-top-0 border-start-0 border-bottom-0" style="width:15%;">
                <div class="ms_store_window_leftpart_uppart h-75 d-flex flex-column justify-content-evenly align-items-center">
                    <div id="home" class="card rounded border-0 d-flex justify-content-center align-items-center" style="height:70px; width:70px;"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                  </svg></div>
                    <div id="apps" class="card rounded border-0 d-flex justify-content-center align-items-center" style="height:70px; width:70px;"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-apps" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="6" height="6" rx="1" />
                    <rect x="4" y="14" width="6" height="6" rx="1" />
                    <rect x="14" y="14" width="6" height="6" rx="1" />
                    <line x1="14" y1="7" x2="20" y2="7" />
                    <line x1="17" y1="4" x2="17" y2="10" />
                  </svg></div>
                    <div id="games" class="card rounded border-0 d-flex justify-content-center align-items-center" style="height:70px; width:70px;"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-gamepad" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="2" y="6" width="20" height="12" rx="2" />
                    <path d="M6 12h4m-2 -2v4" />
                    <line x1="15" y1="11" x2="15" y2="11.01" />
                    <line x1="18" y1="13" x2="18" y2="13.01" />
                  </svg></div>
                    <div id="movies" class="card rounded border-0 d-flex justify-content-center align-items-center" style="height:70px; width:70px;"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-movie" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="8" y1="4" x2="8" y2="20" />
                    <line x1="16" y1="4" x2="16" y2="20" />
                    <line x1="4" y1="8" x2="8" y2="8" />
                    <line x1="4" y1="16" x2="8" y2="16" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="16" y1="8" x2="20" y2="8" />
                    <line x1="16" y1="16" x2="20" y2="16" />
                  </svg></div>
                </div>
                <div class="ms_store_window_leftpart_downpart h-25 d-flex flex-column justify-content-center align-items-center">
                    <div id="info" class="card rounded border-0 d-flex justify-content-center align-items-center" style="height:70px; width:70px;"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                    <polyline points="11 12 12 12 12 16 13 16" />
                  </svg></div>
                </div>
            </div>

            <div class="ms_store_window_rightpart h-100">
                <div class="ms_store_window_rightpart_uppart overflow-hidden d-flex justify-content-center align-items-center h-50">
                    <img style="height:253px;" src="https://allears.net/wp-content/uploads/2021/06/Screen-Shot-2021-06-03-at-8.37.34-PM.png" class="w-100 rounded"/>
                </div>
                
                <div class="ms_store_window_rightpart_downpart h-50">
                    <div class="ms_store_window_rightpart_downpart_adblocks_parent d-flex justify-content-evenly">
                            <div class="ms_store_window_rightpart_downpart_adblocks shadow-lg bg-light"></div>                        
                            <div class="ms_store_window_rightpart_downpart_adblocks shadow-lg bg-light"></div>
                            <div class="ms_store_window_rightpart_downpart_adblocks shadow-lg bg-light"></div>
                            <div class="ms_store_window_rightpart_downpart_adblocks shadow-lg bg-light"></div>
                            <div class="ms_store_window_rightpart_downpart_adblocks shadow-lg bg-light"></div>               
                    </div>
                </div>
            </div>
        </div>
  `);
            $(document).on("click", ".close_btn", () => {
                $(".ms_store_window").css({
                    "transform": "scale(0.5,0.5)",
                    "opacity": "0",
                    "transition": "0.5s",
                });
                $("#microsoft_store_btn").css({
                    "border-bottom": "0px solid #0EA2FF",
                    "transition": "0.1s",
                });
                setTimeout(() => {
                    $("main").children().remove(".ms_store_window");
                }, 500);
            });

            $(document).on("click", ".minimize_btn", () => {
                $(".ms_store_window").css({
                    "transform": "scale(0.5,0.5) translateY(300px)",
                    "opacity": "0",
                    "transition": "0.5s",
                });
                $("#microsoft_store_btn").css({
                    "border-bottom": "2px solid #0EA2FF",
                    "transition": "0.1s",
                });
                setTimeout(() => {
                    $("main").children().remove(".ms_store_window");
                }, 500);
            });

            $(document).on("click", ".maximize_btn", () => {
                $(".ms_store_window").toggleClass('w-100 h-100');

            });

        });
    }, 1000);

    $(".ms_store_window").show('fast');
}

export {
    store
}