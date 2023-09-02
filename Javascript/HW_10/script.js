document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs-title");
    const tabContents = document.querySelectorAll(".tab-content");

    tabContents.forEach(content => {
        content.style.display = "none";
    });
    tabs.forEach(tab => {
        tab.classList.remove("active");
    })

    tabs.forEach(tab => {
    tab.addEventListener("click", () => {
    
        tabContents.forEach((content) => {
            content.style.display = "none";
        });

        tabs.forEach(t => {
            t.classList.remove("active");
        });

        const idElement = tab.getAttribute("data-target");
    
        const targetContent = document.getElementById(idElement);
        targetContent.style.display = "block";

        tab.classList.add("active");
    });
});
})


// Або


// const tabs = document.querySelectorAll(".tabs-title");
// const tabContents = document.querySelectorAll(".tab-content");

// tabs.forEach(tab => {
//     tab.addEventListener("click", () => {
    
//         tabContents.forEach((content) => {
//             content.style.display = "none";
//         });

//         tabs.forEach(t => {
//             t.classList.remove("active");
//         });

//         const idElement = tab.getAttribute("data-target");
    
//         const targetContent = document.getElementById(idElement);
//         targetContent.style.display = "block";

//         tab.classList.add("active");
//     });
// });

























