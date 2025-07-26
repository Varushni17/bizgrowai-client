import React from 'react';
import Chatbot from '../components/Chatbot';


const BizGrowAI = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '250px', background: '#f0f0f0', height: '100vh', padding: '1rem' }}>
        <h2>BizGrow AI</h2>
        <ul>
          <li>Chatbot</li>
        </ul>
      </div>
      <div style={{ flexGrow: 1, padding: '2rem' }}>
        <h2>Welcome to BizGrow AI</h2>
        <p>Select an option from the sidebar to begin.</p>
        <Chatbot />
      </div>
    </div>
  );
};

export default BizGrowAI;
