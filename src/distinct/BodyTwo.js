import frame from '../images/frame.png'
import style from './BodyTwo.module.css'

export default function BodyTwo(){
    return (
        <div className={`${style.body2}`}>
            <img src={frame} alt="catr frame" className={`${style.frame}`}></img>
            <img src={frame} alt="catr frame" className={`${style.frame} ${style.framex}`}></img>
        </div>
    )
}