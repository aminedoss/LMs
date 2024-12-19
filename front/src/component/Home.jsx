import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillsTabs from './SkillsTabs'; 
import PriceCard from './priceCard';
import Alloffre from './AfficheOffre';

function Home() {
  return (
    <div>
      {/* Promotional Section with Background Image */}
      <div
        style={{
          backgroundImage: 'url(https://media.licdn.com/dms/image/v2/D4D12AQHL1tmi-7TC4A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1690022978374?e=2147483647&v=beta&t=vgDZWzSK3r-laLxsJSmDWMiZ7wiVmbQDWce_Sz6olmc)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '600px', 
          width: '100%', 
          display: 'flex',
          justifyContent: 'flex-start', 
          alignItems: 'center',
          color: 'white', 
          textAlign: 'left', 
          paddingLeft: '50px', 
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            color: 'white',
            padding: '20px',
            margin: '10px',
            maxWidth: '500px', 
            borderRadius: '8px',
          }}
        >
          <h1>La promotion se termine aujourd'hui</h1>
          <p>Vos compétences n'ont aucune limite avec des cours à partir de seulement 9,99 $US.</p>
        </div>
      </div>

      {/* Skills Section */}
      <Container fluid className="text-center mt-4">
        <Row>
          <Col>
            <h2>Toutes les compétences dont vous avez besoin au même endroit</h2>
            <p>Des compétences essentielles aux sujets techniques.</p>
            <SkillsTabs />
          </Col>
        </Row>
      </Container>
      <Container fluid className="text-center mt-4">
      <h2>Accélérez votre évolution ou celle de votre entreprise</h2>
      <p>Atteignez plus rapidement vos objectifs grâce à l'un de nos abonnements ou programmes. Essayez-en un gratuitement aujourd'hui, ou contactez le service commercial pour en savoir plus..</p>
      </Container>

      <Container fluid className="text-center mt-4">
  <div style={{ textAlign: 'center', margin: '80px', backgroundColor:'#dcdcdc', display: 'flex', justifyContent: 'space-between' }}>
    <div style={{ marginRight: '30px', flex: 1 }}>
      <p style={{ fontSize: '18px', color: '#444', margin: '20px 0' }}>
        Career progress isn't always linear. So when your industry evolves or your plans change, edX is the education destination that works as hard as you. Explore thousands of job-relevant online courses that empower you to ramp up, reroute, or start fresh. We'll be with you every step of the way.
      </p>
    </div>
    
    <div style={{ marginLeft: '30px', flex: 1 }}>
      <h1 style={{ fontSize: '60px', fontWeight: 'bold', lineHeight: '1.2' }}>
        You set the goal<br />
        We'll mark the path.
      </h1>
    </div>
  </div>
</Container>

<Container>
  <Alloffre />
</Container>

      
      <Container fluid className="text-center mt-4">
        <Row>
          <Col>
            <PriceCard />
          </Col>
        </Row>


      </Container>




    </div>
  );
}

export default Home;
