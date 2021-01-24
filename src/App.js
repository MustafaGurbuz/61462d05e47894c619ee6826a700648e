import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import PremierBuilder from './containers/PremierBuilder/PremierBuilder';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <PremierBuilder />
          </Layout>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
