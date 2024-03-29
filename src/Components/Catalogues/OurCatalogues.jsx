import React from 'react';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import about_5 from '../Assets/about_05.jpg';
import boook_icon from '../Assets/boook_icon.png';
import book_icon from '../Assets/book_icon.png';
import about_5s from '../Assets/about_05.jpg';
import abouts_5 from '../Assets/about_05.jpg';
import bookss_icon from '../Assets/about_05.jpg';


const imageContainerStyle = {
  position: 'relative',
  backgroundImage: 'url("https://asalapublishers.com/uploads/static_seo_pages/1600x360/asala_about4.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '185px',
  borderRadius: '10px',
  color: 'white',
  marginBottom: '20px', 
};

const titleStyle = {
  fontSize: '30px',
  fontWeight: 'bold',
  marginBottom: '10px',
  textAlign: 'center',
};

const textUnderImageStyle = {
  fontSize: '25px',
  textAlign: 'center',
  marginTop: '30px',
  color:'#484847'
};

const imageCardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  marginBottom: '130px',
  backgroundSize:'cover',
};

const imageCardStyle = {
  width: '250px',
  height: '350px',
  marginBottom: '20px',
  position: 'relative',
  backgroundRepeat: 'no-repeat', 
};

const downloadButtonContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  marginTop: '170px',
};

const downloadButtonStyle = {
  backgroundColor: '#CD2C5D',
  color: 'white',
  padding: '12px 24px',
  borderRadius: '25px',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '18px',
  marginLeft: '-20px',
};

const iconStyle= {
  marginRight: '8px',
};

const squareStyle = {
  height: '15rem',
  width: '15rem',
  position: 'relative',
};

const circleStyle = {
  backgroundColor: '#CD2C5D',
  height: '5rem',
  width: '5rem',
  borderRadius: '50%',
  position: 'absolute',
  left: '13.5rem',
  top: '20rem',
  border: '4px solid white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const pdfImageURL = 'https://asalapublishers.com/assets/img/pdf.svg';

const imageArray = [about_5, boook_icon, book_icon, about_5s, abouts_5, bookss_icon];

const OurCatalogues = () => {
  return (
    <div>
    <div style={imageContainerStyle} className="contact-us-container">
      <h2 style={titleStyle} className="title">
     Catalogues
      </h2>
      <div style={{ marginLeft: '720px', fontSize: '15px' }}>Home .  Catalogues
    </div>
    </div>

    <div style={textUnderImageStyle}>
      <strong><p>Findout more about us </p></strong>
      <p style={{marginTop:'30px'}}> We appreciate your trust greatly. we Give life to reading</p>
   </div>
        
   <div style={imageCardContainerStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%',marginTop:'150px' }}>
          {imageArray.slice(0, 3).map((image, index) => (
            <div key={index} style={{ ...imageCardStyle, backgroundImage: `url(${imageArray[index]})`, width: '30%' }}>
              <div style={squareStyle}>
                <div style={circleStyle}>
                  <img src={pdfImageURL} alt="PDF Icon" style={{ width: '50%', height: '50%', display: 'block', margin: 'auto' }} />
                </div>
              </div>
              <div>
                <div style={downloadButtonContainerStyle}>
                  <button style={downloadButtonStyle}>
                    <FileDownloadOutlinedIcon style={iconStyle} />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop:'100px' }}>
        
          {imageArray.slice(3).map((image, index) => (
            <div key={index + 3} style={{ ...imageCardStyle, backgroundImage: `url(${imageArray[index + 3]})`, width: '30%' }}>
              <div style={squareStyle}>
                <div style={circleStyle}>
                  <img src={pdfImageURL} alt="PDF Icon" style={{ width: '50%', height: '50%', display: 'block', margin: 'auto' }} />
                </div>
              </div>
              <div>
                <div style={downloadButtonContainerStyle}>
                  <button style={downloadButtonStyle}>
                    <FileDownloadOutlinedIcon style={iconStyle} />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCatalogues;
