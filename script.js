document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("interface-menu");
    hamburger.addEventListener("click", function () {
        const hiddenMenu = document.getElementById("hidden-menu");
        if (hiddenMenu.style.display === "none" || hiddenMenu.style.display === "") {
            hiddenMenu.style.display = "flex";
        } else {
            hiddenMenu.style.display = "none";
        }
     });
});

/*
document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 15; // Number of items per page
    let currentPage = 1;
    
    const menuContent = document.getElementById("menu-content");
    const prevPageBtn = document.getElementById("prev-page");
    const nextPageBtn = document.getElementById("next-page");
    const pageInfo = document.getElementById("page-info");

    // Mock Menu Items (Replace with actual data)
    const menuItems = Array.from({ length: 32 }, (_, i) => ({
        name: `Item ${i + 1}`,
        price: `$${(Math.random() * 10).toFixed(2)}`,
        imgSrc: "./assets/tmp.jpg"
    }));

    function renderMenu() {
        menuContent.innerHTML = ""; // Clear existing items
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const itemsToShow = menuItems.slice(start, end);

        itemsToShow.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");
            menuItem.innerHTML = `
                <img class="menu-img" src="${item.imgSrc}" alt="${item.name}">
                <span class="menu-name">${item.name}</span>
                <span class="menu-price">${item.price}</span>
            `;
            menuContent.appendChild(menuItem);
        });

        pageInfo.textContent = `Page ${currentPage}`;
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage * itemsPerPage >= menuItems.length;
    }

    prevPageBtn.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            renderMenu();
        }
    });

    nextPageBtn.addEventListener("click", function () {
        if (currentPage * itemsPerPage < menuItems.length) {
            currentPage++;
            renderMenu();
        }
    });

    renderMenu(); // Initial render
});
*/