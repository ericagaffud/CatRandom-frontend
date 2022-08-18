import first from '../images/first.png'
import second from '../images/second.png'
import third from '../images/third.png'
import style from './BodyThree.module.css'

export default function BodyThree() {

    return (
        <div className={style.body3}>
            <div className={style.cont}>
                <div className={style.imgbox}>
                    <img src={first} alt=""></img>
                </div>
                <h4>
                    Increse your
                    <br></br>
                    pressence online
                </h4>
            </div>
            <div className={style.cont}>
                <div className={style.imgbox}>
                    <img src={second} alt="" className="sec"></img>
                </div>
                <h4>
                    Chat with other
                    <br></br>
                    professionals
                </h4>
            </div>
            <div className={style.cont}>
                <div className={style.imgbox}>
                    <img src={third} alt=""></img>
                </div>
                <h4>
                    Share your expertise
                    <br></br>
                    and learn with others
                </h4>
            </div>
        </div>
    )
}