import React from 'react'
import './body.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Body = () => {
  return (
    <>
      <Container fluid>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row className='justify-content-around' id='container'>
              <Col md={6} id='deshboard'>
                  <Row id='deshboard-data'>
                      <Col>
                          <p>Referral Earning</p>
                          <h4>₹ 2,500</h4>
                      </Col>
                      <Col>
                          <p>Total Referrals</p>
                          <h4>7</h4>
                      </Col>
                      <Col>
                          <p>Wallet Balance</p>
                          <h4>₹ 500</h4>
                      </Col>
                  </Row>

                  <Row className='justify-content-around'>
                      <Col md={4} id='withdraw-txt'><div>Withdraw Balance</div></Col>
                  </Row>
              </Col>

              <Col md={4} id='Referral-code'>
                  <h4>Your Referral Code</h4>
                  <div className='border' id='code'>EDCH54</div>
              </Col>
          </Row>
          <h4 id='how-does-work-txt'>How does it work ?</h4>
          </Container>

          <Container fluid>
        <Row className='justify-content-center'>
            <Col md={5}>
                <div>
                    <img src='/groups.png' id='img-data' alt='group-img'></img>
                    <strong id='data'>Invite your Friends</strong>
                    <p className='fluid' id='record'>Share the link tutedude.com with
                          your friends</p>
                </div>
                
                <div>
                <img src='/money.png' id='img-data' alt='money-img'></img>
                <strong id='data'>You get ₹ 200 as referral money</strong>
                  <p className='fluid' id='record'>On total purchase the friend makes, into your wallet</p>
                </div>
                  
                <div>
                <img src='/wallet.png' id='img-data' alt='wallet'></img>
                <strong  id='data'>Transfer money from wallet</strong>
                  <p className='fluid' id='record'>When the wallet balance reaches ₹200 or more, you can withdraw it</p>
                </div>
                  
            </Col>
              <Col md={4}>
                <div>
                <img src='/offer.png' id='img-data' alt='offer'></img>
                <strong  id='data'>Friend purchases any course</strong>
                  <p className='fluid' id='record'>Using your REFERRAL CODE in the payments page</p>
                </div>

                  <div>
                  <img src='/getoff.png' id='img-data' alt='get_offer_img'></img>
                    <strong  id='data'>Your Friend gets ₹ 200 Off</strong>
                  <p className='fluid' id='record'>On his overall fee on successful purchase using your referral code</p>
                  </div>
                  
              </Col>
          </Row>

    </Container>
    <p id='friends'>Friends Who Enrolled</p>
    <p id='tnc'>Terms & Conditions</p>
    </>
  )
}

export default Body