import React from 'react';
import Article from '../Article';
import articles from './articles.json';

const Content = () => {
  return (
    <main>
      <section className="posts">
        <div className="container">
          <h1>Posts</h1>
          <ul className="list">
            {articles.map(({ text, tittle }) => (
              <Article key={tittle} text={text} tittle={tittle} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};
export default Content;
