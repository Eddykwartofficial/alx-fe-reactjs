import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useRecipeStore();

  return (
    <div style={{ marginBottom: '2rem' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search recipes by title or ingredients..."
        style={{ 
          width: '100%', 
          padding: '1rem', 
          borderRadius: '8px', 
          border: '2px solid #51cf66',
          fontSize: '1rem'
        }}
      />
      {searchTerm && (
        <p style={{ marginTop: '0.5rem', color: '#666' }}>
          Searching for: "{searchTerm}"
        </p>
      )}
    </div>
  );
};

export default SearchBar;
