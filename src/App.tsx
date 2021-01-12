import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Listing from './components/Listing';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Header />
    <Listing />
  </>
);

export default App;
