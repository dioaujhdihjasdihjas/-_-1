import { useState } from 'react';

/** Карточка получает данные о товаре через props. */
export default function ProductCard({ name, price, image, color }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <article className="product-card">
      <div className="product-image" style={{ background: color }}>
        <img src={image} alt={name} />
      </div>

      <div className="product-details">
        <h2>{name}</h2>
        <p className="price">{price.toLocaleString('ru-RU')} ₽</p>

        <div className="card-footer">
          <button type="button" onClick={() => setQuantity((current) => current + 1)}>
            Добавить в корзину
          </button>
          <button
            className="remove-button"
            type="button"
            onClick={() => setQuantity((current) => Math.max(0, current - 1))}
            disabled={quantity === 0}
          >
            Убрать
          </button>
          <span className="counter" aria-label={`В корзине: ${quantity}`}>
            {quantity}
          </span>
        </div>
        <p className="counter-label">Выбрано: {quantity} шт.</p>
      </div>
    </article>
  );
}
