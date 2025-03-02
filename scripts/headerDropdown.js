function dropdown() {
    var dropbtn = document.querySelector(".dropbtn");
    var dropdownContent = document.querySelector(".dropdown-content");

    dropbtn.addEventListener("click", function() {
        dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
    });

    window.addEventListener("click", function(event) {
        if (!event.target.closest(".dropdown")) {
            dropdownContent.style.display = "none";
        }
    });
};

export { dropdown };
