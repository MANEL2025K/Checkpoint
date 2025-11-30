import '../css/Acceuil.css';
import Carousel from 'react-bootstrap/Carousel';


const Home = ({slide}) => {
    return (
<div >
  <div className="containerHome row">
   
    <div className=" Gauche col-md-6" >
      <p>🌸
Bienvenue dans notre jardin virtuel, <br/>où chaque fleur raconte une histoire de beauté et de nature.</p>
    </div>

    <div className=" Droite col-md-6" >
 <Carousel slide={slide}>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/07/17/21/16/stourhead-garden-849742_1280.jpg"
          alt="First slide"
        />
        </Carousel.Item>
      <Carousel.Item>
       <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/09/20/06/27/bridge-2767545_1280.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
       <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_1280.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
  </div>
</div>
    );
}
export default Home;







