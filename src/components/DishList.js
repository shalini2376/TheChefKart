import DishCard from './DishCard'

function DishList({dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients}) {
    if(!dishes.length) return <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center', height: '60vh'}}><h3>No dishes match your filters!!😣</h3></div>

    return (
        <div className="dishlist-container">
            {dishes.map(d => (
            <DishCard
                key={d.id}
                dish={d}
                onAddDish={onAddDish}
                onRemoveDish={onRemoveDish}
                isSelected={selectedDishes.includes(d.id)}
                onViewIngredients={onViewIngredients}   
            />
            ))}
        </div>
    );
}
export default DishList;