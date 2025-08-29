import CategoryList from "./components/CategoryList";
import MealPlanSelector from "./components/MealPlanSelector";
import SwipeLogger from "./components/SwipeLogger";
import SwipeSummary from "./components/SwipeSummary";

function App() {
    return (
        <div class="main-content">
            <h1>CWRU Meal Swipe Tracker</h1>
            
            <MealPlanSelector />
            <SwipeSummary />
            <CategoryList />
            {/* TODO: CategoryItem */}
            <SwipeLogger />
        </div>
    )
}

export default App;