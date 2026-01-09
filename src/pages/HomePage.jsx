import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const categories = ['Seafood', 'Beef', 'Chicken', 'Dessert', 'Vegetarian', 'Pasta', 'Breakfast'];

export function HomePage() {
  const { data, loading, error } = useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading recipes</div>;

  const recipes = data?.meals?.slice(0, 6) || [];

  return (
    <div>
      <h1>Recipe App</h1>
      
      <h2>Categories</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {categories.map(category => (
          <Link key={category} to={`/category/${category}`}>
            <button>{category}</button>
          </Link>
        ))}
      </div>

      <h2>Random Recipes</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {recipes.map(recipe => (
          <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`} style={{ textDecoration: 'none' }}>
            <div style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100%' }} />
              <h3>{recipe.strMeal}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
