import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { RecipeList } from './RecipeList';
import AvailibleIngredients from './components/availibleIngredients';
import RecipePlanner from './components/recipie_planner';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <RecipeList></RecipeList>
      <AvailibleIngredients></AvailibleIngredients>
      <RecipePlanner></RecipePlanner>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
