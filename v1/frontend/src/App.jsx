import CategoryList from "./components/CategoryList";
import MealPlanSelector from "./components/MealPlanSelector";
import SwipeSummary from "./components/SwipeSummary";

function App() {
    return (
        <div class="main-content">
            <h1>CWRU Meal Swipe Tracker</h1>
            
            <MealPlanSelector />
            <SwipeSummary />
            <CategoryList />
            {/* TODO: CategoryItem */}
            {/* SwipeLogger - swipe type select + Log Swipe button */}
        </div>
    )
}

export default App;