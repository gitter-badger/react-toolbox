import React from 'react';
import { Link } from 'react-router';
import { Card, Button } from 'react-toolbox';
import Logo from '../../logo';
import Navigation from '../../navigation';
import style from './style';
import authors from './modules/authors';

const Home = () => (
  <article>
    <header className={style.header}>
      <Logo className={style.logo} />
      <h2 className={style.title}>React Toolbox</h2>
      <h4 className={style.subtitle}>Bootstrap your application with beautiful Material Design Components</h4>
      <Navigation className={style.navigation} />
    </header>

    <section className={style.content}>
      <p>
        React Toolbox is a set of React components that implements Google Material Design specification.
        It's built on top of some the trendiest proposals like CSS Modules (written in SASS), Webpack and ES6.
        The library integrates harmfuly with your Webpack workflow and it's easily customizable and very flexible.
      </p>

      <p>
        Check our awesome documentation (which is built using React Toolbox) and try all the components with
        live examples. We've created a playground so you don't need to install anything to fall in love with
        our components, so fun!
      </p>

      <Link to='/components'>
        <Button label='Try it now!' kind='raised' accent />
      </Link>
    </section>

    <section className={`${style.content} ${style['second-content']}`}>
      <h3 className={style['authors-title']}>About the authors</h3>
      <ul className={style.authors}>
        { authors.map((author, index) => { return <Card key={index} {...author} />; }) }
      </ul>
    </section>

    <footer className={style.footer}>
      <p>React Toolbox © 2015</p>
      <p>Crafted with Love between Spain and Thailand</p>
    </footer>
  </article>
);

export default Home;
