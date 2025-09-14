
function IngredientModal({ dish, isModalOpen, onClose }) {
  if (!isModalOpen || !dish) return null; // nothing to show if no dish selected

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content">
        <header className="modal-header">
          <h2>{dish.name} — Ingredients</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </header>

        <p className="modal-desc">{dish.description}</p>
        <p style={{ 'margin-bottom': 8}}><strong>For 2 people ~</strong></p>

        <ul className="ingredients-list">
          {Array.isArray(dish.ingredients) &&
            dish.ingredients.map((ing, idx) => (
              <li key={idx}>
                <strong>{ing.name}</strong> — {ing.quantity}
              </li>
            ))}
        </ul>

        <footer className="modal-footer">
          <button className="close-btn" onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
}

export default IngredientModal;
