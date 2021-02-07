document.getElementById('search').addEventListener('click', function(){
    const searchInput = document.getElementById('typeInput').value;
    displayInputDish(searchInput);

    document.getElementById('meals').innerHTML = "";
    document.getElementById('typeInput').value = "";
})

function displayInputDish(input){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = mealNames =>{
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

const displayDishDetails = meal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDishInfo(data.meals[0]))
}

const displayDishInfo = mealName =>{
    
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

