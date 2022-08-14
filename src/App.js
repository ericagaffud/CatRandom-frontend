import logo from './images/logo.png'
import network from './images/Network.png'
import frame from './images/frame.png'
import first from './images/first.png'
import second from './images/second.png'
import third from './images/third.png'

function App() {
  return (
    <div className="content">
      <div className="header">
        <img src={logo} alt="CatRandom Logo" className="logo"></img>
        <div className="navigation">
          <button> Home </button>
          <button> SignUp / Login </button>
          <button> About Us </button>
        </div>
      </div>

      <div className="body1">
        <div className="container">
          <h1> Build Your Connections <br></br> Everywhere </h1>
          <button className="transparent"> SignUp / Login </button>
          <button> Start Chatting </button>
        </div>
        <div>
          <img src={network} alt="Networks" className="network"></img>
        </div>
      </div>

      <div className="body2">
        <img src={frame} alt="catr frame" className="frame"></img>
        <img src={frame} alt="catr frame" className="frame framex"></img>
      </div>

      <div className="body3">
        <div className="cont">
          <div className="imgbox">
            <img src={first} alt=""></img>
          </div>
          <h4> Increse your <br></br> pressence online </h4>
        </div> 
        <div className="cont">
          <div className="imgbox">
            <img src={second} alt="" className="sec"></img>
          </div>
          <h4> Chat with other <br></br> professionals </h4>
        </div>
        <div className="cont">
          <div className="imgbox">
            <img src={third} alt=""></img>
          </div>
          <h4> Share your expertise <br></br> and learn with others </h4>
        </div>
      </div>

      <div className="body4">
        <img src={logo} alt="logo"></img>
        <h2> Support Us </h2>
      </div>
      
      <div className="body5">
        <h2> Meet the developers </h2>
        <div className="devcon">
          
        </div>
      </div>

      <div className="footer">

      </div>
    </div>
  );
}

export default App;
