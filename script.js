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

const mealPlanSelection = document.querySelector("#meal-plan-select");
let mealPlanType
mealPlanSelection.addEventListener("change", () => {
    mealPlanType = mealPlanSelection.value;
    updateRemainingSwipes();
});

const swipeTypeSelection = document.querySelector("#swipe-type-select");
let swipeType
swipeTypeSelection.addEventListener("change", () => {
    swipeType = swipeTypeSelection.value;
});

// POTENTIAL BUG: on refresh, a swipe type could be selected on the dropdown, but the dropdown value is "undefined"
const logSwipeBtn = document.querySelector("#log-swipe-btn");
logSwipeBtn.addEventListener("click", () => {
    const swipeType = kebabToCamel(swipeTypeSelection.value);
    usedSwipes.weekly += 1;
    usedSwipes.daily += 1;
    usedSwipes[swipeType] += 1;
    updateRemainingSwipes();
});

const weeklyLeftElem = document.querySelector("#week-remaining-swipes");
const dailyLeftElem = document.querySelector("#day-remaining-swipes");
const categoryListElem = document.querySelector("#remaining-swipes-categories");
function updateRemainingSwipes() {
    weeklyLeft = mealPlanSwipeLimits[mealPlanType]["weekly"] - usedSwipes["weekly"];
    weeklyLeftElem.innerHTML = "Swipes Left This Week: " + weeklyLeft;

    dailyLeft = mealPlanSwipeLimits[mealPlanType]["daily"] - usedSwipes["daily"];
    dailyLeftElem.innerHTML = "Swipes Left Today: " + dailyLeft;

    const limits = mealPlanSwipeLimits[mealPlanType]
    Object.entries(limits)
		.filter(([k]) => k !== "weekly" && k !== "daily")       // Filter out weekly and daily since we already updated them
		.forEach(([k, limit]) => {
			const remaining = limit - usedSwipes[k];
			const li = document.getElementById(camelToKebab(k));
			if (li)
                // Use text before colon because it's easier to use the existing text
                li.textContent = li.textContent.split(":")[0] + ": " + remaining;
		});
}

function kebabToCamel(value) {
    return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function camelToKebab(value) {
    return value.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
}