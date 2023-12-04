import { FiChevronUp } from 'react-icons/fi';
import './Footer.scss';
import { motion } from 'framer-motion';
const TopFooter = () => {
    return (
        <div className="Footer-top">
            <div className="Footer-logo">
                <img src="/WEEKLY_DECEMBER_FRONT_1/assets/images/Logo.png" alt="logo" />
                <h2>PrimeCRM</h2>
            </div>
            <ul className="Footer-menu">
                <li>
                    <img src="/WEEKLY_DECEMBER_FRONT_1/assets/images/Instagram.png" />
                </li>
                <li>
                    <img src="/WEEKLY_DECEMBER_FRONT_1/assets/images/Facebook.png" />
                </li>
                <li>
                    <img src="/WEEKLY_DECEMBER_FRONT_1/assets/images/Twiter.png" />
                </li>
                <li>
                    <img src="/WEEKLY_DECEMBER_FRONT_1/assets/images/Linked in.png" />
                </li>
                <li>
                    <img src="/WEEKLY_DECEMBER_FRONT_1/assets/images/Youtube.png" />
                </li>
            </ul>
        </div>
    );
};

const MiddleFooter = () => {
    return (
        <div className="Footer-middle">
            <div className="Footer-menu-container">
                <h3 className="Footer-title">Usefull Link</h3>
                <ul className="Footer-list">
                    <li>Solution</li>
                    <li>Industries</li>
                    <li>Products</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className="Footer-menu-container">
                <h3 className="Footer-title">Service</h3>
                <ul className="Footer-list">
                    <li>Sale</li>
                    <li>Marketing</li>
                    <li>Real Estate</li>
                    <li>Automotive</li>
                    <li>Education</li>
                </ul>
            </div>
            <div className="Footer-menu-container">
                <h3 className="Footer-title">Contact Us</h3>
                <ul className="Footer-list">
                    <li>
                        1700 W Blancke St, <br /> kiyev port south USA, American
                    </li>
                    <li>
                        +3255 456 789 <br /> mail@primarily.com
                    </li>
                </ul>
            </div>
            <div className="Footer-menu-container">
                <h3 className="Footer-title">
                    Our Latest News
                    <span className="Arrow-up-container">
                        <FiChevronUp />
                    </span>
                </h3>
                <div className="read-now-container">
                    <img src="/WEEKLY_DECEMBER_FRONT_1/assets/images/footer_read_now.png" alt="read now" />
                    <button>Read Now</button>
                </div>
            </div>
        </div>
    );
};

const Copyright = () => {
    return <p className="Footer-copyright">Copyright © Primarly | Designed by VictorFlow Templates </p>;
};
const Footer = () => {
    return (
        <motion.div
            initial={{ x: -100, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
                delay: 0.3,
                type: 'tween',
            }}
            className="Footer"
        >
            <TopFooter />
            <MiddleFooter />
            <Copyright />
        </motion.div>
    );
};
export default Footer;
