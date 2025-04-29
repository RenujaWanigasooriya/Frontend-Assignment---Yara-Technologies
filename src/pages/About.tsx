// src/pages/About.tsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About This Application</h2>
      <p>
        This is a simple React + TypeScript application that demonstrates:
      </p>
      <ul>
        <li>Fetching data from an external API</li>
        <li>State management using React Hooks and reducers</li>
        <li>Routing between pages using React Router</li>
        <li>Error handling and loading states</li>
        <li>Basic responsive UI with CSS</li>
      </ul>
      <p>
        The posts displayed on the home page are fetched from a public dummy API:&nbsp;
        <a
  href="https://jsonplaceholder.typicode.com/posts"
  target="_blank"
  rel="noopener noreferrer"
>
  JSONPlaceholder
</a>
.
      </p>
      <p>
        This project was created as part of a frontend assignment and demonstrates fundamental concepts of frontend development in a clean and organized way.
      </p>
    </div>
  );
};

export default About;