$(document).ready(function () {
	// Progress bar
	let containerA = document.getElementById("circleA");
	let circleA = new ProgressBar.Circle(containerA, {
		color: "#ff9513",
		strokeWidth: 8,
		duration: 1400,
		from: { color: "#ffffff" },
		to: { color: "#ff9513" },
		step: function (state, circle) {
			circle.path.setAttribute("stroke", state.color);
			let value = Math.round(circle.value() * 60);
			circle.setText(value);
		},
	});

	let containerB = document.getElementById("circleB");
	let circleB = new ProgressBar.Circle(containerB, {
		color: "#ff9513",
		strokeWidth: 8,
		duration: 1600,
		from: { color: "#ffffff" },
		to: { color: "#ff9513" },
		step: function (state, circle) {
			circle.path.setAttribute("stroke", state.color);
			let value = Math.round(circle.value() * 254);
			circle.setText(value);
		},
	});

	let containerC = document.getElementById("circleC");
	let circleC = new ProgressBar.Circle(containerC, {
		color: "#ff9513",
		strokeWidth: 8,
		duration: 2000,
		from: { color: "#ffffff" },
		to: { color: "#ff9513" },
		step: function (state, circle) {
			circle.path.setAttribute("stroke", state.color);
			let value = Math.round(circle.value() * 32);
			circle.setText(value);
		},
	});

	let containerD = document.getElementById("circleD");
	let circleD = new ProgressBar.Circle(containerD, {
		color: "#ff9513",
		strokeWidth: 8,
		duration: 2200,
		from: { color: "#ffffff" },
		to: { color: "#ff9513" },
		step: function (state, circle) {
			circle.path.setAttribute("stroke", state.color);
			let value = Math.round(circle.value() * 5243);
			circle.setText(value);
		},
	});

	// Iniciando o loader quando o usuario chega no elemento
	let dataAreaOffset = $("#data-area").offset();
	let stop = 0;

	$(window).scroll(function (e) {
		let scroll = $(window).scrollTop();

		if (scroll > dataAreaOffset.top - 500 && stop == 0) {
			circleA.animate(1.0);
			circleB.animate(1.0);
			circleC.animate(1.0);
			circleD.animate(1.0);

			stop = 1;
		}
	});

	let cards = document.querySelectorAll(".card");
	let btns = document.querySelectorAll(".portifolio-btn");

	btns.forEach((btn) => {
		btn.addEventListener("click", () => {
			let filter = btn.getAttribute("id");

			cards.forEach((card) => {
				let cardFilter = card.getAttribute("id");

				if (filter === cardFilter || filter === "all") {
					card.classList.remove("hidden");
				} else {
					card.classList.add("hidden");
				}
			});
		});
	});

	

});
