import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <header>
        <p>logo</p>
        <div>
          <Navbar />
        </div>
        {/* <div> */}
          {/* <MobileNav /> */}
        {/* </div> */}
      </header>
      <main>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi maxime
          expedita dicta architecto accusamus, odit laudantium nisi qui ducimus,
          a facilis mollitia vitae veniam deserunt velit modi perferendis
          perspiciatis dolor.
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          assumenda impedit vitae eos sapiente! Provident odio commodi maiores
          molestias cumque ipsam delectus? Numquam accusantium est reiciendis
          maiores facilis nisi saepe.
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
