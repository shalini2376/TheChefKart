import { useState } from 'react';
import { dishes } from './data/mockDishes';
import Header from './components/Header'
import Filters from './components/Filters'
import DishList from './components/DishList'
import IngredientModal from './components/IngredientModal'
import './App.css';

function App() {

  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [currentDish, setCurrentDish] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['ALL', ...Array.from(new Set(dishes.map(d => d.mealType)))];

  const term = String(searchTerm || '').trim().toLowerCase();

  const filteredDishes = dishes.filter(d => {
    if (selectedCategory !== 'ALL' && d.mealType !== selectedCategory) return false;
    if (vegOnly && String(d.type || '').toUpperCase() !== 'VEG') return false;
    if (nonVegOnly && String(d.type || '').toUpperCase() !== 'NON-VEG') return false;
    if (term) {
      const hay = `${d.name || ''} ${d.description || ''}`.toLowerCase();
      if (!hay.includes(term)) return false;
    }
    return true;
  });

  const selectedCountByCategory = (() => {
  const map = {};                  // { "MAIN COURSE": 2, "STARTER": 1, ... }
  const selectedSet = new Set(selectedDishes); // quick lookup

  for (let i = 0; i < dishes.length; i++) {
    const d = dishes[i];
    if (!selectedSet.has(d.id)) continue; // skip non-selected
    const key = d.mealType || 'UNKNOWN';
    map[key] = (map[key] || 0) + 1;
  }

  return map;
})();

  // Handlers (filters)
  const handleCategoryChange = (cat) => setSelectedCategory(cat);
  const handleSearchChange = (value) => setSearchTerm(value);
  const handleVegOnlyChange = () => {
      setVegOnly(prev => !prev);   // toggle Veg
      setNonVegOnly(false);        // ensure Non-Veg off
};
  const handleNonVegOnlyChange = () => {
      setNonVegOnly(prev => !prev); // toggle Non-Veg
      setVegOnly(false);            // ensure Veg off
};

  // Handlers (Dishlist)
  const handleAddDish = (id) => {
    setSelectedDishes(prev => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleRemoveDish = (id) => {
    setSelectedDishes(prev => prev.filter(x => x !== id));
  };

  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
    // console.log('clicked dish (param):', dish);
  };

  const handleCloseModal = () => {
    setCurrentDish(null);
    setIsModalOpen(false);
  }

  return (
    <>
      <Header />
      <Filters
        categories={categories}
        activeCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        vegOnly={vegOnly}
        nonVegOnly={nonVegOnly}
        onVegOnlyChange={handleVegOnlyChange}
        onNonVegOnlyChange={handleNonVegOnlyChange}
        selectedCountByCategory={selectedCountByCategory}
        selectedDishes={selectedDishes}
      />
      <DishList
        dishes={filteredDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        selectedDishes={selectedDishes}
        onViewIngredients={handleViewIngredients}
      />
      <IngredientModal 
        dish={currentDish} 
        isModalOpen={isModalOpen}
        onClose={handleCloseModal} 
      />
      <footer className="app-footer">
        <div className='app-footer-inner'>
          <strong>Total dish selected: {selectedDishes.length}</strong>
        </div>
      </footer>
    </>
  );
}

export default App;
