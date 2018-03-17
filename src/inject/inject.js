chrome.extension.sendMessage({}, function(response) {
	let readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			const offlight = document.getElementById('offlight');
			let player = document.getElementById('player_html5_html5_api');
			let exited_fullscreen = false;
			
			const default_style = () => {
				offlight.style.setProperty('z-index', '999999');
				offlight.click();
				
				player.style.setProperty('position', '');
				player.style.setProperty('object-fit', 'contain');
				player.style.setProperty('background', 'transparent');
				player.style.setProperty('z-index', '0');
				player.removeAttribute("controls");

				document.body.style.setProperty('overflow', 'auto');

				exited_fullscreen = true;
			}

			const fullscreen_style = () => {
				offlight.style.setProperty('z-index', '0');
				offlight.click();
				
				player.style.setProperty('position', 'fixed');
				player.style.setProperty('background', 'black');
				player.style.setProperty('z-index', '999999');
				player.setAttribute("controls","controls");

				chrome.storage.sync.get('kiss.settings.fullscreen_stretch', function(val) {
					if (val['kiss.settings.fullscreen_stretch']) {
						player.style.setProperty('object-fit', 'fill');
					}
					else {
						player.style.setProperty('object-fit', 'contain');
					}
				});

				document.body.style.setProperty('overflow', 'hidden');

				exited_fullscreen = false;
			}

			const set_fullscreen = () => {
				chrome.storage.sync.get('kiss.settings.fullscreen', function(val) {
					if (val['kiss.settings.fullscreen']) {
						fullscreen_style();
					}
					else {
						default_style();
					}
				});
			}

			const is_playing = () => {
				const previous = window.localStorage.getItem('autoPlayingBefore');
				window.localStorage.removeItem('autoPlayingBefore');

				const [previous_btn] = document.getElementsByClassName('preev');

				return previous_btn.href === previous;
			};

			const autoplay = () => {
				chrome.storage.sync.get('kiss.settings.stutter_fix', function(val) {
					let fix_stutter = val['kiss.settings.stutter_fix'];

					player.addEventListener('ended', () => {
						let loc = location.href;
						loc += (fix_stutter) ? '&pfail=1' : '';
						window.localStorage.setItem('autoPlayingBefore', loc);

						loc = document.getElementsByClassName('nexxt')[0].href;
						loc += (fix_stutter) ? '&pfail=1' : '';
						window.location.href = loc;
					}, false);
				});
			}
			
			const volume = () => {
				chrome.storage.sync.get('kiss.settings.save_volume', function(val) {
					if (val['kiss.settings.save_volume']) {
						player.volume = (window.localStorage.getItem('volume') || 1.0);
					}
				});
			}

			const init = () => {
				document.addEventListener('keyup', ({keyCode}) => {
					if (keyCode === 27) {
						exited_fullscreen ? fullscreen_style() : default_style();
					}
				});

				player = document.getElementById('player_html5_html5_api');
				
				if (player) {
					player.addEventListener('volumechange', () => {
						window.localStorage.setItem('volume', player.volume);
					});

					volume();
					set_fullscreen();
					autoplay();
				}
			}

			setTimeout(() => {
				init();
			}, 1000);
		}
	}, 10);
});