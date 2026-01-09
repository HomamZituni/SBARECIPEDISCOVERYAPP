import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery('');
    }
  };

 return (
    <nav style={{ padding: '20px', backgroundColor: '#333', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
          Recipe App
        </Link>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/favorites" style={{ color: 'white', textDecoration: 'none' }}>Favorites</Link>
          
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '5px' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search recipes..."
              style={{ padding: '5px 10px', borderRadius: '4px', border: 'none' }}
            />
            <button type="submit" style={{ padding: '5px 15px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}  