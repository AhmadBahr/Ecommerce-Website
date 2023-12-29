import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-section">
            <h4>CUSTOMER</h4>
            <a href="/Login / Register">
              <p>Login / Register</p>
            </a>
            <a href="/My Acount">
              <p>My Account</p>
            </a>
            <a href="/Terms & Condtions">
              <p>Terms & Conditions</p>
            </a>
          </div>

          <div className="sb__footer-section">
            <h4>QUICK LINKS</h4>
            <a href="/Explore Books">
              <p>Explore Books</p>
            </a>
            <a href="/About Asala">
              <p>About Asala</p>
            </a>
            <a href="/View Catalog">
              <p>View Catalog</p>
            </a>
          </div>

          <div className="sb__footer-section">
            <h4>SOCIAL MEDIA</h4>
            <p style={{ marginRight: '20px' }}></p>
            <div className="socialmedia">
            <p style={{ marginRight: '10px' }}>
              <FacebookIcon style={{ width: '30px', height: '30px' }} /></p>
             <p style={{ marginRight: '10px' }}><PinterestIcon alt="" style={{ width: '30px', height: '30px' }} /></p>
            <p style={{ marginRight: '10px' }}><InstagramIcon style={{ width: '30px', height: '30px' }} /></p>
           <p><TwitterIcon style={{ width: '30px', height: '30px' }} /></p>
          </div>
          </div>
          <div className="sb__footer-section">
          <h4>CALL US</h4>
          <a href="/Beirut">
            <p style={{ color: '#cc2448', textDecoration: 'none' }}>Beirut</p>
            <p style={{ color: '#cc2448', textDecoration: 'underline' }}>
              <a href="tel:+9611833217" style={{ color: '#cc2448', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid darkpink' }}>+961 1 83 32 17</a>
            </p>
          </a>
          <a href="/Istanbul">
            <p style={{ color: '#cc2448', textDecoration: 'none' }}>Istanbul</p>
            <p style={{ color: '#cc2448', textDecoration: 'underline' }}>
              <a href="tel:+9611833217" style={{ color: '#cc2448', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid darkpink' }}>+961 1 83 32 17</a>
            </p>
          </a>
        </div>

        </div>
        <hr style={{ color: 'grey', margin: '10px 0' }} />
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              Copyright &#169; {new Date().getFullYear()} Asala Publishers. All rights reserved
            </p>
          </div>
          <div className="sb__footer-below-links">
          <div className="payment-methods">
          <p>Payment Methods</p>
        <img src="https://asalapublishers.com/assets/img/f1.svg" alt="MoneyGram Logo" />
          <img src="https://asalapublishers.com/assets/img/f2.svg" alt="Western Union Logo" />
          <img src="https://asalapublishers.com/assets/img/f3.svg" alt="Visa Logo" />
          <img src="https://asalapublishers.com/assets/img/f4.svg" alt="MasterCard Logo" />
          <img src="https://asalapublishers.com/assets/img/f5.svg" alt="Discover Logo" />
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" data-name="american express" id="american-express"><path fill="#fff" fill-rule="evenodd" d="M0 0h300v300H0Z" data-name="Path 27"></path><path fill="#0077a6" fill-rule="evenodd" d="M13.204 276.566h-.858c0-.428-.215-1.072-.215-1.289s0-.641-.644-.641h-1.289v1.93h-.644v-4.51h1.933c.859 0 1.5.216 1.5 1.072a1.258 1.258 0 0 1-.428 1.072 1.121 1.121 0 0 1 .428.861v.858c0 .216 0 .216.215.216v.428Zm-.858-3.219c0-.644-.43-.644-.644-.644h-1.5v1.289h1.285c.43 0 .859-.217.859-.645Zm3.65.858a4.816 4.816 0 0 0-4.938-4.724 4.767 4.767 0 0 0-4.724 4.724 4.832 4.832 0 1 0 9.662 0Zm-.644 0a4.127 4.127 0 0 1-4.294 4.079 3.948 3.948 0 0 1-4.079-4.079 4.077 4.077 0 0 1 4.079-4.079 4.269 4.269 0 0 1 4.294 4.079Zm264.512-86.738c0 6.442-4.079 9.444-11.38 9.444H254.53v-6.442h13.953a4.451 4.451 0 0 0 2.794-.641 2.734 2.734 0 0 0 .858-1.933 3.269 3.269 0 0 0-.858-2.146 3.726 3.726 0 0 0-2.577-.644c-6.653-.216-15.028.213-15.028-9.232 0-4.3 2.791-9.019 10.3-9.019h14.392v6.442h-13.316a5.092 5.092 0 0 0-2.791.428 3.076 3.076 0 0 0-1.072 2.363 2.34 2.34 0 0 0 1.5 2.149 10.977 10.977 0 0 0 2.794.428h3.863c4.079 0 6.657.858 8.375 2.363a9.277 9.277 0 0 1 2.147 6.44Zm-30.273-6.442c-1.718-1.505-4.3-2.363-8.375-2.363h-3.863a11.01 11.01 0 0 1-2.791-.428 2.336 2.336 0 0 1-1.5-2.149 2.518 2.518 0 0 1 1.072-2.363 5.086 5.086 0 0 1 2.791-.428h13.312v-6.438h-14.386c-7.73 0-10.308 4.724-10.308 9.019 0 9.444 8.375 9.016 15.031 9.232a3.716 3.716 0 0 1 2.574.644 3.279 3.279 0 0 1 .861 2.146 2.729 2.729 0 0 1-.861 1.933 4.882 4.882 0 0 1-2.791.641h-13.955v6.442h13.956c7.3 0 11.379-3 11.379-9.444a9.263 9.263 0 0 0-2.146-6.442Zm-27.482 9.662H205.15v-6.012h16.53v-6.009h-16.53v-5.584h16.958v-6.226h-24.044v30.057h24.044v-6.225Zm-31.776-22.331c-2.363-1.289-5.153-1.505-8.8-1.505h-16.53v30.057h7.3v-10.946h7.73c2.574 0 4.079.216 5.153 1.289 1.289 1.5 1.289 4.079 1.289 6.012v3.648h7.083v-5.8c0-2.791-.213-4.079-1.072-5.581a8.372 8.372 0 0 0-3.648-2.577 8.272 8.272 0 0 0 5.153-7.944c-.007-3.431-1.296-5.364-3.658-6.653Zm-40.793-1.5h-22.976l-9.232 9.877-8.8-9.877H79.547v30.057h28.557l9.232-9.877 8.8 9.877h13.956v-10.091h9.018c6.225 0 12.454-1.718 12.454-10.092 0-8.158-6.443-9.877-12.026-9.877Zm35 12.454a8.92 8.92 0 0 1-3.435.428l-8.8.216v-6.873h8.8a5.822 5.822 0 0 1 3.435.644 2.731 2.731 0 0 1 1.5 2.577 3.752 3.752 0 0 1-1.505 3.006Zm-35 1.5h-9.447v-7.73h9.447c2.577 0 4.294 1.075 4.294 3.651s-1.718 4.079-4.294 4.079Zm-27.7 1.072 11.164-11.807v24.261Zm-17.391 8.8H86.632v-6.012h15.887v-6.009H86.632v-5.584h18.032l7.944 8.8-8.158 8.8Zm155.443-45.518h-10.3l-13.528-22.539v22.544h-14.6l-2.794-6.657h-15.025l-2.791 6.657h-8.375c-3.435 0-7.944-.859-10.518-3.436-2.363-2.576-3.651-6.011-3.651-11.379 0-4.509.644-8.588 3.863-11.808 2.146-2.363 6.012-3.435 10.949-3.435h6.87v6.445h-6.87c-2.574 0-4.079.43-5.581 1.718-1.289 1.289-1.933 3.65-1.933 6.87s.644 5.583 1.933 7.086c1.072 1.072 3.007 1.5 4.937 1.5h3.222l10.3-23.616h10.736l12.028 28.342v-28.345h11.165l12.667 20.826v-20.826h7.3v30.058Zm-85.228-30.053h-7.3v30.058h7.3v-30.058Zm-15.245 1.289c-2.363-1.289-4.937-1.289-8.587-1.289h-16.536v30.058h7.085v-10.951h7.729c2.577 0 4.3.215 5.368 1.289 1.289 1.5 1.072 4.081 1.072 5.8v3.864h7.3v-6.015c0-2.576-.213-3.864-1.286-5.368a8.983 8.983 0 0 0-3.435-2.576 8.525 8.525 0 0 0 5.153-7.944 7.437 7.437 0 0 0-3.864-6.87Zm-30.273 22.544h-16.75v-6.012h16.532v-6.226h-16.532v-5.368h16.747v-6.225h-24.046v30.058h24.046v-6.227Zm-29.417-23.833H87.921l-8.8 20.4-9.447-20.4H58.077v28.34l-12.238-28.34H35.105l-12.882 30.058h7.729l2.791-6.657h15.028l2.791 6.657h14.602v-23.613l10.52 23.616h6.225l10.519-23.616v23.616h7.3v-30.061Zm116.37 16.961-4.94-11.808-4.937 11.808Zm-62.264-4.722a6.562 6.562 0 0 1-3.65.644h-8.8v-6.655h8.8a9.48 9.48 0 0 1 3.65.43 3.194 3.194 0 0 1 1.289 2.791 2.957 2.957 0 0 1-1.29 2.79Zm-118.517 4.722 4.938-11.808 4.938 11.808ZM278.147 20.856H22.007v108.21l8.8-19.967h18.681l2.577 4.938v-4.938h21.899l4.938 10.734 4.724-10.734h69.778c3.219 0 6.009.644 8.158 2.361v-2.361h19.108v2.361c3.219-1.718 7.3-2.361 12.023-2.361h27.7l2.577 4.938v-4.938h20.4l3.007 4.938v-4.938h19.965v42.081h-20.18l-3.863-6.44v6.44h-25.128l-2.791-6.87h-6.229l-2.791 6.87h-13.096a25.728 25.728 0 0 1-11.593-2.576v2.576H149.54v-9.662c0-1.289-.215-1.5-1.074-1.5h-1.072v11.164H87.276v-5.368l-2.146 5.368H72.464l-2.146-5.153v5.153H46.054l-2.576-6.87h-6.227l-2.791 6.87H22.007v126.887h256.14V200.99a26.287 26.287 0 0 1-10.521 1.933h-18.68v-2.577c-2.146 1.72-6.012 2.577-9.66 2.577h-58.83v-9.66c0-1.289-.213-1.289-1.289-1.289h-1.072v10.949h-19.324v-11.379c-3.219 1.5-6.87 1.5-10.09 1.5h-2.147v9.877h-23.617l-5.581-6.442-6.225 6.442H73.105v-42.08h38.646l5.583 6.439 6.012-6.439h25.979c3 0 7.944.428 10.09 2.574v-2.574h23.187c2.363 0 6.873.428 9.877 2.574v-2.574h35v2.576c1.933-1.718 5.584-2.574 8.8-2.574h19.537v2.574a15.526 15.526 0 0 1 9.019-2.574h13.312Z" data-name="Path 28"></path></svg>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
