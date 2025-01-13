import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Register from "./Register";
import Confrimation from "./Confirmation";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import Modules from "./Modules";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path='/' element={<Home title='Home' />} />
        <Route path='diplomas' element={<Diplomas />}>
          <Route path=':dipId' element={<Diploma />}>
            <Route path=':modulesId' element={<Modules />} />
          </Route>
          <Route index element={<h3>Please select a diploma from above</h3>} />
        </Route>
        <Route path='register' element={<Register />} />
        <Route path='confirmed' element={<Confrimation />} />
        <Route path='*' element={<h1 className='not-found'>404 Page not found</h1>} />
      </Routes>

      <footer className="container">
        &copy; 2024 | <a href="https://www.rp.edu.sg/openhouse">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
