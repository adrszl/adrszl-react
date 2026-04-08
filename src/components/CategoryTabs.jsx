const CategoryTabs = ({ categories, activeCategory, setActiveCategory }) => {
    return (
        <div className="skill-categories">
            {categories.map(cat => (
                <button
                    key={cat}
                    className={`category-tab ${activeCategory === cat ? "active" : ""}`}
                    onClick={() =>
                        setActiveCategory(prev => (prev === cat ? "none" : cat))
                    }
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default CategoryTabs;