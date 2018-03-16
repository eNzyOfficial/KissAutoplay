chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			const autoplay = (player) => player.addEventListener('ended', () => {
				window.localStorage.setItem('autoPlayingBefore', location.href);
				document.getElementById('btnNext').click();
			}, false);

			const is_playing = () => {
				const previous = window.localStorage.getItem('autoPlayingBefore');
				window.localStorage.removeItem('autoPlayingBefore');

				const [previous_btn] = document.getElementsByClassName('preev');

				return previous_btn.href === previous;
			};

			const fullscreen = (player) => {
			
			console.log("asd");
				const offlight = document.getElementById('offlight');
				offlight.style.setProperty('z-index', '0');
				offlight.click();
				
				player.style.setProperty('position', 'fixed');
				player.style.setProperty('object-fit', 'fill');
				player.style.setProperty('background', 'black');
				document.body.style.setProperty('overflow', 'hidden');

				let exited = false;
				
				document.addEventListener('keyup', ({keyCode}) => {
					if (keyCode === 27 && !exited) {
						offlight.style.setProperty('z-index', '999999');
						offlight.click();
						
						player.style.setProperty('position', '');
						player.style.setProperty('object-fit', 'contain');
						player.style.setProperty('background', 'transparent');
						document.body.style.setProperty('overflow', 'auto');
						exited = true;
					}
				});
			};
			
			const init = () => {
				let player = document.getElementById('player_html5_html5_api');

				if (player) {
					autoplay(player);
					fullscreen(player);
				}			
			}

			setTimeout(() => {
				init();
			}, 3000);
		}
	}, 10);
});