import Header from '../Header/Header';
import './Heading.scss';
const Heading = () => {
    return (
        <div className="Heading">
            <Header />
            <div className="Heading-content">
                <h1 className="Heading-title">
                    The CRM Platform <br /> Your Whole Business <br />
                    Will Love
                </h1>
                <p className="Heading-text">
                    Provide excellent customer service. Answer more <br /> tickets all-in-one Primarily software.
                </p>
                <div className="Heading-btn">
                    <button className="Heading-btn-primary03">Get Started</button>
                    <button className="Heading-btn-simple">How It Work</button>
                </div>
                <hr />
                <img src="/assets/images/Five Star.png" alt="five star" className="Heading-star" />
                <hr />
            </div>
        </div>
    );
};
export default Heading;
