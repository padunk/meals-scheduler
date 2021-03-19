export function fetchRecipes(food = "") {
    food = food.trim();

    return fetch(
        `https://api.edamam.com/search?q=${food}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
    )
        .then((res) => res.json())
        .then(({ hits }) => hits.map(({ recipe }) => recipe));
}
