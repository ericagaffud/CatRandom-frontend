import network from '../images/Network.png'
import style from './Hero.module.css'
export default function Hero(){
    return(
        <div>
        <div className={`${style.container}`}>
          <h1> Build Your Connections <br></br> Everywhere </h1>
          <button className={`${style.transparent}`}> SignUp / Login </button>
          <button> Start Chatting </button>
        </div>
        <div>
          <img src={network} alt="Networks" className={`${style.network}`}></img>
        </div>
      </div>
    )
}