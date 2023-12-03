import './Products.scss';
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
        <div className="Products">
            <h2>Sales Automation Modules</h2>
            <p>
                Unique and powerful suite of software to run your entire business, brought to you by a company with the
                long term vision to transform the way you work.
            </p>
            <div className="Products-content">
                {menus.map((item) => (
                    <div className="menu-item" key={item.id}>
                        <button className="menus-item-title">{item.title}</button>
                        <ul className="menu-item-liste">
                            {item.listes.map((menu, index) => (
                                <li>
                                    <img src={`/assets/images/icons/${menu.title.toLocaleLowerCase()}.png`} />
                                    <div className="menu-item-liste-content">
                                        <h3>{menu.title}</h3>
                                        <p>{menu.text}</p>
                                        {index !== item.listes.length - 1 && <hr className="w-3/4 mt-4" />}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Products;
