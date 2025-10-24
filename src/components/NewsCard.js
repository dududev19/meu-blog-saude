import React from 'react';
import { Link } from 'react-router-dom';

function NewsCard({ image, title, description, link }) {
  return (
    <div style={{
      width: '300px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '15px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <img 
        src={image} 
        alt={title} 
        style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} 
      />
      <h4 style={{ margin: '15px 0 10px' }}>{title}</h4>
      <p style={{ fontSize: '0.95rem', color: '#555' }}>{description}</p>

      {/* AQUI VAI O LINK "Leia mais" */}
      <Link 
        to={link} 
        style={{
          display: 'inline-block',
          padding: '8px 16px',
          backgroundColor: '#218838',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: '0.3s',
          marginTop: '10px'
        }}
        onMouseEnter={e => e.target.style.backgroundColor = '#2c7a7b'}
        onMouseLeave={e => e.target.style.backgroundColor = '#218838'}
      >
        Leia mais
      </Link>
    </div>
  );
}

export default NewsCard;


