chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			const autoplay = (player) => player.addEventListener('ended', () => {
				window.localStorage.setItem('autoPlayingBefore', location.href + "&pfail=1");
				window.location.href = document.getElementsByClassName('nexxt')[0].href + "&pfail=1";
			}, false);

			const is_playing = () => {
				const previous = window.localStorage.getItem('autoPlayingBefore');
				window.localStorage.removeItem('autoPlayingBefore');

				const [previous_btn] = document.getElementsByClassName('preev');

				return previous_btn.href === previous;
			};

			const fullscreen = (player) => {
				/*
					TODO: Implement true fullscreen
					
					player.webkitRequestFullscreen();
				*/
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
					
			const volume_handler = (player) => player.addEventListener('volumechange', () => {
				window.localStorage.setItem('volume', player.volume);
			});
			
			const volume = (player) => {
				player.volume = (window.localStorage.getItem('volume') || 1.0);
			}
			
			const init = () => {
				let player = document.getElementById('player_html5_html5_api');

				if (player) {
					volume_handler(player);
					volume(player);
					console.log(player.volume);
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