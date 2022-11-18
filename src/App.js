import { useState } from 'react';
import styled from 'styled-components';
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar';
import RectangleCard from './components/RectangleCard';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Wrapper>
      <header>
        <p>logo</p>
        <div className="navbar">
          <Navbar />
        </div>
        <div>
          <MobileNav navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        </div>
      </header>
      <main>
        <div>
          <h1>The Weather Inside Of 24 Hours and Beyond</h1>
        </div>
        <div>
          <span>seach</span>
          <input type="text" />
          <button>Search</button>
        </div>
        <ul className="temp-list">
          <li>Rainy</li>
          <li>Sunny </li>
          <li>Cloudy</li>
          <li>Windy</li>
          <li>Thunderstorms</li>
          <li>Heat</li>
        </ul>
        <div>
          <RectangleCard />
        </div>
      </main>
      <footer></footer>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 1rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid teal;

    .navbar {
      flex-basis: 90%;
      @media (max-width: 860px) {
        display: none;
      }
    }
  }

  .temp-list {
    border: 1px solid orange;
    display: flex;
    justify-content: space-between;
  }
`;
