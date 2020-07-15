import React from 'react';

const styles = {
    card: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '40%',
      },
      container: {
        padding: '2px 16px'
      },
      image: {
        width:'100%'
      }
};

function AppListItem({name, description, image, color}: any) {
  return (
    <div style={styles.card}>
        <img src={image} alt={name} style={styles.image} />
        <div style={styles.container}>
            <h4><strong>{name}</strong></h4> 
            <p><strong>Description:</strong> {description}</p> 
            <p><strong>Color:</strong> {color}</p> 
        </div>
    </div>
  );
}

export default AppListItem;
