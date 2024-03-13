function pageChange(page) {
    if (page == "website") {
        document.getElementById("loading-container").style.display = "flex";
        document.getElementById("page-container").style.display = "none";
        loadText();
    } else if (page == "port") {
        document.getElementById("loading-container").style.display = "flex";
        document.getElementById("page-container").style.display = "none";
        loadText();
    } else if (page == "project") {
        document.getElementById("loading-container").style.display = "flex";
        document.getElementById("page-container").style.display = "none";
    }
}
