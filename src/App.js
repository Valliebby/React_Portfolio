import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Aboutme from "./pages/Aboutme";
import Contacts from "./pages/Contacts";
import Portfolio from "./pages/Portfolio";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
    <ChakraProvider>
      <HashRouter> {/* Router component to enable routing */}
        <NavBar/> {/* Render the navigation bar */}
        <Routes> {/* Component to define the routes */}
          <Route path="/" element={<Aboutme />} /> {/* Route for the home page */}
          <Route path="/Aboutme" element={<Aboutme />} /> {/* Route for the Contacts page */}
          <Route path="/Contacts" element={<Contacts />} /> {/* Route for the DarkMode page */}
          <Route path="/Portfolio" element={<Portfolio />} /> {/* Route for the Example page */}
        </Routes>
        <Footer/>
      </HashRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
