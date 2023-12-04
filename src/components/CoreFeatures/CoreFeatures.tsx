import './CoreFeatures.scss';
import { motion } from 'framer-motion';
const CoreFeatures = () => {
    return (
        <div className="CoreFeatures flex-col h-fit items-center lg:items-start lg:flex-row lg:h-screen">
            <motion.img
                initial={{ x: -100, y: 100, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.7, type: 'tween', duration: 0.2 }}
                src="/WEEKLY_DECEMBER_FRONT_1/assets/images/bgCoreFeature.png"
                alt="bg-core-feature"
                className="bg-core-feature"
            />
            <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, type: 'tween', duration: 0.2 }}
                src="/WEEKLY_DECEMBER_FRONT_1/assets/images/CoreFeaturesImg.png"
                alt="core features image"
                className="w-2/3 lg:w-[28rem]"
            />
            <motion.div
                initial={{ opacity: 0, rotate: '-90deg', radius: '999px' }}
                whileInView={{
                    opacity: 1,
                    rotate: '0deg',
                    radius: '0px',
                }}
                transition={{ duration: 1, type: 'spring', delay: 0.5 }}
                className="CoreFeatures-content w-full lg:w-1/2"
            >
                <h2>Allocate Leads and Simplify Lead Management</h2>
                <p className="CoreFeatures-content-subtitle">
                    Unique and powerful suite of software to run your entire business, brought to you by a company with
                    the long term vision to transform the way you work.
                </p>
                <ul className="CoreFeatures-content-list">
                    <li>
                        <div>
                            <h3>Lead generation</h3>
                            <p>
                                Guide Helps Companies Increase Customer & Agent Satisfaction, Also Reducing Support
                                Costs.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Team Email</h3>
                            <p>
                                Group Your Contacts By Location, Age, And Almost Any Behavior With Advanced Segmentation
                                Tools.
                            </p>
                        </div>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
};
export default CoreFeatures;
