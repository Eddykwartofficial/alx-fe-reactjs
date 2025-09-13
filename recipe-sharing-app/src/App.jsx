import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ color: '#51cf66', fontSize: '2.5rem' }}>🍳 Recipe Sharing App</h1>
        <p>Discover, share, and save your favorite recipes!</p>
      </header>

      <SearchBar />
      <AddRecipeForm />
      <FavoritesList />
      <RecommendationsList />
      <RecipeList />
    </div>
  );
}

export default App;
