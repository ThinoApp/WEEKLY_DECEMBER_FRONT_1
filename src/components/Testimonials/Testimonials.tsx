import './Testimonials.scss';
import { MdStar } from 'react-icons/md';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Testimonials = () => {
    return (
        <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{
                delay: 0.2,
            }}
            className="Testimonials"
        >
            <div className="Testimonials-arrow-btn">
                <div className="left">
                    <FiChevronLeft className="icon" size={24} />
                </div>
                <div className="right">
                    <FiChevronRight className="icon" size={24} />
                </div>
            </div>
            <img src="/WEEKLY_DECEMBER_FRONT_1/assets/images/Pattern.png" alt="pattern" />
            <div className="Testimonials-info">
                <img src="/WEEKLY_DECEMBER_FRONT_1/assets/images/Phtoo.png" alt="profil" />
                <h2>
                    <span>"</span>Adam Chen
                </h2>
                <p>Analyst</p>
                <div className="rating-container">
                    <MdStar size={24} color="#FFB545" />
                    <MdStar size={24} color="#FFB545" />
                    <MdStar size={24} color="#FFB545" />
                    <MdStar size={24} color="#FFB545" />
                    <MdStar size={24} color="#FFB545" />
                </div>
                <p>
                    “ PrimeCRM Is The Most Intuitive And Modern Live Chat We Found. Live Chat Obviously Made
                    <span> Our Users Happier </span>
                    And Our Service Department More Efficient 😇
                </p>
            </div>
            <div className="Testimonials-bottom">
                <div className="Testimonials-bottom-item">
                    <h4>
                        4.9<span className="text-[#47CFFF]">/</span>5{' '}
                    </h4>
                    <p>User Rating</p>
                </div>
                <div className="Testimonials-bottom-item">
                    <h4>
                        350<span className="text-[#FFB545]">K</span>+{' '}
                    </h4>
                    <p>Customers</p>
                </div>
                <div className="Testimonials-bottom-item">
                    <h4>
                        99<span className="text-[#47DD56]">+</span>{' '}
                    </h4>
                    <p>Team Members</p>
                </div>
                <div className="Testimonials-bottom-item">
                    <h4>
                        41<span className="text-[#FF5454]">M</span>+{' '}
                    </h4>
                    <p>Current Users</p>
                </div>
            </div>
        </motion.div>
    );
};
export default Testimonials;
