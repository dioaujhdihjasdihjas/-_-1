import ProductCard from './ProductCard.jsx';

const products = [
  {
    name: 'Льняная рубашка',
    price: 3490,
    image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=700&q=85',
    color: 'linear-gradient(135deg, #f5ece1, #e7d5c2)',
  },
  {
    name: 'Пальто прямого кроя',
    price: 10990,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=700&q=85',
    color: 'linear-gradient(135deg, #e8e1d9, #c9b9ac)',
  },
  {
    name: 'Кожаная сумка',
    price: 6790,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85',
    color: 'linear-gradient(135deg, #ead9cb, #d9bba5)',
  },
];

export default function App() {
  return (
    <main className="page">
      <header>
        <p className="eyebrow">Atelier · новая коллекция</p>
        <h1>Одежда для вашего ритма</h1>
        <p className="subtitle">Добавьте понравившиеся вещи в корзину.</p>
      </header>

      <section className="product-grid" aria-label="Каталог одежды">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </section>
    </main>
  );
}
