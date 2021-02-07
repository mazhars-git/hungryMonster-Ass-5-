fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
.then(res => res.json())
.then(data => displayMeals(data.meals));

const displayMeals = mealNames =>{

    const mealsDiv = document.getElementById('meals');
    for (let i = 0; i < mealNames.length; i++) {
        const mealName = mealNames[i];
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `
        <img src="${mealName.strMealThumb}">
        <h3>${mealName.strMeal}</h3>
        `;
        
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    }
}
