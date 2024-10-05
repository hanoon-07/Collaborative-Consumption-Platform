const categories = [
    { title: "Educational", icon: "📚", count: 150 },
    { title: "Romance", icon: "💖", count: 120 },
    { title: "Fiction", icon: "🧙‍♂️", count: 200 },
    { title: "Mystery", icon: "🕵️", count: 80 },
    { title: "Science Fiction", icon: "🚀", count: 100 },
    { title: "Biography", icon: "👤", count: 60 },
   
];

function createCategoryCard(category) {
    const card = document.createElement("div");
    card.className = "category-card";
    card.innerHTML = `
        <div class="category-icon">${category.icon}</div>
        <div class="category-title">${category.title}</div>
        <div class="book-count">${category.count} books</div>
    `;
    card.addEventListener("click", () => toggleSelection(card));
    return card;
}

function toggleSelection(card) {
    card.classList.toggle("selected");
}

function renderCategories() {
    const grid = document.getElementById("categoryGrid");
    categories.forEach(category => {
        const card = createCategoryCard(category);
        grid.appendChild(card);
    });
}

renderCategories();