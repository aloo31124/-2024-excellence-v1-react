
import Navigation from './components/Navigation.jsx';
import HeaderAnimate from './components/HeaderAnimate.jsx';
import WorkFlowSlide from './components/WorkFlowSlide.jsx';
import './App.css';
import ServiceList from './components/ServiceList.jsx';
import PortfolioSlide from './components/PortfolioSlide.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
      <>
        <Navigation/>
        <HeaderAnimate/>
        <WorkFlowSlide/>
        <ServiceList/>
        <PortfolioSlide/>
        <Footer/>
      </>
  );
}

export default App;
