// script.js

// 2.1 DOM-Elemente für den Rezept-Generator abrufen
const generateRecipeBtn = document.getElementById('generateRecipeBtn');
const recipeList = document.getElementById('recipeList');
const recipeTitle = document.getElementById('recipeTitle');
const messageDiv = document.getElementById('message');

console.log("DOM-Elemente erfolgreich abgerufen.");

// 2.2 Beispiel-Array von Rezepten
const recipes = [
  {
    name: "Sommerlicher Salat",
    ingredients: [
      "200g gemischter Salat",
      "100g Kirschtomaten",
      "1 Gurke",
      "50g Feta-Käse",
      "2 EL Olivenöl",
      "1 EL Balsamico-Essig",
      "Salz, Pfeffer"
    ]
  },
  {
    name: "Pasta Pesto",
    ingredients: [
      "250g Spaghetti",
      "100g Basilikumpesto",
      "50g Parmesan",
      "Knoblauchzehe",
      "Pinienkerne",
      "Olivenöl"
    ]
  },
  {
    name: "Gemüse-Curry",
    ingredients: [
      "1 Zwiebel",
      "2 Karotten",
      "1 Zucchini",
      "200g Kichererbsen",
      "400ml Kokosmilch",
      "2 EL Currypulver",
      "Reis als Beilage"
    ]
  },
  {
    name: "Schoko-Muffins",
    ingredients: [
      "150g Mehl",
      "100g Zucker",
      "2 EL Kakao",
      "1 TL Backpulver",
      "1 Prise Salz",
      "1 Ei",
      "100ml Milch",
      "50g geschmolzene Butter",
      "50g Schokostückchen"
    ]
  },
  {
    name: "Frucht-Smoothie",
    ingredients: [
      "1 Banane",
      "100g Beeren (gefroren)",
      "150ml Mandelmilch",
      "1 EL Chiasamen",
      "Optional: Honig zum Süßen"
    ]
  }
];
console.log("Rezeptdaten geladen. Anzahl der Rezepte:", recipes.length);

// 2.3 Hauptfunktion zum Generieren eines zufälligen Rezepts
function generateRandomRecipe() {
  // 2.5 Bestehende Zutatenliste leeren
  recipeList.innerHTML = '';

  // 2.4.1 Zufällig einen Index auswählen
  const randomIndex = Math.floor(Math.random() * recipes.length);

  // 2.4.2 Das Rezept am zufälligen Index auswählen
  const selectedRecipe = recipes[randomIndex];

  console.log("Zufälliges Rezept ausgewählt:", selectedRecipe.name);

  // 2.6 Rezeptnamen im H3-Tag aktualisieren
  recipeTitle.textContent = `Zutaten für: ${selectedRecipe.name}`;
  console.log(`Titel aktualisiert zu: "Zutaten für: ${selectedRecipe.name}"`);

  // 2.7 Zutaten dynamisch zur Liste hinzufügen
  selectedRecipe.ingredients.forEach(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;

    // 2.8 Bedingte Style-Manipulation: Bestimmte Zutaten hervorheben
    if (ingredient.toLowerCase().includes("öl") ||
        ingredient.toLowerCase().includes("butter") ||
        ingredient.toLowerCase().includes("milch")) {
      listItem.classList.add('highlight-ingredient');
      console.log(`Zutat hervorgehoben: ${ingredient}`);
    }

    recipeList.appendChild(listItem);
    console.log(`Zutat hinzugefügt: ${ingredient}`);
  });

  // 2.9 Nachricht anzeigen, dass ein neues Rezept generiert wurde
  if (messageDiv) {
    messageDiv.innerHTML = `<p>Neues Rezept "<b>${selectedRecipe.name}</b>" generiert!</p>`;
    messageDiv.style.backgroundColor = '#e1f5fe'; // Hellblau
    messageDiv.style.borderColor = '#42a5f5'; // Blau
    console.log(`Statusmeldung: Rezept "${selectedRecipe.name}" generiert.`);
  }
}

// 2.10 Event Listener für den "Rezept generieren"-Button
generateRecipeBtn.addEventListener('click', generateRandomRecipe);
console.log("Event Listener für Button hinzugefügt.");

// 2.11 Initiales Rezept beim Laden der Seite generieren
generateRandomRecipe();
console.log("Initiales Rezept generiert beim Laden der Seite.");