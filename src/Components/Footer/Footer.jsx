.section__padding {
  padding: 2rem 2rem;
  color: #484847;
  width: 50%;
  margin: 0 auto;
}

.footer {
  background: white;
  width: 100%;
}

.sb__footer {
  display: flex;
  flex-direction: column;
}

.sb__footer-links {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: left;
  margin-top: 0.5rem;
}

.sb__footer-links_div {
  width: 70px;
  margin: 0.5rem;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: #484847;
}

a {
  color: #484847;
  text-decoration: none;
}

.socialmedia {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

.socialmedia img {
  width: 80%;
}

.sb__footer-links_div h4 {
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 0.3rem 0;
}

.sb__footer-links_div p {
  font-size: 12px;
  line-height: 15px;
  margin: 0.3rem 0;
  cursor: pointer;
}

.sb__footer-below {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.2rem;
}

.sb__footer-below-links {
  display: flex;
  flex-direction: row;

}

.sb__footer-below-links p {
  font-size: 13px;
  line-height: 15px;
  margin-left: 2rem;
  color: #484847;
  font-weight: 600;
  margin-top: 7px;
}

hr {
  color: #484847;
  width: 100%;
}

.sb__footer-copyright p {
  font-size: 13px;
  line-height: 15px;
  color: #484847;
  font-weight: 600;
}

.sb__footer-section {
  margin-bottom: 10px;
}

.payment-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.payment-text {
  font-size: 16px;
  margin-bottom: 10px;
}

.payment-methods {
  display: flex;
  justify-content: center;
  height: 30px;
}

@media screen and (max-width: 850px) {
  .sb__footer-heading h1 {
    font-size: 44px;
    line-height: 5px;
  }
}

@media screen and (max-width: 550px) {
  .sb__footer-heading h1 {
    font-size: 34px;
    line-height: 42px;
  }
  .sb__footer-below-links div {
    margin: 1rem 0;
  }
  .sb__footer-btn p {
    font-size: 14px;
    line-height: 20px;
  }
  .sb__footer-below {
    flex-direction: column;
    justify-content: left;
  }

  .sb__footer-below-links {
    flex-direction: column;
  }
  .sb__footer-below-links p {
    margin-left: 0rem;
    margin-top: 1rem;
  }
}

@media screen and (max-width: 400px) {
  .sb__footer-heading h1 {
    font-size: 27px;
    line-height: 38px;
  }
}
