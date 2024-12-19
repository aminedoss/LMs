import React from 'react';

function CourseCard({ image, title, instructor, rating, price, bestSeller }) {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      overflow: 'hidden', 
      width: '250px', 
      margin: '10px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
    }}>
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '150px', 
          objectFit: 'cover', 
        }}
      />
      <div style={{ padding: '15px' }}>
        <h5 style={{ margin: '0 0 10px' }}>{title}</h5>
        <p style={{ margin: '0', color: '#555' }}>{instructor}</p>
        <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Rating: {rating}</p>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{price}</p>
        {bestSeller && <span style={{ backgroundColor: '#ffc107', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8em' }}>Best Seller</span>}
      </div>
    </div>
  );
}

export default CourseCard;
