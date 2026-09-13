

import React from 'react';
import Image from 'next/image';

export default function DepannagePresentation() {
  return (
    <section className="presentation-section">
      <div className="presentation-container">
        
        
        <div className="presentation-image-container">
          <Image
            src="/img/presentationdepannage.jpg"
            alt="Intérieur d'un centre de franchisé avec voiture et éclairage moderne"
            width={500}
            height={400}
            className="presentation-image"
          />
        </div>
        
        
        <div className="presentation-content">
          
         
          
          <h2 className="sectiontitle">
            Nos Services de dépannage et remorquage auto
          </h2>
          
          <p className="presentation-description">
        Un imprévu sur la route ? On intervient sans attendre ! Ne laissez pas une panne gâcher votre journée. Avec Pare-Brise Dépann, bénéficiez d’une assistance immédiate, efficace et à prix ultra-compétitifs.          </p>
          
          <a href="#" className="btn-rdv">
        En savoir +
      </a>
        </div>
        
      </div>
    </section>
  );
}
