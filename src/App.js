import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Aboutme from "./pages/Aboutme";
import Contacts from "./pages/Contacts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
    <ChakraProvider>
      <BrowserRouter> {/* Router component to enable routing */}
        <NavBar/> {/* Render the navigation bar */}
        <Routes> {/* Component to define the routes */}
          <Route path="/" element={<Aboutme />} /> {/* Route for the home page */}
          <Route path="/Aboutme" element={<Aboutme />} /> {/* Route for the Contacts page */}
          <Route path="/Contacts" element={<Contacts />} /> {/* Route for the DarkMode page */}
          <Route path="/Portfolio" element={<Portfolio />} /> {/* Route for the Example page */}
          <Route path="/Resume" element={<Resume />} /> {/* Route for the Fetch page */}
        </Routes>
        <Footer/>
      </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
