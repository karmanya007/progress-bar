(function () {
	//const pkg_size = 100; // In MB
	//const net_speed = 1000; // In Mb/s
	let init = true;
	const start = document.querySelector('.start');
	start.addEventListener('click', startJs);
	const bar = document.querySelector('.bar');
	const percentage = document.querySelector('.percentage');
	function startJs () {
		if (init) {
			start.classList.add('startActive');
			init = !init;
			let width = 0;
			const id = setInterval(setFrame, /* pkg_size / (net_speed / 8) * 1000 / 100 */ 1);
			function setFrame () {
				if (width >= 100) {
					clearInterval(id);
					start.classList.remove('startActive');
					init = true;
				} else {
					width += 0.09;
					percentage.innerText = Math.floor(width) + '%';
					bar.style.width = width + '%';
				}
			}
		}
	}
})();
