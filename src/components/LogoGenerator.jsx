import React, { useRef, useEffect } from 'react';
import { saveAs } from 'file-saver';

const LogoGenerator = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 200;
    canvas.height = 50;
    
    // Draw logo background
    ctx.fillStyle = '#2ecc71';
    ctx.fillRect(0, 0, 50, 50);
    
    // Draw logo text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('SMNS', 10, 30);
    
    // Draw company name
    ctx.fillStyle = '#333';
    ctx.font = '16px Arial';
    ctx.fillText('& Associates', 60, 30);
  }, []);
  
  const downloadLogo = () => {
    const canvas = canvasRef.current;
    canvas.toBlob((blob) => {
      saveAs(blob, 'logo.png');
    });
  };
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>Temporary Logo Generator</h3>
      <canvas 
        ref={canvasRef} 
        style={{ border: '1px solid #ccc', margin: '20px 0' }}
      ></canvas>
      <div>
        <button 
          onClick={downloadLogo}
          style={{
            background: '#2ecc71',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Download Logo
        </button>
        <p style={{ marginTop: '10px', fontSize: '14px' }}>
          Save this to public/assets/logo.png in your project
        </p>
      </div>
    </div>
  );
};

export default LogoGenerator; 