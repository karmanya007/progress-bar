(function () {
	let init = true;
	const incrementVal = 0.09;
	const start = document.querySelector('.start');
	start.addEventListener('click', startJs);
	const bar1 = document.querySelector('.bar1');
	const bar2 = document.querySelector('.bar2');
	const percentage = document.querySelector('.percentage');
	function startJs () {
		if (init) {
			bar2.style.setProperty('--width', 0);
			start.classList.add('startActive');
			init = !init;
			let width1 = 0;
			const id = setInterval(setFrame, 1);
			function setFrame () {
				// For first bar
				if (width1 >= 100) {
					clearInterval(id);
					start.classList.remove('startActive');
					init = true;
				} else {
					width1 += incrementVal;
					percentage.innerText = Math.floor(width1) + '%';
					bar1.style.width = width1 + '%';
				}
				// For second bar
				const computedStyle = getComputedStyle(bar2);
				const width2 = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
				bar2.style.setProperty('--width', width2 + incrementVal);
			}
		}
	}
})();
