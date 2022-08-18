import Header from '../reusables/Header'
import Hero from '../distinct/Hero'
import BodyTwo from '../distinct/BodyTwo'
import BodyThree from '../distinct/BodyThree'
import BodyFour from '../distinct/BodyFour'
import BodyFive from '../distinct/BodyFive'
import Footer from '../reusables/Footer'


export default function LandingPage() {

    return (
        <div className="content">
            <Header/>
            <Hero/>
            <BodyTwo/>
            <BodyThree/>
            <BodyFour/>
            <BodyFive/>
            <Footer/>
        </div>
    )
}