import { motion } from 'framer-motion';
import './NewsLetter.scss';
const NewsLetter = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="NewsLetter h-[110vh] sm:h-[120vh]"
        >
            <div className="NewsLetter-main flex-col justify-start md:justify-between md:flex-row">
                <div className="left">
                    <h3>Sell | Serve | Automate</h3>
                    <p>
                        Boost Enrolment And Manage Student Lifecyle <br /> With Our 360° CRM
                    </p>
                </div>
                <div className="right w-full md:w-[45%]">
                    <label htmlFor="">*Your Business Email Address</label>
                    <div className="flex flex-col items-stretch lg:items-center lg:flex-row">
                        <input
                            type="text"
                            placeholder="Email"
                            className="flex-grow-[1] flex-shrink-[1] lg:flex-grow-[0.7] lg:flex-shrink-[0.7]"
                        />
                        <button className="w-1/2 self-center md:self-start md:w-auto  flex-grow-[1] flex-shrink-[1] lg:flex-grow-[0.3] lg:flex-shrink-[0.3]">
                            Try Now
                        </button>
                    </div>
                </div>
            </div>
            <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                src="/WEEKLY_DECEMBER_FRONT_1/assets/images/NewsLetter.png"
                alt="news letter image"
                className="-translate-y-[0%] xsmobile:-translate-y-[-25%] w-full mobile:w-2/3 rounded-none mobile:rounded-3xl sm:-translate-y-[2%] top-1/2 md:top-1/3 lg:-translate-y-[15%] "
            />
        </motion.div>
    );
};
export default NewsLetter;
