/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
import React from 'react';
// local files
import Button from './components/Button';

/**
 * @description renders whole React application to the DOM.
 * @param {<type> e.g. number} a - (what to write for params?)
 * @param {<type> e.g. number} b - (what to write for params?)
 * @returns {<type> e.g. number} - JSX (what to write here?)
 * would I normally write tests for App, if it made use of other separate components? (No text)
 * how to let you know I've made necessary changes (will it show on same pull request), do I reply and resolve convo?
 * resolving conflicts
 * say I'm working on a branch and main gets updated - how to include all updates from main while working on branch?
 * if there's time - does your terminal show what branch you're on? Familiar with powerlevel10k - shows branch, tab auto
 */
const App = () => {
  return (
    <main className="App">
      <a href="https://www.google.com" alt="Lawrence Yoon's profile">
        Lawrence Yoon
      </a>
      <div className="buttons">
        <Button buttonText="Click me!"></Button>
        <Button buttonText="Dude"></Button>
      </div>
    </main>
  );
};

export default App;
