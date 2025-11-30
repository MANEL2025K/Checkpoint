import '../css/SectionCard.css';
import CardCheckpoint from './Card';
import { Container, Row, Col } from 'react-bootstrap';


const SectionCard = ({ onCardClick }) => {
    const cards = [
        {id: 1,
         titre: 'Bouquet de Roses',
        description: 'Un magnifique bouquet de roses pour toutes les occasions.',
        img: 'https://cdn.pixabay.com/photo/2013/07/30/12/25/bouquet-168831_1280.jpg'
        },
        {id: 2,
        titre: 'Fleurs des Champs',
         description: 'Un assortiment coloré de fleurs des champs fraîches.',
         img: 'https://cdn.pixabay.com/photo/2016/10/05/14/13/flowers-1716747_1280.jpg'
        },
        {id: 3,
        titre: 'Orchidée Exotique',
         description: 'Une élégante orchidée pour ajouter une touche d’exotisme à votre intérieur.',
         img: 'https://cdn.pixabay.com/photo/2016/07/19/15/23/orchids-1528330_1280.jpg'
        },
        {id: 4,
        titre: 'Tulipes Printanières',
         description: 'Un bouquet vibrant de tulipes pour célébrer le printemps.',
         img: 'https://cdn.pixabay.com/photo/2023/04/27/11/08/flowers-7954339_1280.jpg'
        },
        {id: 5,
        titre: 'Lys Blancs',
         description: 'Des lys blancs purs pour une élégance intemporelle.',
            img: 'https://cdn.pixabay.com/photo/2021/09/10/19/07/lilies-6613965_1280.jpg'},
        {id: 6,
        titre: 'Tournesols ensoleillés',
         description: 'Des tournesols éclatants pour illuminer n’importe quelle pièce.',
         img: 'https://cdn.pixabay.com/photo/2018/07/02/22/18/sunflower-3512656_1280.jpg'
        },
       
        
    ];
    return (
<Container className="sectionCard">
    <Row>
        {cards.map((card) => ( 
            <Col key={card.id} md={4} className="mb-4 d-flex justify-content-center">
<CardCheckpoint id={card.id}  titre={card.titre}  description={card.description}  img={card.img} 
onClick={onCardClick}
                />       
            </Col>
        ))}
    </Row>                
</Container>
    );
};

export default SectionCard;