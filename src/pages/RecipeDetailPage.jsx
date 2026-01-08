import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useFavorites } from '../contexts/FavoritesContext';

export function RecipeDetailPage () {
  const { recipeId } = useParams();
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);

const { addFavorite, removeFavorite, isFavorite } = useFavorites();

if (loading) return <div>Loading recipe...</div>;
  if (error) return <div>Error: {error}</div>;

  const recipe = data?.meals?.[0];
  if (!recipe) return <div>Recipe not found</div>;

 const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  const favorited = isFavorite(recipe.idMeal);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100%', maxWidth: '400px' }} />
      <h1>{recipe.strMeal}</h1>
      
      <button 
        onClick={() => favorited ? removeFavorite(recipe.idMeal) : addFavorite(recipe.idMeal)}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        {favorited ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>

      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}