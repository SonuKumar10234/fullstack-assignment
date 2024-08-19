import React from 'react';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css'
import SearchBar from './components/SearchBar';
function App() {
  
  return (
    <div className="App">
      <Header />
      <main>
        <div className='flex flex-col justify-center items-center bg-gray-200 w-full h-[400px] gap-8'>
          <h1 className='text-gray-900 text-2xl md:text-5xl max-md:text-center'>How can we help?</h1>
          <SearchBar />
        </div>
        <CardContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
