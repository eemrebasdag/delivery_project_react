import './App.css';
import FifthSection from './components/FifthSection/FifthSection';
import FourthSection from './components/FourthSection/FourthSection';
import Navbar from './components/Navbar/Navbar';
import SecondSection from './components/SecondSection/SecondSection';
import SixthSection from './components/SixthSection/SixthSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <Footer/>
    </div>
  );
}

export default App;
