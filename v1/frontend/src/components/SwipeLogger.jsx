function SwipeLogger() {
    return (
        <>
            <label for="swipe-type-select">Swipe Type:</label>
            <select name="swipe-type" id="swipe-type-select">
                <option value="" disabled selected>--Select a swipe type--</option>
                <option value="premium">Premium Swipe</option>
                <option value="grab-and-go">Grab & Go Swipe</option>
                <option value="late-night">Late Night Swipe</option>
                <option value="convenience">Convenience Swipe</option>
                <option value="portable">Portable Swipe</option>
                <option value="scholar">Scholar Swipe</option>
            </select>
            <button id="log-swipe-btn">Log Swipe</button>
        </>
    );
}

export default SwipeLogger;