import { useSearchParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const { data, loading, error } = useFetch(
    query ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}` : null
  );

  if (!query) {
    return <div><h1>Search Recipes</h1><p>Use the search bar to find recipes</p></div>;
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading search results</div>;

  const recipes = data?.meals || [];

  if (recipes.length === 0) {
    return <div><h1>No Results</h1><p>No recipes found for "{query}"</p></div>;
  }

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
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
