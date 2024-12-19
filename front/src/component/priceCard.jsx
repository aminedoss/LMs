import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function PriceCard() {
  const plans = [
    {
      title: 'Abonnement Personal',
      subtitle: 'Pour vous',
      price: 'À partir de $10.00 par mois',
      features: [
        'Accès à plus de 12 000 cours parmi les meilleurs',
        'Préparation aux certifications',
        'Recommandations basées sur les objectifs',
        'Exercices de codage optimisés par l\'IA',
      ],
      button: 'Bénéficiez d’un essai gratuit',
    },
    {
      title: 'Abonnement Team',
      subtitle: 'Pour votre équipe',
      price: '$15.00 par mois, par utilisateur',
      features: [
        'Accès à plus de 12 000 cours parmi les meilleurs',
        'Préparation aux certifications',
        'Recommandations basées sur les objectifs',
        'Exercices de codage optimisés par l\'IA',
        'Rapports d\'analytique et d\'adoption',
      ],
      button: 'Bénéficiez d’un essai gratuit',
    },
    {
      title: 'Abonnement Entreprise',
      subtitle: 'Pour l\'ensemble de votre entreprise',
      price: 'Contactez le service commercial pour obtenir la tarification',
      features: [
        'Access to 27,000+ top courses',
        'Préparation aux certifications',
        'Recommandations basées sur les objectifs',
        'Exercices de codage optimisés par l\'IA',
        'Analyses et informations avancées',
        'Équipe dédiée à la réussite des clients',
        'Sélection internationale en 15 langues',
        'Contenu personnalisable',
        'Formation technique via la pratique avec le module sandbox',
      ],
      button: 'Demander une démonstration',
    },
  ];

  return (
    <Container fluid className="my-5">
      <Row>
        {plans.map((plan, index) => (
          <Col lg={4} md={6} className="d-flex align-items-stretch mb-4" key={index}>
            <Card className="shadow-sm w-100">
              <Card.Body className="d-flex flex-column">
                <h5 className="card-title">{plan.title}</h5>
                <p className="card-subtitle text-muted mb-2">{plan.subtitle}</p>
                <h6 className="card-price text-success">{plan.price}</h6>
                <ul className="list-unstyled mt-3 mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i}>&#10003; {feature}</li>
                  ))}
                </ul>
                <Button
                  variant="dark"
                  className="mt-auto"
                >
                  {plan.button}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PriceCard;
