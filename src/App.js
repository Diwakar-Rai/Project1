import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Footer from './Components/Footer/Footer';
import ContactSection from './Components/Contact/ContactSection';
import Routing from "./Routing/Routing";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routing />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
