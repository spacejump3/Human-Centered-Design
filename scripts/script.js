const data = {
    "shirt": {
        "shirt-blue": {
            "id": "s-blue",
            "matches": ["p-white", "p-black", "sh-white", "sh-black"]
        },

        "shirt-red": {
            "id": "s-red",
            "matches": ["p-white", "p-black", "p-blue", "sh-white", "sh-black"]
        },

        "shirt-yellow": {
            "id": "s-yellow",
            "matches": ["p-blue", "p-black", "sh-black", "sh-white"]
        },

        "shirt-white": {
            "id": "s-white",
            "matches": ["p-blue", "p-black", "p-green", "sh-black", "sh-white"]
        }
    },

    "pants": {
        "pants-blue": {
            "id": "p-blue",
            "matches": ["s-white", "s-red", "s-yellow", "sh-black", "sh-white"]
        },

        "pants-green": {
            "id": "p-green",
            "matches": ["s-white", "sh-black", "sh-white"]
        },

        "pants-white": {
            "id": "p-white",
            "matches": ["s-blue", "s-red", "sh-black"]
        },

        "pants-black": {
            "id": "p-black",
            "matches": ["s-blue", "s-white", "s-yellow", "s-red", "sh-white"]
        }
    },

    "shoes": {
        "shoes-white": {
            "id": "sh-white",
            "matches": ["s-blue", "s-white", "s-yellow", "s-red", "p-blue", "p-green", "p-black"]
        },

        "shoes-black": {
            "id": "sh-black",
            "matches": ["s-blue", "s-white", "s-yellow", "s-red", "p-blue", "p-green", "p-white"]
        }
    }
}

document.getElementById("shirtBtn").addEventListener("click", function() {
    console.log("Shirt button clicked");
    displayVariants("shirt");
  });
  
  document.getElementById("pantsBtn").addEventListener("click", function() {
    console.log("Pants button clicked");
    displayVariants("pants");
  });
  
  document.getElementById("shoesBtn").addEventListener("click", function() {
    console.log("Shoes button clicked");
    displayVariants("shoes");
  });
  
  function displayVariants(category) {
    console.log("Displaying variants for category:", category);
    const variantsList = document.getElementById("variantsList");
    variantsList.innerHTML = ''; // Clear previous content
  
    const categoryData = data[category];
    Object.keys(categoryData).forEach(variant => {
      const button = document.createElement("button");
      button.textContent = variant;
      button.addEventListener("click", function() {
        console.log("Variant button clicked:", variant);
        displayPossiblePairs(categoryData[variant]);
      });
      variantsList.appendChild(button);
    });
  }
  
  function displayPossiblePairs(variant) {
    console.log("Displaying possible pairs for variant:", variant);
    const pairsList = document.getElementById("pairsList");
    pairsList.innerHTML = ''; // Clear previous content
  
    const pairs = [];
  
    // Helper function to check if an item is in the pairs array
    function isInPairs(item) {
      return pairs.some(pair => pair.includes(item));
    }
  
    // Helper function to check if all items in a match are in the pairs array
    function matchIsInPairs(match) {
      return match.every(item => isInPairs(item));
    }
  
    // Generate pairs based on matches
    variant.matches.forEach(match => {
      if (!isInPairs(variant.id)) {
        const matchedItems = match.split('-');
        if (matchIsInPairs(matchedItems)) {
          pairs.push(matchedItems);
        }
      }
    });
  
    // Display pairs
    pairs.forEach(pair => {
      const listItem = document.createElement("li");
      listItem.textContent = pair.join(', ');
      pairsList.appendChild(listItem);
    });
  }
