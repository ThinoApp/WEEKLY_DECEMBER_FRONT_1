import './WhyChooseUs.scss';
import { motion } from 'framer-motion';
const menuList = [
    {
        id: 1,
        icon: '/WEEKLY_DECEMBER_FRONT_1/assets/images/icons/whychoose-2.png',
        title: 'CRM Security',
        subTitle: 'cards and make more sales while chatting',
    },
    {
        id: 2,
        icon: '/WEEKLY_DECEMBER_FRONT_1/assets/images/icons/whychoose-1.png',
        title: 'Marketing Hub',
        subTitle: 'Show off your goods in elegant product cards and mak.',
    },
];
const WhyChooseUs = () => {
    return (
        <div id="WhyChooseUs" className="WhyChooseUs flex-col h-fit md:flex-row md:h-screen">
            <motion.img
                initial={{ x: 100, y: 100, scaleX: -1 }}
                whileInView={{ x: 0, y: 0, scaleX: -1 }}
                transition={{ delay: 0.7, type: 'tween', duration: 0.2 }}
                src="/WEEKLY_DECEMBER_FRONT_1/assets/images/bgCoreFeature.png"
                className="bg-whychoose-us"
            />
            <motion.div
                initial={{ opacity: 0, rotate: '-90deg', radius: '999px' }}
                whileInView={{
                    opacity: 1,
                    rotate: '0deg',
                    radius: '0px',
                }}
                transition={{ duration: 1, type: 'spring', delay: 0.5 }}
                className="WhyChooseUs-content w-full md:w-1/2"
            >
                <h2 className="WhyChooseUs-content-title">Ways a project management tool can help your team</h2>
                <p className="WhyChooseUs-content-subtitle">
                    Unique and powerful suite of software to run your entire business, brought to you by a company with
                    the long term vision to transform the way you work.
                </p>
                <ul className="WhyChooseUs-content-list flex-col mobile:flex-row">
                    {menuList.map((item) => (
                        <li key={item.id} className="items-center w-full mobile:w-auto mobile:items-start">
                            <img src={item.icon} alt="icon why choose us" />
                            <h3>{item.title}</h3>
                            <p>{item.subTitle}</p>
                        </li>
                    ))}
                </ul>
                <button className="w-full mobile:w-[150px]">Get Started</button>
            </motion.div>
            <img
                src="/WEEKLY_DECEMBER_FRONT_1/assets/images/imageWhyChooseUs.png"
                alt="why choose us"
                className="w-full md:w-[45%]"
            />
        </div>
    );
};
export default WhyChooseUs;
