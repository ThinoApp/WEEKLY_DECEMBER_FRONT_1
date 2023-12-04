import './Features.scss';
import { motion } from 'framer-motion';

const subContent = [
    {
        id: 1,
        icon: '/WEEKLY_DECEMBER_FRONT_1/assets/images/icons/01.png',
        title: 'Powerful Settings',
        text: 'Provide excellent customer service.Answer more tickets.',
    },
    {
        id: 2,
        icon: '/WEEKLY_DECEMBER_FRONT_1/assets/images/icons/02.png',
        title: 'User Friendly',
        text: 'Use Timeline to plan projects right how the pieces fit together.',
    },
    {
        id: 3,
        icon: '/WEEKLY_DECEMBER_FRONT_1/assets/images/icons/03.png',
        title: 'Integrated platform',
        text: 'Vivamus massa eleifend etiam neque odio feugiat dolor est.',
    },
];
const Features = () => {
    return (
        <div className="Features" id="Features">
            <motion.h2 initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="Features-title">
                Explore Premium Features
            </motion.h2>
            <motion.p
                className="Features-text"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: 'tween', duration: 0.8 }}
            >
                Unique and powerful suite of software to run your entire business, brought to you by a company with the
                long term vision to transform the way you work.
            </motion.p>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, type: 'tween', duration: 0.2 }}
                className="Features-sub-content flex-col md:flex-row"
            >
                {subContent.map((item, index) => (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.7, type: 'tween' }}
                        className="Features-sub-content-item"
                        key={item.id}
                    >
                        <img src={item.icon} className="Features-icon" alt="icon" />
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
export default Features;
