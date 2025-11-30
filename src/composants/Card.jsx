import '../css/Card.css';
import { Card, Button} from "react-bootstrap";




const CardCheckpoint = ({id, titre, description, img, onClick}) => {
return (
<>
 <Card className="Cardcheck" >
      <Card.Img variant="top" src={img} alt={id}/>
      <Card.Body>
        <Card.Title className='title'>{titre}</Card.Title>
        <Card.Text className='text'>
            {description}
        </Card.Text>
        <Button className="boutonCard" onClick={onClick}>Acheter!</Button>
      </Card.Body>
    </Card>
</>

) 

}
export default CardCheckpoint;