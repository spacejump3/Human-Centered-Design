// Get the buttons
// const buttons = document.querySelectorAll('button');
const shirtBtn = document.getElementById('shirtBtn');
const pantsBtn = document.getElementById('pantsBtn');
const shoesBtn = document.getElementById('shoesBtn');

// Get the container
const clothingList = document.getElementById('clothingList');

// Add event listeners to the buttons
shirtBtn.addEventListener('click', () => createButtons('shirt'));
pantsBtn.addEventListener('click', () => createButtons('pants'));
shoesBtn.addEventListener('click', () => createButtons('shoes'));

// Add click event listeners to the buttons
shirtBtn.addEventListener('click', function () {
	clothingList.setAttribute('aria-label', 'Dit is een lijst van shirts');
	// Call your function to generate buttons
});

pantsBtn.addEventListener('click', function () {
	clothingList.setAttribute('aria-label', 'Dit is een lijst van broeken');
	// Call your function to generate buttons
});

shoesBtn.addEventListener('click', function () {
	clothingList.setAttribute('aria-label', 'Dit is een lijst van schoenen');
	// Call your function to generate buttons
});

// semi working thing
function createButtons(category) {
	// Fetch the data from the JSON file
	fetch('data.json')
		.then((response) => response.json())
		.then((data) => {
			// Clear the clothing list
			clothingList.innerHTML = '';

			// Get the category from the data
			const items = data[category];

			let firstButton = null;

			// Create a button and a li for each item in the category
			for (let item in items) {
				const btn = document.createElement('button');
				btn.textContent = item;

				// Add an event listener to the button
				btn.addEventListener('click', () => {
					// Clear the clothing list
					clothingList.innerHTML = '';

					// Get the matches of the item
					const matches = items[item].matches;

					// Get the ids of all shirts, pants, and shoes
					const shirts = Object.values(data.shirt).map((item) => item.id);
					const pants = Object.values(data.pants).map((item) => item.id);
					const shoes = Object.values(data.shoes).map((item) => item.id);

					// Create a list of all possible combinations of shirts, pants, and shoes
					const combinations = [];
					for (let shirt of shirts) {
						for (let pant of pants) {
							for (let shoe of shoes) {
								// Get the names corresponding to the ids
								const shirtName = Object.keys(data.shirt).find((key) => data.shirt[key].id === shirt);
								const pantName = Object.keys(data.pants).find((key) => data.pants[key].id === pant);
								const shoeName = Object.keys(data.shoes).find((key) => data.shoes[key].id === shoe);

								combinations.push([shirtName, pantName, shoeName]);
							}
						}
					}

					// For each combination, create a new ul element and add li elements for each item in the combination
					for (let combination of combinations) {
						const ul = document.createElement('ul');
						for (let item of combination) {
							const li = document.createElement('li');
							li.textContent = item;
							li.setAttribute('tabindex', '0');
							ul.appendChild(li);
						}
						clothingList.appendChild(ul);
					}
				});

				const li = document.createElement('li');
				li.appendChild(btn);

				clothingList.appendChild(li);
				if (!firstButton) {
					firstButton = btn;
				}
			}
			if (firstButton) {
				firstButton.focus();
			}
		});
}
