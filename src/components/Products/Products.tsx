import './Products.scss';
import { motion } from 'framer-motion';
const menus = [
    {
        id: 1,
        title: 'In Need',
        listes: [
            {
                id: 1,
                title: 'Sales',
                text: 'Unique and powerful suite sale run your entire business',
            },
            {
                id: 2,
                title: 'Marketing',
                text: 'Unique and powerful suite sale run your entire business',
            },
            {
                id: 3,
                title: 'Service',
                text: 'Unique and powerful suite sale run your entire business',
            },
        ],
    },
    {
        id: 2,
        title: 'Industry',
        listes: [
            {
                id: 1,
                title: 'Automotive',
                text: 'Unique and powerful suite sale run your entire business',
            },
            {
                id: 2,
                title: 'Real Estate',
                text: 'Unique and powerful suite sale run your entire business',
            },
            {
                id: 3,
                title: 'Education',
                text: 'Unique and powerful suite sale run your entire business',
            },
        ],
    },
    {
        id: 3,
        title: 'Solution',
        listes: [
            {
                id: 1,
                title: 'Project Management',
                text: 'Unique and powerful suite sale run your entire business',
            },
            {
                id: 2,
                title: 'Delivery Management',
                text: 'Unique and powerful suite sale run your entire business',
            },
            {
                id: 3,
                title: 'Loyalty Management',
                text: 'Unique and powerful suite sale run your entire business',
            },
            {
                id: 4,
                title: 'Professional Management',
                text: 'Unique and powerful suite sale run your entire business',
            },
        ],
    },
];
const Products = () => {
    return (
        <div id="Products" className="Products h-fit sm:h-screen">
            <h2>Sales Automation Modules</h2>
            <p className="text-sm w-full sm:w-1/2 sm:text-[15px]">
                Unique and powerful suite of software to run your entire business, brought to you by a company with the
                long term vision to transform the way you work.
            </p>
            <motion.div className="Products-content items-center sm:items-start flex-col sm:flex-row">
                {menus.map((item, index1) => (
                    <div className="menu-item " key={item.id}>
                        <motion.button
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * item.listes.length * index1 }}
                            className="menus-item-title"
                        >
                            {item.title}
                        </motion.button>
                        <ul className="menu-item-liste">
                            {item.listes.map((menu, index) => (
                                <motion.li
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 * index * index1 }}
                                >
                                    <img
                                        src={`/WEEKLY_DECEMBER_FRONT_1/assets/images/icons/${menu.title.toLocaleLowerCase()}.png`}
                                    />
                                    <div className="menu-item-liste-content">
                                        <h3>{menu.title}</h3>
                                        <p>{menu.text}</p>
                                        {index !== item.listes.length - 1 && <hr className="w-3/4 mt-4" />}
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
export default Products;
