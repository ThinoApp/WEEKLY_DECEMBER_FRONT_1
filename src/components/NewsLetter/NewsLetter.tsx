import './NewsLetter.scss';
const NewsLetter = () => {
    return (
        <div className="NewsLetter">
            <div className="NewsLetter-main">
                <div className="left">
                    <h3>Sell | Serve | Automate</h3>
                    <p>
                        Boost Enrolment And Manage Student Lifecyle <br /> With Our 360° CRM
                    </p>
                </div>
                <div className="right">
                    <label htmlFor="">*Your Business Email Address</label>
                    <div>
                        <input type="text" placeholder="Email" />
                        <button>Try Now</button>
                    </div>
                </div>
            </div>
            <img src="/WEEKLY_DECEMBER_FRONT_1/assets/images/NewsLetter.png" alt="news letter image" />
        </div>
    );
};
export default NewsLetter;
