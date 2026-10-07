let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// only count it when the page was reached by submitting the form
if (window.location.search) {
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    // remove the form data from the url so a refresh doesn't count again
    history.replaceState(null, "", window.location.pathname);
}

document.getElementById("reviewCount").textContent = reviewCount;
