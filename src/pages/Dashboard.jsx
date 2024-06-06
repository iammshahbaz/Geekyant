import React, { useEffect, useState } from 'react';

const Dashboard = () => {

  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://hoblist.com/api/movieList', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            category: 'movies',
            language: 'kannada',
            genre: 'all',
            sort: 'voting',
          }),
        });
        const data = await response.json();
        setMovies(data.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4 text-center">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map(movie => (
          <div key={movie._id} className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl">{movie.title}</h3>
            <p>{movie.language}</p>
            <p>{movie.genre}</p>
            <p>{movie.voting}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
