import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';
const categories = ['Seafood', 'Beef', 'Chicken', 'Dessert', 'Vegetarian', 'Pasta', 'Breakfast'];


export function HomePage() {
  const { data, loading, error } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');

if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error}</div>;

if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error}</div>;

return (
    <div>
      <h1>Recipe Categories</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {categories.map(category => (
          <Link to={`/category/${category.strCategory}`} key={category.idCategory} style={{ textDecoration: 'none' }}>
            <div style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
              <img src={category.strCategoryThumb} alt={category.strCategory} style={{ width: '100%' }} />
              <h3>{category.strCategory}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}