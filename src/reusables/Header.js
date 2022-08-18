import logo from '../images/logo.png'
import style from './Header.module.css'

export default function Header() {

    return (
      <div className={`${style.header}`}>
      <img src={logo} alt="CatRandom Logo" className={style.logo}></img>
      <div className={style.navigation}>
        <button> Home </button>
        <button> SignUp / Login </button>
        <button> About Us </button>
      </div>
    </div>

    )
}