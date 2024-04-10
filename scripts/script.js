// Fetch JSON data
fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        // Get the buttons
        let shirtBtn = document.getElementById('shirtBtn');
        let pantsBtn = document.getElementById('pantsBtn');
        let shoesBtn = document.getElementById('shoesBtn');

        // Keep track of the selected clothing pieces and their types
        let selectedPieces = [];
        let selectedTypes = [];

        // Function to create new buttons
        function createButtons(clothingType, matches) {
            // Get the clothing data
            let clothingData = data[clothingType];

            // Get the container to put the buttons in
            let container = document.getElementById('container');

            // Clear the container
            container.innerHTML = '';

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
                            let p = document.createElement('p');
                            p.innerText = 'U heeft de volgende outfit gekozen: ' + selectedPieces.join(', ') + '. Als u hier niet blij mee bent, kunt u opnieuw beginnen door op de volgende knop te drukken';
                            container.appendChild(p);

                            // Disable all buttons
                            let buttons = document.querySelectorAll('button');
                            buttons.forEach((button) => (button.disabled = true));

                            // Add a restart button
                            let restartBtn = document.createElement('button');
                            restartBtn.innerText = 'Opnieuw een outfit kiezen';
                            restartBtn.addEventListener('click', function () {
                                // Clear the container
                                container.innerHTML = '';

                                // Enable all buttons
                                buttons.forEach((button) => (button.disabled = false));

                                // Clear the selected pieces and types
                                selectedPieces = [];
                                selectedTypes = [];
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

            // Focus on the first button
            container.querySelector('button').focus();
        }

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
    })
    .catch((error) => console.error('Error:', error));
