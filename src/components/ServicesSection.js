import clock from '../img/clock.svg';
import money from '../img/money.svg';
import chicken from '../img/chicken.svg';
import blood from '../img/blood.svg';
import home2 from '../img/home2.png';

const ServicesSection = () => {

    return (
        <div className="services">
            <div className="description">
                <h2>High <span>Quality</span> Services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img alt="clock icon" src={clock} />
                            <h3>Efficient</h3>
                        </div>
                        <p> lorem ipsum sanguine la doctoria </p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt="chicken icon" src={chicken} />
                            <h3>Yummy</h3>
                        </div>
                        <p> lorem herbert lawrence horse guts</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt="money icon" src={money} />
                            <h3>Bills</h3>
                        </div>
                        <p> lorem eternity sonata snorlax salah</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt="blood icon" src={blood} />
                            <h3>Blood</h3>
                        </div>
                        <p>lorem atelier sudoku fate resonance</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="home" />
            </div>
        </div>
    )
}

export default ServicesSection