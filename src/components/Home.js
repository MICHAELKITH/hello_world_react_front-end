import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <section>
    <h1>Welcome to the full-stack hello world program!</h1>
    <Link to="/greeting">
      <button type="button">Random Greeting</button>
    </Link>
  </section>
);

export default Home;
