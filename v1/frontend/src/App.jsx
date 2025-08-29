import MealPlanSelector from "./components/MealPlanSelector";

function App() {
    return (
        <div class="main-content">
            <h1>CWRU Meal Swipe Tracker</h1>
            
            <MealPlanSelector />
            {/* SwipeSummary - weekly/daily remaining swipes */}
            {/* CategoryList - remaining swipes by category */}
                {/* CategoryItem */}
            {/* SwipeLogger - swipe type select + Log Swipe button */}
        </div>
    )
}

export default App;