import { useState } from 'react';
import styled from 'styled-components';
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar';
import RectangleCard from './components/RectangleCard';
import { colors } from './styles/variables';

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
        <div className="hero">
          <h1>The Weather Inside Of 24 Hours and Beyond</h1>
          <div className="input-control">
            <span>sch</span>
            <input type="text" />
            <span>v</span>
            <button className="btn">Search</button>
          </div>
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
  padding: 6rem;

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
  .hero {
    padding: 2rem 0;
    h1 {
      padding: 2rem 0;
    }
    .input-control {
      border: 1px solid rebeccapurple;
      input {
        padding: 0.3rem 0.5rem;
      }
      .btn {
        padding: 0.6rem 0.4rem;
      }
    }
  }
  .temp-list {
    border: 1px solid orange;
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    background-color: ${colors.bgSec};
    padding: 2rem 0.5rem;
    color: #fff;
    gap: 1rem;
    border-radius: 8px;
    margin-bottom: 3rem;
    @media (min-width: 600px) {
      
    }
    li {
      cursor: pointer;
    }
  }
`;
