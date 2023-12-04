import './HowItWork.scss';
import { motion } from 'framer-motion';

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

export const textContainer = {
    hidden: {
        opacity: 0,
    },
    show: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
};

export const textVariant2 = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            ease: 'easeIn',
        },
    },
};

const HowItWork = () => {
    return (
        <div id="HowItWork" className="HowItWork flex-col h-fit pr-[12vh] lg:pr-[0] lg:h-screen lg:flex-row">
            <div className="HowItWork-left">
                <h2 className="HowItWork-title text-center md:text-left">How it work</h2>
                <p className="HowItWork-text text-center md:text-left w-[90%] md:w-[25vw]">
                    Unique and powerful suite of software to run your business, brought to you by vision to you work.
                </p>
                <ul className="HowItWork-menus">
                    {menus.map((item, index) => (
                        <motion.li
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 }}
                            key={item.id}
                        >
                            <p className="HowItWork-item-number text-xl md:text-[30px] ">0{item.id}</p>
                            <div>
                                <h3 className="HowItWork-item-title">{item.title}</h3>
                                <p className="HowItWork-item-text">{item.text}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
            <div className="HowItWork-right h-fit p-4 bg-[length:20%] lg:bg-[length:35%] rounded-r-3xl lg:rounded-r-none ">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="HowItWork-right-title  text-xl md:text-[30px]"
                >
                    The Perfect CRM Software: Boost Your Field Sales Team’s Efficiency
                </motion.h2>
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
