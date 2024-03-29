import React from 'react';
import './Home.css';
import banners from '../Assets/banners.svg';
import boy_1 from '../Assets/boy_1.png';
import book_stack from '../Assets/book_stack.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import '../NewsLetter/NewsLetter.jsx'
import NewsLetter from '../NewsLetter/NewsLetter.jsx';


const textUnderImageStyle = {
  fontSize: '25px',
  textAlign: 'center',
  marginTop: '30px',
  color: '#484847',
};

const featuredBooks = [
  {
    name: 'I am not a Boiled Egg',
    description: 'Candy Carson',
    price: '$6.00',
    imageSrc: 'https://static01.nyt.com/images/2018/10/30/books/review/30tinybooks2/merlin_145525644_e5fee950-0474-4af8-b52a-de0c7e7d2a58-superJumbo.jpg',
    imageAlt: 'Book 1',
  },
  {
    name: 'I am not a Boiled Egg',
    description: 'Candy Carson',
    price: '$6.00',
    imageSrc: 'https://static01.nyt.com/images/2018/10/30/books/review/30tinybooks2/merlin_145525644_e5fee950-0474-4af8-b52a-de0c7e7d2a58-superJumbo.jpg',
    imageAlt: 'Book 2',
    isOnSale: true,
  },
  {
    name: 'I am not a Boiled Egg',
    description: 'Candy Carson',
    price: '$6.00',
    imageSrc: 'https://static01.nyt.com/images/2018/10/30/books/review/30tinybooks2/merlin_145525644_e5fee950-0474-4af8-b52a-de0c7e7d2a58-superJumbo.jpg',
    imageAlt: 'Book 1',
  },
  {
    name: 'I am not a Boiled Egg',
    description: 'Candy Carson',
    price: '$6.00',
    imageSrc: 'https://static01.nyt.com/images/2018/10/30/books/review/30tinybooks2/merlin_145525644_e5fee950-0474-4af8-b52a-de0c7e7d2a58-superJumbo.jpg',
    imageAlt: 'Book 1',
  },
  {
    name: 'I am not a Boiled Egg',
    description: 'Candy Carson',
    price: '$6.00',
    imageSrc: 'https://static01.nyt.com/images/2018/10/30/books/review/30tinybooks2/merlin_145525644_e5fee950-0474-4af8-b52a-de0c7e7d2a58-superJumbo.jpg',
    imageAlt: 'Book 1',
  },
  
];

const newBooks = [
  {
    name: 'I am not Boiled Egg',
    description: 'This delightful book is the latest in the series of Ladybird books in the books which have been specially planned to help grown-ups',
    author: 'Candy Carson',
    price: '$6.00',
    imageSrc: ('https://images.ctfassets.net/lzny33ho1g45/55zO1LTzOAAOOb84AhlFD5/7b0646696528f97b12efc5c13b0e9f71/Small_business_books.png'), 
    imageAlt: 'Book 1 Alt Text',
  },
  {
    name: 'I am not Boiled Egg',
    description: 'This delightful book is the latest in the series of Ladybird books in the books which have been specially planned to help grown-ups',
    author: 'Candy Carson',
    price: '$6.00',
    imageSrc: ('https://images.ctfassets.net/lzny33ho1g45/55zO1LTzOAAOOb84AhlFD5/7b0646696528f97b12efc5c13b0e9f71/Small_business_books.png'), 
    imageAlt: 'Book 2 Alt Text',
  },
];

const Home = () => {
  return (
    <div>
      <div className="main-container" style={{ backgroundImage: `url(${banners})` }}>
        <div className="content-container">
          <h1>Educating Our Youth</h1>
          <p>Asala is dedicated to providing the highest quality reading materials to help our youth grow and thrive</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
        <div className="purple-box">
          <div className="circle-container">
            <div className="circle circle-filled" style={{ width: '40px', height: '40px' }}>
            </div>
            <div className="circle circle-empty" style={{ width: '40px', height: '40px', border: '2px solid #fff', borderRadius: '50%', background: 'transparent' }}>
            </div>
            <div className="circle circle-filled" style={{ width: '40px', height: '40px' }}>
            </div>
            <img src={boy_1} alt="Description of the image" style={{ width: '400%', height: 'auto', marginTop: '10px', transform: 'scaleX(-1)' ,marginLeft:'-450px'}} />  
          </div>
        </div>
      </div>

      <div style={textUnderImageStyle}>
        <strong>
          <p>Shop By Categories </p>
        </strong>
       
        <div className="color-boxes-and-image-container">
        <div className="color-boxes-container">
          <div className="color-box red">
          <div className="arrow left">&lt;</div>
            <div className="circle-top"></div>
            <div className="circle-image">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/books-in-circle-icon-Graphics-3393265-1.jpg"
                alt="Picture Books"
                style={{ width: '140%',
                height: '140%',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '-60px auto 30px -9px', }}
              />
            </div>
            <strong><p className="box-text">Picture Books</p></strong>
          </div>
          <div className="color-box green">
            <div className="circle-top"></div>
            <div className="circle-image">

              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/books-in-circle-icon-Graphics-3393265-1.jpg"
                alt="Arabic Grammar"
                style={{ width: '140%',
                height: '140%',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '-60px auto 30px -9px', }}
              />
            </div>
            <strong><p className="box-text">Arabic Grammar</p></strong>
          </div>
          <div className="color-box blue">
            <div className="circle-top"></div>
            <div className="circle-image">
            <img
                src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/books-in-circle-icon-Graphics-3393265-1.jpg"
                alt="Arabic Grammar"
                style={{ width: '140%',
                height: '140%',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '-60px auto 30px -9px', }}
              />
            </div>
            <strong><p className="box-text">Activities</p></strong>
          </div>
          
          <div className="color-box yellow"> 
          <strong><p className="box-text">Reading Series</p></strong>
            <div className="circle-top"></div>
            <div className="circle-image">
            <img
            src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/books-in-circle-icon-Graphics-3393265-1.jpg"
            alt="Arabic Grammar"
            style={{
              width: '140%',
              height: '140%',
              borderRadius: '50%',
              objectFit: 'cover',
              margin: '-60px auto 30px -9px',
            }}
          />
        </div>
        <div className="arrow right">&gt;</div>
      </div>
    </div>

    <div style={{ position: 'relative' }}>
  <img src={book_stack} style={{ width: '100%', marginTop: '20px' }} alt="Book Stack" />
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff', fontSize: '34px' }}>
    <p>Browse By Stage</p>

      <div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '241%', left: '-70%', borderBottom: '2px solid'}}>
          <div style={{ width: '75px', height: '10px', background: '#fff', position: 'absolute', top: '92%', left: '52%', transform: 'translate(-50%, -50%)', borderRadius:'3px' }}></div>
      </div>
      <div style={{ width: '150px', height: '50px', border: '1px solid ', borderRadius: '20px', position: 'absolute', top: '238%', left: '-70%' }}>
          <p style={{ margin: 0, textAlign: 'center', fontSize: '15px', marginTop: '15px' }}>Intermediate Stage</p>
      </div>

      <div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '241%', left: '-70%', borderBottom: '2px solid '}}>
          <div style={{ width: '75px', height: '10px', background: 'yellow', position: 'absolute', top: '92%', left: '52%', transform: 'translate(-50%, -50%)', borderRadius:'3px' }}></div>
      </div>
      <div style={{ width: '150px', height: '50px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '10px' }}>
        <p style={{ margin: 0, textAlign: 'center', fontSize: '15px', marginTop: '15px' }}>Pre-Primary Stage</p>
      </div>

      <div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '10px' }}>
      <div style={{ width: '75px', height: '10px', background: '#33B6C0', position: 'absolute', top: '92%', left: '52%', transform: 'translate(-50%, -50%)', borderRadius:'3px' }}></div>
      </div>
      <div style={{ width: '150px', height: '50px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '175px' }}></div>
      <div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '175px' }}>
      <div style={{ width: '75px', height: '10px', background: '#8DC253', position: 'absolute', top: '92%', left: '52%', transform: 'translate(-50%, -50%)', borderRadius:'3px' }}></div>
            <p style={{ margin: 0, textAlign: 'center', fontSize: '15px', marginTop: '15px' }}>Primary Stage 1st</p>
          </div>

      <div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '175px' }}></div>
      <div style={{ width: '150px', height: '50px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '330px' }}></div>
      <div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '330px' }}>
      <div style={{ width: '75px', height: '10px', background: '#922AA0', position: 'absolute', top: '92%', left: '52%', transform: 'translate(-50%, -50%)', borderRadius:'3px' }}></div>
            <p style={{ margin: 0, textAlign: 'center', fontSize: '15px', marginTop: '15px' }}>Primary Stage 2nd</p>
          </div>

      <div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '330px' }}></div>
      <div style={{ width: '150px', height: '50px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '485px' }}></div>
      <div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '485px' }}>
      <div style={{ width: '75px', height: '10px', background: '#AF1A1F', position: 'absolute', top: '92%', left: '52%', transform: 'translate(-50%, -50%)', borderRadius:'3px' }}></div>
            <p style={{ margin: 0, textAlign: 'center', fontSize: '15px', marginTop: '15px' }}>Primary Stage 3rd</p>
          </div>
      <div style={{ width: '150px', height: '60px', border: '1px solid #fff', borderRadius: '20px', position: 'absolute', top: '230%', left: '-18%', marginLeft: '485px' }}></div>
          </div>
          </div>
          <div style={{ backgroundColor: '#F7F5F6', padding: '50px', ...textUnderImageStyle }}>
        <strong>
          <p style={{ margin: 0 }}>Featured Books</p>
        </strong>

        <div className="featured-cards-container">
        <ArrowBackIosOutlinedIcon style={{ fontSize: '50px', marginTop:'150px' }} />

    {featuredBooks.map((book, index) => (
      <div key={index} className="featured-card">
        
        <img src={book.imageSrc} alt={book.imageAlt} className="featured-image" />
        <h3>{book.name}</h3>
        <p>{book.description}</p>
        <p style={{ color: '#CC2448' }}>Price: {book.price}</p>
        {index === 3 && (
          <div>
            <button className="add-to-cart-button">
              
              <ShoppingCartOutlinedIcon /> ADD TO CART
            </button>
          </div>
        )}
        {index === 1 && book.isOnSale && (
          <div className="sale-text-box">Sale!</div>
        )}
      </div>
    ))}
    <ArrowForwardIosOutlinedIcon style={{ fontSize: '50px', marginTop:'150px' }} />
      </div>
     </div>

          <strong>
          <p style={{ margin: 0, fontSize: '30px' }}>New Books</p>
        </strong>
     <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'row' }}>
        <div className="new-books-container" style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto' }}>
          {newBooks.slice(0, 2).map((book, index) => (
            <div key={index} className="new-book-card" style={{ display: 'flex', flexDirection: 'row', marginRight: '20px' }}>
              <div className="new-book-image-container">
                <img src={book.imageSrc} alt={book.imageAlt} className="new-book-image" />
              </div>
              <div className="new-book-details" style={{ marginLeft: '20px', fontSize:'14px' }}>
                <h3>{book.name}</h3>
                <br></br>
                <p>{book.description}</p>
                <br></br>
                <p>{book.author}</p>
                <br />
                <p style={{ color: '#CC2448', fontWeight: 'bold', fontSize: '20px' }}>{book.price}</p>
                  <button className="add-to-cart-buttons" style={{ color: '#fff', marginTop: '10px',fontSize:'20px' }}>
                  <ShoppingCartOutlinedIcon />ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
       </div>

      <div style={{ marginTop: '100px', display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginRight: '20px', textAlign: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img
              src="https://cdn.create.vista.com/downloads/7891168d-4278-4ed0-b391-6be20532b842_1024.jpeg"
              alt="First Image Alt Text"
              style={{ width: '93%', height: 'auto', borderRadius:'35px' }}
            />
            <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', fontSize: '38px', fontWeight:'bold' }}>
              Promotions and Discounted books
            </p>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img
              src="https://c8.alamy.com/comp/2CFYYN3/miami-floridacoral-gables-barnes-noble-bookstorebook-books-clearance-sign-50-discount-off-discounted-salehalf-price-display-promotion-promotions-2CFYYN3.jpg"
              alt="Second Image Alt Text"
              style={{ width: '97%', height: 'auto', borderRadius:'35px' }}
            />
            <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', fontSize: '58px',fontWeight:'bold' }}>
             Best Seller Books 2022
            </p>
          </div>
         </div>
        </div>
       </div>
      <div>
        {/* Import and render the Newsletter component */}
      <NewsLetter/>
      </div>
      </div>
      </div>
  );
};

export default Home;
