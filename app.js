//even on search button--------------------------------------------------
document.getElementById('search').addEventListener('click', function () {
    const searchInput = document.getElementById('typeInput').value;

    if (searchInput == "") {
        alert('No meals found')
    } else {
        displayInputDish(searchInput);
    }
    document.getElementById('typeInput').value = "";
    document.getElementById('meals').innerHTML = "";
    document.getElementById('mealDetails').innerHTML = "";
})

//function to display input dish --------------------------------------
function displayInputDish(input) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(res => res.json())
        .then(data => displayDishes(data.meals));
}

//display meals name ---------------------------------------------------
const displayDishes = mealNames => {
    const mealsDiv = document.getElementById('meals');
    mealNames.forEach(mealName => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `
        <div onclick="displayDishDetails('${mealName.strMeal}')">
            <img src="${mealName.strMealThumb}">
            <h3>${mealName.strMeal}</h3>
        </div>
        `;
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });
}

//display dish details ----------------------------------------------
const displayDishDetails = mealName => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDishInfo(data.meals[0]))
}

//display Dish information -------------------------------------------
const displayDishInfo = mealName => {

    const mealDiv = document.getElementById('mealDetails');
    mealDiv.innerHTML = `
        <img src="${mealName.strMealThumb}">
        <h3>${mealName.strMeal}</h3>
        <h6>Ingredients:</h6>
        <ul>
        <li>${mealName.strIngredient1}</li>
        <li>${mealName.strIngredient2}</li>
        <li>${mealName.strIngredient3}</li>
        <li>${mealName.strIngredient4}</li>
        <li>${mealName.strIngredient5}</li>
        <li>${mealName.strIngredient6}</li>
        <li>${mealName.strIngredient7}</li>
        <li>${mealName.strIngredient8}</li>
        <li>${mealName.strIngredient9}</li>
        <li>${mealName.strIngredient10}</li>
        </ul>
    `;
}
//----------------------------------end --------------------------