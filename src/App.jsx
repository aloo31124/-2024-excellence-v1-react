
import Navigation from './components/Navigation.jsx';
import HeaderAnimate from './components/HeaderAnimate.jsx';
import WorkFlowSlide from './components/WorkFlowSlide.jsx';
import './App.css';
import ServiceList from './components/ServiceList.jsx';

function App() {

  return (
      <>
        <Navigation/>
        <HeaderAnimate/>
        <WorkFlowSlide/>
        <ServiceList/>
      </>
  );
}

export default App;
