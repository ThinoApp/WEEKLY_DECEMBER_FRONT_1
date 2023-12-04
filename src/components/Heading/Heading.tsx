import Header from '../Header/Header';
import './Heading.scss';
import { motion } from 'framer-motion';
const Heading = () => {
    return (
        <div className="Heading">
            <motion.img
                initial={{ opacity: 0, rotate: '-90deg', radius: '999px' }}
                whileInView={{
                    opacity: 1,
                    rotate: '0deg',
                    radius: '0px',
                }}
                transition={{ duration: 1, type: 'spring', delay: 0.5 }}
                src="/WEEKLY_DECEMBER_FRONT_1/assets/images/bgHeading.png"
                alt="bg-heading"
                className="bg-heading origin-top"
            />
            <Header />
            <div className="Heading-content">
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.3,
                    }}
                    className="Heading-title text-[32px] sm:text-[44px]"
                >
                    The CRM Platform <br /> Your Whole Business <br />
                    Will Love
                </motion.h1>
                <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="Heading-text"
                >
                    Provide excellent customer service. Answer more <br /> tickets all-in-one Primarily software.
                </motion.p>
                <div className="Heading-btn">
                    <button className="Heading-btn-primary03">Get Started</button>
                    <button className="Heading-btn-simple">How It Work</button>
                </div>
                <hr />
                <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.8 }}
                    src="/WEEKLY_DECEMBER_FRONT_1/assets/images/Five Star.png"
                    alt="five star"
                    className="Heading-star"
                />
                <hr />
            </div>
        </div>
    );
};
export default Heading;
