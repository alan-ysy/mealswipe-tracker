function MealPlanSelector() {
    return (
        <>
            <label for="meal-plan-select">Meal Plan:</label>
            <select name="meal-plans" id="meal-plan-select">
                <option value="" disabled selected>--Select your meal plan--</option>
                <option value="universal">Universal Plan</option>
                <option value="17-classic">17 Classic Plan</option>
                <option value="14-halal-kosher">14 Halal/Kosher Plan</option>
            </select>
        </>
    );
}

export default MealPlanSelector;