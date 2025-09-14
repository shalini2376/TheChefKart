import vegIcon from '../assets/veg.png';
import nonVegIcon from '../assets/nonveg.png';
import ingredientIcon from '../assets/ingredients-icon.png'

function DishCard({dish, onAddDish, onRemoveDish, isSelected, onViewIngredients}){    
    const isVeg = String(dish.type || '').toUpperCase() === 'VEG';
    const iconSrc = isVeg ? vegIcon : nonVegIcon;


    return (
        <div className="dishcard-container">
            <img 
                className="dishcard-img"
                src={dish.image} 
                alt={dish.name} 
            />
            <div className="dishcard-description">
                <div className="dishcard-description-inner" style={{display: 'flex', alignItems: 'center', gap: 5}}>
                    <h1>{dish.name}</h1>
                    <img 
                        className='dish-icons'
                        src={iconSrc}
                        alt={isVeg ? 'Vegetarian' : 'Non-vegetarian'}
                    />
                </div>
                <p className="dish-desc">{dish.description}</p>
                <div className="add-remove-btn-container">
                    {!isSelected ? (
                        <button className='add-remove-btn' onClick={() => onAddDish(dish.id)}>
                            Add +
                        </button>
                        ) : (
                        <button className='add-remove-btn' onClick={() => onRemoveDish(dish.id)}>
                            Remove - 
                        </button>
                    )}
                </div>
                    <button className="ingredients-btn"
                        onClick = {() => {onViewIngredients(dish)}} 
                    >
                        <img className="ingredients-icon" src={ingredientIcon} alt="ingredients" />Ingredients
                    </button>
            </div>
        </div>
    )
}
export default DishCard;