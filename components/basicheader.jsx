import React from 'react';

export default function BasicHeader({ title, description, hasBorder = false }) {
  

  const containerClasses = `basic-header-container ${hasBorder ? 'basic-header-with-border' : ''}`;

  return (
    <section className={containerClasses}>
        <div className="basic-header-content"> 
          <h2 className="basic-header-title">
            {title || "Titre par défaut"} 
          </h2>
          
          
          {description && (
            <p className="basic-header-description">
              {description}
            </p>
          )}

        </div>
    </section>
  );
}