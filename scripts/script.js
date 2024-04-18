// Fetch JSON data
fetch('./data.json')
	.then((response) => response.json())
	.then((data) => {
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

		let list = document.getElementById('initialUl');

		// Create initial buttons for each clothing type
		for (let clothingType in data) {
			let btn = document.createElement('button');
			btn.id = clothingType + 'Btn';
			btn.innerText = clothingType;
			btn.addEventListener('click', function () {
				selectedPieces = [];
				selectedTypes = [];
				createButtons(clothingType);
			});
			// Create a list item and append the button to it
			let listItem = document.createElement('li');
			listItem.appendChild(btn);

			// Append the list item to the list
			list.appendChild(listItem);
		}

		// Get the initial buttons
		let initialButtons = list.querySelectorAll('button');

		// Add a keydown event listener to the first initial button
		initialButtons[0].addEventListener('keydown', function (event) {
			if (event.key === 'Tab' && event.shiftKey) {
				event.preventDefault();
				initialButtons[initialButtons.length - 1].focus();
			}
		});

		// Add a keydown event listener to the last initial button
		initialButtons[initialButtons.length - 1].addEventListener('keydown', function (event) {
			if (event.key === 'Tab' && !event.shiftKey) {
				event.preventDefault();
				initialButtons[0].focus();
			}
		});

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
				jackets: 'jas',
				hats: 'pet',
			};

			// Map stages to announcement texts
			let stageTexts = {};
			for (let i = 0; i < selectedTypes.length; i++) {
				let text = 'Je hebt ';
				for (let j = 0; j < i; j++) {
					text += 'een ' + clothingTypeNames[selectedTypes[j]] + ', ';
				}
				text += 'gekozen. Kies nu een ';
				stageTexts[i] = text;
			}

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
						if (selectedPieces.length === 5) {
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
							let nextType = ['shirt', 'pants', 'shoes', 'jackets', 'hats'].find((type) => !selectedTypes.includes(type));
							createButtons(nextType, clothingData[clothingPiece].matches);
						}
					});
					li.appendChild(btn);
					container.appendChild(li);
				}
			}
			// Get the new buttons
			let newButtons = container.querySelectorAll('button');

			// Shift the focus to the first new button
			newButtons[0].focus();

			// Add a keydown event listener to the first new button
			newButtons[0].addEventListener('keydown', function (event) {
				if (event.key === 'Tab' && event.shiftKey) {
					event.preventDefault();
					newButtons[newButtons.length - 1].focus();
				}
			});

			// Add a keydown event listener to the last new button
			newButtons[newButtons.length - 1].addEventListener('keydown', function (event) {
				if (event.key === 'Tab' && !event.shiftKey) {
					event.preventDefault();
					newButtons[0].focus();
				}
			});
		}
	})
	.catch((error) => console.error('Error:', error));
