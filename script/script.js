window.addEventListener("load", () => {
	const topHeader = document.getElementsByClassName("navbar-top")[0];
	const banner = document.getElementsByClassName("banner-kontainer")[0];

	const topHeaderToggle =
		document.getElementsByClassName("top-menu-toggler")[0];
	const topHeaderMobile =
		document.getElementsByClassName("navbar-top-mobile")[0];

	const btmHeaderToggle =
		document.getElementsByClassName("btm-menu-toggler")[0];
	const btmHeaderMobile =
		document.getElementsByClassName("navbar-btm-menu")[0];

    console.log(window.location.href)

    if(window.location.href === "http://127.0.0.1:5501/" || window.location.href.includes("http://127.0.0.1:5501/index.html") || window.location.href === "https://informatikaunri21arza.site/"){
        const visiIsi = document.querySelector(".isi.visi");
        const misiIsi = document.querySelector(".isi.misi");
        const tujuanIsi = document.querySelector(".isi.tujuan");
    
        const visiBtn = document.querySelector(".btn.visi");
        const misiBtn = document.querySelector(".btn.misi");
        const tujuanBtn = document.querySelector(".btn.tujuan");

        function handleVisiMisiTujuan() {
            visiIsi.classList.add("hidden");
            tujuanIsi.classList.add("hidden");
    
            visiBtn.addEventListener("click", () => {
                visiIsi.classList.remove("hidden");
                visiBtn.classList.add("active");
                misiBtn.classList.remove("active");
                tujuanBtn.classList.remove("active");
                misiIsi.classList.add("hidden");
                tujuanIsi.classList.add("hidden");
            });
    
            misiBtn.addEventListener("click", () => {
                misiIsi.classList.remove("hidden");
                misiBtn.classList.add("active");
                visiBtn.classList.remove("active");
                tujuanBtn.classList.remove("active");
                visiIsi.classList.add("hidden");
                tujuanIsi.classList.add("hidden");
            });
    
            tujuanBtn.addEventListener("click", () => {
                tujuanIsi.classList.remove("hidden");
                tujuanBtn.classList.add("active");
                visiBtn.classList.remove("active");
                misiBtn.classList.remove("active");
                misiIsi.classList.add("hidden");
                visiIsi.classList.add("hidden");
            });
        }

    	handleVisiMisiTujuan();

    }


	function handleHeader() {
		let windowWidth = 0;

		let onresize = function () {
			windowWidth = document.body.clientWidth;
			if (windowWidth < 993) {
				btmHeaderMobile.style.display = "none";
			} else {
				btmHeaderMobile.style.display = "block";
			}
		};
		window.addEventListener("resize", onresize);

		document.addEventListener("scroll", () => {
			const distanceFromTop =
				window.pageYOffset ||
				(
					document.documentElement ||
					document.body.parentNode ||
					document.body
				).scrollTop;

			// console.log(distanceFromTop)
			if (distanceFromTop > 80) {
				// banner.style.marginTop = "0";
				topHeader.style.display = "none";
			} else {
				// banner.style.marginTop = "36px";
				topHeader.style.display = "flex";
			}
		});

		onresize();

		topHeaderMobile.style.display = "none";
		topHeaderToggle.addEventListener("click", () => {
			if (topHeaderMobile.style.display === "none") {
				topHeaderMobile.style.display = "block";
			} else {
				topHeaderMobile.style.display = "none";
			}
			// console.log(topHeaderMobile.style.display);
		});

		btmHeaderToggle.addEventListener("click", () => {
			if (btmHeaderMobile.style.display === "none") {
				btmHeaderMobile.style.display = "block";
			} else {
				btmHeaderMobile.style.display = "none";
			}
			// console.log(btmHeaderMobile.style.display);
		});
	}

	

    //dropdown controller
	const parentDropdown = document.querySelectorAll(
		".navbar-btm-menu .nav-item"
	);

	parentDropdown.forEach((dropdownItem, i) => {
        // console.log(dropdownItem.lastElementChild)
		dropdownItem.addEventListener("mouseover", () => {
            dropdownItem.lastElementChild.style.display = "flex"
		});
        dropdownItem.addEventListener("mouseout", () => {
            dropdownItem.lastElementChild.style.display = "none"
		});
	});

	handleHeader();
});
