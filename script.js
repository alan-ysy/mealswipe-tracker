const mealPlanSwipeLimits = {
    "universal": {
        weekly: 999,
        daily: 999,
        premium: 999,
        grabAndGo: 14,
        lateNight: 7,
        convenience: 15,
        portable: 7,
        scholar: 2
    },
    "17-classic": {
        weekly: 17,
        daily: 4,
        premium: 17,
        grabAndGo: 14,
        lateNight: 7,
        convenience: 15,
        portable: 7,
        scholar: 2
    },
    "14-halal-kosher": {
        weekly: 14,
        daily: 4,
        premium: 14,
        grabAndGo: 14,
        lateNight: 7,
        convenience: 14,
        portable: 7,
        scholar: 2
    }
};

let usedSwipes = {
    weekly: 0,
    daily: 0,
    premium: 0,
    grabAndGo: 0,
    lateNight: 0,
    convenience: 0,
    portable: 0,
    scholar: 0
}

// Normalize swipe type values from kebab-case (e.g., "grab-and-go") to camelCase (e.g., "grabAndGo")
function normalizeSwipeKey(value) {
    return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

const mealPlanSelection = document.querySelector("#meal-plan-select");
let mealPlanType
mealPlanSelection.addEventListener("change", () => {
    mealPlanType = mealPlanSelection.value;
    alert("You selected: " + mealPlanType);
    updateRemainingSwipes();
});

const swipeTypeSelection = document.querySelector("#swipe-type-select");
let swipeType
swipeTypeSelection.addEventListener("change", () => {
    swipeType = swipeTypeSelection.value;
    alert("You selected: " + swipeType);
});

// POTENTIAL BUG: on refresh, a swipe type could be selected on the dropdown, but the dropdown value is "undefined"
const logSwipeBtn = document.querySelector("#log-swipe-btn");
logSwipeBtn.addEventListener("click", () => {
    const selectedSwipeType = swipeTypeSelection.value;
    const swipeKey = normalizeSwipeKey(selectedSwipeType);
    usedSwipes[swipeKey] += 1;
    usedSwipes.weekly += 1;
    updateRemainingSwipes();
});

const remainingWeeklySwipes = document.querySelector("#week-remaining-swipes");
const remainingDailySwipes = document.querySelector("#day-remaining-swipes");
const remainingSwipesCategories = document.querySelector("#remaining-swipes-categories");
function updateRemainingSwipes() {
    const weeklySwipesLeft = mealPlanSwipeLimits[mealPlanType]["weekly"] - usedSwipes.weekly;
    remainingWeeklySwipes.innerHTML = "Swipes Left This Week: " + weeklySwipesLeft.toString();
}