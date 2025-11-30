
import './App.css';
import Nav from './composants/Nav';
import Footer from './composants/FooterCheckpoint';
import Home from './composants/Acceuil';
import About from './composants/About';
import SectionCard from './composants/SectionCard';



const App = () => {


  const Marwa = () => {
    alert('🌸 Merci pour votre achat! Vous recevrez bientôt un email de confirmation. 🌸');
  }
  const handleAlert = () => {
    alert('🌼 Découvrez notre portfolio et laissez-vous inspirer par la beauté des fleurs.');
  }

  return (
    <div className="App">
 
 <Nav/>
 <Home slide={true} />
<About onClick={handleAlert}/>
<div className="cardsSection">
<SectionCard onCardClick={Marwa}/>
</div>
<Footer/>

    </div>
  
  );

}

export default App;
