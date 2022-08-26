import network from '../images/frame.svg'
import man1 from '../images/man1.svg'
import man2 from '../images/man2.svg'
import lady1 from '../images/lady1.svg'
import lady2 from '../images/lady2.svg'
import lady3 from '../images/lady3.svg'
import style from './Hero.module.css'
export default function Hero(){
    return(
        <div>
        <div className={`${style.container}`}>
          <h1> Build Your Connections <br></br> Everywhere </h1>
          <button className={`${style.transparent}`}> SignUp / Login </button>
          <button> Start Chatting </button>
        </div>
        <div className={`${style.network}`} >
          <img src={network} alt="Networks" ></img>
          <img src={man1} className={`${style.avatar} ${style.man1}`} alt="man in black clothes" />
          <img src={man2} className={`${style.avatar} ${style.man2}`} alt="another man" />
          <img src={lady1} className={`${style.avatar} ${style.lady1} `} alt="lady1" />
          <img src={lady2} className={`${style.avatar} ${style.lady2}`} alt="lady2" />
          <img src={lady3} className={`${style.avatar} ${style.lady3}`} alt="lady3" />
        </div>
      </div>
    )
}