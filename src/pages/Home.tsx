// src/pages/Home.tsx
import React, { useState } from 'react';
import { usePosts } from '../hooks/usePosts';
import './Home.css';

const Home = () => {
  const { posts, loading, error } = usePosts();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home-container">
      <h2>Posts</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredPosts.map(post => (
        <div key={post.id} className="post">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
