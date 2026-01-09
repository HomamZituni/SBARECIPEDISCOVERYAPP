import { Link } from 'react-router-dom';

export function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.idMeal}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', textAlign: 'center', transition: 'transform 0.2s' }}>
        <img 
          src={recipe.strMealThumb} 
          alt={recipe.strMeal} 
          style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} 
        />
        <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{recipe.strMeal}</h3>
        <p style={{ color: '#666', fontSize: '14px' }}>{recipe.strCategory}</p>
      </div>
    </Link>
  );
}
