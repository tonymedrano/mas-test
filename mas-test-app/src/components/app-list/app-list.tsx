import React from 'react';

const styles = {
    list: {
        padding: 0
    },
    container: {
        display: 'flex',
        justifyContent:'space-around'
      },
};

function AppList({children}:any) {
  return (
    <div style={styles.list}>
      <h1>Phone List</h1>
      <hr />
      <div style={styles.container}>
      {children}
      </div>
    </div>
  );
}

export default AppList;