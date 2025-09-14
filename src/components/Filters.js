import vegIcon from '../assets/veg.png';
import nonVegIcon from '../assets/nonveg.png';

function Filters({categories, activeCategory, onCategoryChange, searchTerm, onSearchChange, vegOnly, onVegOnlyChange, nonVegOnly, onNonVegOnlyChange, selectedDishes, selectedCountByCategory }){
    return (
        <>
            <div className="filter-wrapper">
                <div className="category-tab-container">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => onCategoryChange(cat)}
                            style={{
                                padding: '8px 12px',
                                borderRadius: 6,
                                border: activeCategory === cat ? '2px solid #FF9900' : '1px solid #ccc',
                                background: activeCategory === cat ? '#FF9900' : '#fff',
                                color: activeCategory === cat ? '#fff' : '#000',
                                fontWeight: activeCategory === cat ? '600' : '400',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            {cat} {cat === 'ALL' ? selectedDishes.length : (selectedCountByCategory[cat] || 0)}
                        </button>
                    ))}
                </div>
                <div className="search-input-container">
                    <input 
                        className="search-dishes-field"
                        type="text"
                        placeholder="Search dishes..."
                        value={searchTerm}
                        onChange={e => onSearchChange(e.target.value)}
                    />
                    <button
                        className={`circle-btn ${vegOnly ? 'active' : ''}`}
                        onClick={onVegOnlyChange}
                        type="button"
                    >
                        <img 
                            src={vegIcon}
                            alt="veg"
                            style={{width: 16, height: 16}}
                        />
                    </button>
                    <button
                        className={`circle-btn ${nonVegOnly ? 'active' : ''}`}
                        onClick={onNonVegOnlyChange}
                        type="button"
                    >
                        <img  
                            src={nonVegIcon}
                            alt="nonveg"
                            style={{width: 16, height: 16}}
                        />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Filters;