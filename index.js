let textContainer = document.querySelector(".text-container");
let moreButton = document.querySelector(".view-more-btn");

let isExpanded = false

moreButton.addEventListener("click", function () {
    if (isExpanded) {
        textContainer.style.maxHeight = '140px'
        moreButton.textContent = "View more"
    } else { 
        textContainer.style.maxHeight = "none";
        moreButton.textContent = "View less";
    }
    isExpanded = !isExpanded
});
