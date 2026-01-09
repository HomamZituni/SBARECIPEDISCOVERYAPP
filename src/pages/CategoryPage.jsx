import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
export function CategoryPage() {
  const { category } = useParams();  
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);


if (loading) return <div>Loading recipes...</div>;
  if (error) return <div>Error: {error}</div>;

  const meals = data?.meals || [];

   return (
    <div>
      <h1>{category} Recipes</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {meals.map(meal => (
          <Link to={`/recipe/${meal.idMeal}`} key={meal.idMeal} style={{ textDecoration: 'none' }}>
            <div style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
              <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%' }} />
              <h3>{meal.strMeal}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  ); }
  