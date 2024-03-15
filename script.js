// Page Change [FUNCTION] Changes the page
// page [VARIABLE] Recieves input to verify which page to change to
function pageChange(page) {
    if (page == "website") {
        document.getElementById("loading-container").style.display = "flex";
        document.getElementById("page-container").style.display = "none";
    } else if (page == "port") {
        document.getElementById("loading-container").style.display = "flex";
        document.getElementById("page-container").style.display = "none";
        setTimeout(function() {
            window.location.assign("/portfolio/portfolio.html");
        }, 2000);
    } else if (page == "project") {
        document.getElementById("loading-container").style.display = "flex";
        document.getElementById("page-container").style.display = "none";
    }
}