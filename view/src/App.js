import './App.css';
import Navbar from './components/Navbar';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="md">
        <div className="banner">
          <h2>Let's start</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sint rem, dolorem fuga voluptatem quis commodi amet, nemo quisquam temporibus excepturi recusandae illo eum eos, blanditiis est expedita aliquam vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur minima, voluptates maiores officiis nostrum excepturi odio, illo omnis doloribus eius est possimus quidem optio autem odit quos debitis sapiente?</p>


        </div>
      </Container>
    </div>
  );
}

export default App;
