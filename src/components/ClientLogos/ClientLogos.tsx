import './ClientLogos.scss';
import { motion } from 'framer-motion';
const ClientLogos = () => {
    return (
        <div className="ClientLogos">
            <h2 className="ClientLogos-title">Trusted by more than 75 million users globally</h2>
            <p className="ClientLogos-subtitle">
                Unique and powerful suite of software to run your entire business, brought to you transform the way you
                work.
            </p>
            <div className="ClientLogos-content">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
                    <div className={`logo-container ${item > 10 ? 'endRow' : ''}  sm:border-none`}>
                        <motion.img
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * item }}
                            src={`/WEEKLY_DECEMBER_FRONT_1/assets/images/clientLogos/Logo_${item}.png`}
                            alt="icons"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ClientLogos;
