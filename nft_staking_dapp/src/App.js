import './App.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import 'sf-font';

function App() {
  return (
    <div className="App nftapp">
         <nav className="navbar navbarfont navbar-expand-md navbar-dark bg-dark mb-4">
          <div className="container-fluid" style={{ fontFamily: "SF Pro Display" }}>
            <a className="navbar-brand px-5" style={{ fontWeight: "800", fontSize: '25px' }} href="#"></a><img src="cloud.png" width="7%" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 px-3 mb-md-0" style={{ fontSize: "25px" }}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">List NFTs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Bridge NFTs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='px-5'>
            <input id="connectbtn" type="button" className="connectbutton" style={{ fontFamily: "SF Pro Display" }} value="Connect Your Wallet" />
          </div>
        </nav>
        <div className='container container-style'>
          <div className='col'>
            <body className='nftminter'>
              <form>
                  <div className="row pt-3">
                  <div>
                    <h1 className="pt-2" style={{ fontWeight: "30" }}>NFT Minter</h1>
                  </div>
                  <h3>/1000</h3>
                  <h6>Your Wallet Address</h6>
                  <div className="pb-3" id='wallet-address' style={{
                    color: "#39FF14",
                    fontWeight: "400",
                    textShadow: "1px 1px 1px black",
                  }}>
                    <label for="floatingInput">Please Connect Wallet</label>
                  </div>
                </div>
                <div>
                  <label style={{ fontWeight: "300", fontSize: "18px" }}>Select NFT Quantity</label>
                </div>
                <ButtonGroup size="lg"
                  aria-label="First group"
                  name="amount"
                  style={{ boxShadow: "1px 1px 5px #000000" }}
                >
                  <Button value="1">1</Button>
                  <Button value="2">2</Button>
                  <Button value="3">3</Button>
                  <Button value="4">4</Button>
                  <Button value="5">5</Button>
                </ButtonGroup>
                <h6 className="pt-2" style={{ fontFamily: "SF Pro Display", fontWeight: "300", fontSize: "18px" }}>Buy with your preferred crypto!</h6>
                <div className="row px-2 pb-2 row-style">
                  <div className="col ">
                    <Button className="button-style" style={{ border: "0.2px", borderRadius: "14px", boxShadow: "1px 1px 5px #000000" }}>
                      <img src={"cloud_token_1.png"} width="100%" />
                    </Button>
                  </div>
                  <div className="col">
                    <Button className="button-style" style={{ border: "0.2px", borderRadius: "14px", boxShadow: "1px 1px 5px #000000" }}>
                      <img src="optimism.png" width="70%" />
                    </Button>
                  </div>
                  <div className="col">
                    <Button className="button-style" style={{ border: "0.2px", borderRadius: "14px", boxShadow: "1px 1px 5px #000000" }}>
                      <img src="polygon.png" width="70%" />
                    </Button>
                  </div>
                  <div>
                    <div id='txout' style={{ color: "#39FF14", marginTop: "5px", fontSize: '20px', fontWeight: '500', textShadow: "1px 1px 2px #000000" }}>
                      <p style={{ fontSize: "20px" }}>Transfer Status</p>
                    </div>
                  </div>
                </div>
              </form>
            </body>
          </div>
        </div>
    </div>
  );
}

export default App;