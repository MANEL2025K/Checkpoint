import '../css/About.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const About = ({onClick}) => {
  
    
    return (
        <div>
    <Card className="Card1 text-center mt-5 mb-5">
      <Card.Body className='CardAbout'>
        <Card.Title>Un monde de fleurs à portée de regard</Card.Title>
        <Card.Text>
         Plongez dans notre univers floral et laissez chaque pétale vous révéler sa beauté unique.
        </Card.Text>
        <Button onClick={onClick} className='buttonAbout'>🌹Voir plus🌹</Button>
      </Card.Body>
      </Card>
            </div>
    );
}
export default About;


























