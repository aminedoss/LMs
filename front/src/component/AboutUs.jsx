import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ padding: '50px', backgroundColor: '#f4f4f4' }}>
      <h1 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold' }}>About Us</h1>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
        <div style={{ flex: 1, padding: '20px', marginRight: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '600' }}>Notre mission :</h2>
          <p style={{ fontSize: '18px', color: '#444' }}>
          "Notre mission est d'aider les étudiants en leur fournissant une plateforme pour suivre et améliorer leurs compétences académiques et professionnelles, en leur offrant les ressources nécessaires pour leur développement de carrière."
          </p>
        </div>
        
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '600' }}>Nos valeurs :</h2>
          <ul style={{ fontSize: '18px', color: '#444' }}>
            <li>"Intégrité : Nous valorisons la transparence et l'honnêteté dans toutes nos actions."</li>
            <li>"Innovation : Nous adoptons de nouvelles technologies pour améliorer l'apprentissage et la croissance."</li>
            <li>"Collaboration : Nous croyons en l'importance de travailler ensemble pour atteindre des objectifs communs.</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600' }}>Meet Our Team</h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <div style={{ margin: '0 20px' }}>
            <img src="https://th.bing.com/th/id/R.b2b34517339101a111716be1c203f354?rik=e5WHTShSpipi3Q&pid=ImgRaw&r=0" alt="Team Member 1" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            <h3 style={{ fontSize: '20px', fontWeight: '500' }}>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div style={{ margin: '0 20px' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/8815/8815065.png" alt="Team Member 2" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            <h3 style={{ fontSize: '20px', fontWeight: '500' }}>Jane Smith</h3>
            <p>Co-Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
