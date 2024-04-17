// Fetch JSON data
fetch('./data.json')
	.then((response) => response.json())
	.then((data) => {
		// Get the buttons
		let shirtBtn = document.getElementById('shirtBtn');
		let pantsBtn = document.getElementById('pantsBtn');
		let shoesBtn = document.getElementById('shoesBtn');

		// Create a button to repeat the chosen pieces
		let repeatBtn = document.createElement('button');
		repeatBtn.id = 'repeatBtn';
		repeatBtn.innerText = 'Herhaal gekozen kledingstukken';
		repeatBtn.addEventListener('click', function () {
			// Get the finalAnnouncement element
			let p = document.getElementById('finalAnnouncement');

			// Set its aria-live attribute and innerText
			p.setAttribute('aria-live', 'polite');
			if (selectedPieces.length > 0) {
				p.innerText = 'Huidige kledingstukken: ' + selectedPieces.join(', ');
			} else {
				p.innerText = 'Er zijn nog geen kledingstukken gekozen.';
			}
		});

		// Add the button to the body
		document.body.appendChild(repeatBtn);

		// Function to create new buttons
		function createButtons(clothingType, matches) {
			// Get the clothing data
			let clothingData = data[clothingType];

			// Get the container to put the buttons in
			let container = document.getElementById('container');

			// Clear the container, but keep the repeatBtn
			let repeatBtn = document.getElementById('repeatBtn');
			container.innerHTML = '';
			if (repeatBtn) container.appendChild(repeatBtn);

			// Map internal type names to display names
			let clothingTypeNames = {
				shirt: 'shirt',
				pants: 'broek',
				shoes: 'schoen',
			};

			// Map stages to announcement texts
			let stageTexts = {
				0: 'Kies nu een ',
				1: 'Je hebt een ' + clothingTypeNames[selectedTypes[0]] + ' gekozen. Kies nu een ',
				2: 'Je hebt een ' + clothingTypeNames[selectedTypes[0]] + ' en een ' + clothingTypeNames[selectedTypes[1]] + ' gekozen. Kies nu een ',
			};

			// Count the number of matching pieces
			let count = Object.keys(clothingData).filter((clothingPiece) => !matches || matches.includes(clothingData[clothingPiece].id)).length;

			// Add an aria-live announcement
			let p = document.getElementById('finalAnnouncement');
			p.setAttribute('aria-live', 'polite');
			p.innerText = stageTexts[selectedTypes.length] + clothingTypeNames[clothingType] + '. Er zijn ' + count + ' ' + clothingTypeNames[clothingType] + ' keuzes beschikbaar';

			// Create a new button for each clothing piece
			for (let clothingPiece in clothingData) {
				// If matches is defined, only create buttons for matching pieces
				if (!matches || matches.includes(clothingData[clothingPiece].id)) {
					let li = document.createElement('li');
					let btn = document.createElement('button');
					btn.innerText = clothingPiece;
					btn.addEventListener('click', function () {
						// Add the selected piece and its type to the lists
						selectedPieces.push(clothingPiece);
						selectedTypes.push(clothingType);

						// If we're at the last piece, display the selected pieces
						if (selectedPieces.length === 3) {
							let p = document.getElementById('finalAnnouncement');
							p.setAttribute('aria-live', 'polite'); // Make it an aria-live region
							p.innerText = 'U heeft de volgende outfit gekozen: ' + selectedPieces.join(', ') + ". Als u hier niet blij mee bent, kunt u opnieuw beginnen door op 'opnieuw een outfit kiezen' te drukken";

							// Disable all buttons
							let buttons = document.querySelectorAll('button');
							buttons.forEach((button) => {
								if (button.id !== 'repeatBtn') {
									button.disabled = true;
								}
							});

							// Add a restart button
							let restartBtn = document.createElement('button');
							restartBtn.innerText = 'Opnieuw een outfit kiezen';
							restartBtn.id = 'restartBtn';
							restartBtn.addEventListener('click', function () {
								// Clear the container
								container.innerHTML = '';

								// Re-append the repeatBtn
								container.appendChild(repeatBtn);

								// Enable all buttons
								buttons.forEach((button) => (button.disabled = false));

								// Clear the selected pieces and types
								selectedPieces = [];
								selectedTypes = [];

								// Clear the announcement
								p.innerText = '';
								p.removeAttribute('aria-live');

								// Add an aria-live announcement
								p.setAttribute('aria-live', 'polite');
								p.innerText = 'Je bent opnieuw begonnen en kan nu nog een outfit kiezen';
							});
							container.appendChild(restartBtn);
						} else {
							// Otherwise, create the next set of buttons
							let nextType = ['shirt', 'pants', 'shoes'].find((type) => !selectedTypes.includes(type));
							createButtons(nextType, clothingData[clothingPiece].matches);
						}
					});
					li.appendChild(btn);
					container.appendChild(li);
				}
			}

			// Get the buttons
			let buttons = container.querySelectorAll('button');

			// Add a keydown event listener to the first button
			buttons[0].addEventListener('keydown', function (event) {
				if (event.key === 'Tab' && event.shiftKey) {
					event.preventDefault();
					buttons[buttons.length - 1].focus();
				}
			});

			// Add a keydown event listener to the last button
			buttons[buttons.length - 1].addEventListener('keydown', function (event) {
				if (event.key === 'Tab' && !event.shiftKey) {
					event.preventDefault();
					buttons[0].focus();
				}
			});

			// Focus on the first button
			container.querySelector('button').focus();
		}

		// Get the first set of buttons
		let firstButtons = [document.getElementById('shirtBtn'), document.getElementById('pantsBtn'), document.getElementById('shoesBtn')];

		// Add a keydown event listener to the first button
		firstButtons[0].addEventListener('keydown', function (event) {
			if (event.key === 'Tab' && event.shiftKey) {
				event.preventDefault();
				firstButtons[firstButtons.length - 1].focus();
			}
		});

		// Add a keydown event listener to the last button
		firstButtons[firstButtons.length - 1].addEventListener('keydown', function (event) {
			if (event.key === 'Tab' && !event.shiftKey) {
				event.preventDefault();
				firstButtons[0].focus();
			}
		});

		// Add event listeners to the buttons
		shirtBtn.addEventListener('click', function () {
			selectedPieces = [];
			selectedTypes = [];
			createButtons('shirt');
		});

		pantsBtn.addEventListener('click', function () {
			selectedPieces = [];
			selectedTypes = [];
			createButtons('pants');
		});

		shoesBtn.addEventListener('click', function () {
			selectedPieces = [];
			selectedTypes = [];
			createButtons('shoes');
		});

		document.addEventListener('keydown', function (event) {
			// If the pressed key is not Tab, ignore this event
			if (event.key !== 'Tab') return;

			// Get all focusable elements
			let focusableElements = Array.from(document.querySelectorAll('button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
			let firstFocusableElement = focusableElements[0];
			let lastFocusableElement = focusableElements[focusableElements.length - 1];

			// If Shift is held down and the first focusable element is focused, focus the last focusable element
			if (event.shiftKey && document.activeElement === firstFocusableElement) {
				event.preventDefault();
				lastFocusableElement.focus();
			}
			// If Shift is not held down and the last focusable element is focused, focus the first focusable element
			else if (!event.shiftKey && document.activeElement === lastFocusableElement) {
				event.preventDefault();
				firstFocusableElement.focus();
			}
		});
	})
	.catch((error) => console.error('Error:', error));
