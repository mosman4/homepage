import React, { useState } from 'react';
import Logo from './Assets/Logo.png';
import Flag from './Assets/Flag.png';
import Paper from './Assets/Paper.png';


const App = () => {
  // State for form validation message
  const [validationMessage, setValidationMessage] = useState('');

  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const documentId = e.target.elements.documentId.value;
    

    if (documentId ) {
      setValidationMessage('Form is valid');
    } else {
      setValidationMessage('Please recheck Your Input');
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* Header Section */}
      <div
        style={{
          backgroundColor: '#f0f0f0',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
         
        }}
      >
        <img src={Logo} alt="Logo 1" style={{ height: '130px' }} />
        <div>
          <h1 style={{ fontSize: '24px' }}>Ministry of Foreign Affairs Of the Republic of Sudan</h1>
          <h2 style={{ fontSize: '18px' }}>Documents Verification System</h2>
        </div>
        <img src={Flag} alt="Logo 2" style={{ height: '60px' }} />
      </div>

      {/* Main Section */}
      <div
        style={{
          backgroundColor: '#e0e0e0',
          padding: '40px',
          flexGrow: 1, // This will take up the remaining space between the header and footer
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <form
          onSubmit={handleFormSubmit}
          style={{
            maxWidth: '400px',
            margin: '0 auto',
            minWidth: '60vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
            <label htmlFor="documentId" style={{ display: 'block', margin: '10px' }}>
              Document Number:
            </label>
            <input
              type="text"
              id="documentId"
              name="documentId"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          

      <div style={{display: "flex", justifyContent:"center"}}>
  
          {validationMessage !== 'Form is valid' && (
          <p
            style={{
              marginTop: '20px',
              color: 'red',
              alignSelf: 'center',
            }}
          >
            {validationMessage}
          </p>
        )}
         <button
            type="submit"
            style={{
              padding: '20px 20px',
              borderRadius: '5px',
              backgroundColor: '#990505',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              alignSelf: 'center',
              fontWeight:"bold"
            }}
          >
            Validate
          </button>
        </div>
        
          
        </form>
        
      </div>

      {/* User Information */}
      {validationMessage === 'Form is valid' && (
        <div
          style={{
            backgroundColor: '#F0F0F0C6',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            minHeight: '60vh',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <h2 style={{ color: 'green', padding: 20 }}>Verified</h2>
            <img src={Paper} alt="Logo 1" style={{ height: '200px' }} />
            <h4>Click to view the electronic Copy of the Document</h4>
          </div>
         
        </div>
      )}

      {/* Footer Section */}
      <div
        style={{
          backgroundColor: '#FDFBFBC8',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <h4>© All Rights Reserved To Ministry Of Foreign Affairs Of The Republic Of Sudan </h4>

      </div>

     
    </div>
  );
};

export default App;
