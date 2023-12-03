import './HowItWork.scss';

const menus = [
    {
        id: 1,
        title: 'Download our app',
        text: 'CentraHub CRM automatically logs in any reactions made by your leads, prospects',
    },
    {
        id: 2,
        title: 'List Your Company Detail',
        text: 'Customers making it easier for your sales team members audience they make contact.',
    },
    {
        id: 3,
        title: 'Enjoy Your Business',
        text: 'customers, making it easier for your sales team members audience before make contact.',
    },
];
const HowItWork = () => {
    return (
        <div className="HowItWork">
            <div className="HowItWork-left">
                <h2 className="HowItWork-title">How it work</h2>
                <p className="HowItWork-text">
                    Unique and powerful suite of software to run your business, brought to you by vision to you work.
                </p>
                <ul className="HowItWork-menus">
                    {menus.map((item) => (
                        <li key={item.id}>
                            <p className="HowItWork-item-number">0{item.id}</p>
                            <div>
                                <h3 className="HowItWork-item-title">{item.title}</h3>
                                <p className="HowItWork-item-text">{item.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="HowItWork-right">
                <h2 className="HowItWork-right-title">
                    The Perfect CRM Software: Boost Your Field Sales Team’s Efficiency
                </h2>
                <p className="HowItWork-right-text HowItWork-right-text--highlight">
                    Depending on the Sales Approaches Standardize a Marketing Process
                </p>
                <p className="HowItWork-right-text">
                    Unique and powerful suite of software to run your entire business, brought to you by a company.
                </p>
                <div className="HowItWork-right-btn">
                    <button>
                        <img src="/WEEKLY_DECEMBER_FRONT_1/assets/images/iphone.png" />
                        <div>
                            <p>Download On The</p>
                            <h4>App Store</h4>
                        </div>
                    </button>
                    <button>
                        <img src="/WEEKLY_DECEMBER_FRONT_1/assets/images/playstore.png" />
                        <div>
                            <p>Get It On</p>
                            <h4>Google Play</h4>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default HowItWork;
