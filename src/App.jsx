import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import  Header from './component/Header';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './pages/Home';
import { Footer } from './component/Footer';




const App = () => {

  return (
 <>
 <Router>
      <Header />
      <Routes>
        <Route index element={<Home/>} />
      </Routes>
     <Footer/>
    </Router>
 </>
  );
};

export default App;
