import { useFavorites } from '../contexts/FavoritesContext';
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <div><h1>No Favorites Yet</h1><p>Browse recipes and add some favorites!</p></div>;
  }
 return (
    <div>
      <h1>Your Favorite Recipes</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {favorites.map(recipeId => (
          <FavoriteRecipeCard key={recipeId} recipeId={recipeId} />
        ))}
      </div>
    </div>
  );
}

function FavoriteRecipeCard({ recipeId }) {
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);

  if (loading) return <div>Loading...</div>;
  if (error || !data?.meals) return null;

  const recipe = data.meals[0];

  return (
    <Link to={`/recipe/${recipe.idMeal}`} style={{ textDecoration: 'none' }}>
      <div style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100%' }} />
        <h3>{recipe.strMeal}</h3>
      </div>
    </Link>
  );
}