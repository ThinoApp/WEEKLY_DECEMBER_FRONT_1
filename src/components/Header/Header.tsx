import './Header.scss';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="Header fixed"
        >
            <div className="Header-logo">
                <img src="/WEEKLY_DECEMBER_FRONT_1/assets/images/Logo.png" alt="logo" />
                <h2>PrimeCRM</h2>
            </div>
            <ul className="Header-menu hidden md:flex">
                <li>
                    <a href="#Features">Solution</a>
                </li>
                <li>
                    <a href="#WhyChooseUs">Industries</a>
                </li>
                <li>
                    <a href="#Products">Products</a>
                </li>
                <li>
                    <a href="#HowItWork">Resources</a>
                </li>
                <li>
                    <a href="#Pricing">Pricing</a>
                </li>
                <li>
                    <button>Login</button>
                </li>
            </ul>
            <div className="Header-menu-small  block md:hidden">
                <AnimatePresence mode="popLayout">
                    {showMenu ? (
                        <motion.div
                            key="close"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                        >
                            <MdClose size={28} onClick={() => setShowMenu((prev) => !prev)} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                        >
                            <FiMenu size={28} onClick={() => setShowMenu((prev) => !prev)} />
                        </motion.div>
                    )}

                    {showMenu && (
                        <motion.ul
                            key="mobile-menu"
                            className="origin-top"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            exit={{ scaleY: 0 }}
                        >
                            <li>
                                <a href="#Features">Solution</a>
                            </li>
                            <li>
                                <a href="#WhyChooseUs">Industries</a>
                            </li>
                            <li>
                                <a href="#Products">Products</a>
                            </li>
                            <li>
                                <a href="#HowItWork">Resources</a>
                            </li>
                            <li>
                                <a href="#Pricing">Pricing</a>
                            </li>
                            <li>
                                <button>Login</button>
                            </li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};
export default Header;
