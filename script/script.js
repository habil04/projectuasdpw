const topHeader = document.getElementsByClassName("navbar-top")[0];
const banner = document.getElementsByClassName("banner-kontainer")[0];

const topHeaderToggle = document.getElementsByClassName("top-menu-toggler")[0];
const topHeaderMobile = document.getElementsByClassName("navbar-top-mobile")[0];

const btmHeaderToggle = document.getElementsByClassName("btm-menu-toggler")[0];
const btmHeaderMobile = document.getElementsByClassName("navbar-btm-menu")[0];

const visiIsi = document.querySelector(".isi.visi")
const misiIsi = document.querySelector(".isi.misi")
const tujuanIsi = document.querySelector(".isi.tujuan")

const visiBtn = document.querySelector(".btn.visi")
const misiBtn = document.querySelector(".btn.misi")
const tujuanBtn = document.querySelector(".btn.tujuan")

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

    onresize()

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

function handleVisiMisiTujuan() {
    misiIsi.classList.add("hidden")
    tujuanIsi.classList.add("hidden")

    visiBtn.addEventListener("click", () => {
        visiIsi.classList.remove("hidden")
        misiIsi.classList.add("hidden")
        tujuanIsi.classList.add("hidden")
    })

    misiBtn.addEventListener("click", () => {
        misiIsi.classList.remove("hidden")
        visiIsi.classList.add("hidden")
        tujuanIsi.classList.add("hidden")
    })

    tujuanBtn.addEventListener("click", () => {
        tujuanIsi.classList.remove("hidden")
        misiIsi.classList.add("hidden")
        visiIsi.classList.add("hidden")
    })
}

handleVisiMisiTujuan()
handleHeader();
