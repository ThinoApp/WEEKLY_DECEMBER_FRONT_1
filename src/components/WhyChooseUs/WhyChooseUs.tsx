import './WhyChooseUs.scss';
const menuList = [
    {
        id: 1,
        icon: '/assets/images/icons/whychoose-2.png',
        title: 'CRM Security',
        subTitle: 'cards and make more sales while chatting',
    },
    {
        id: 2,
        icon: '/assets/images/icons/whychoose-1.png',
        title: 'Marketing Hub',
        subTitle: 'Show off your goods in elegant product cards and mak.',
    },
];
const WhyChooseUs = () => {
    return (
        <div className="WhyChooseUs">
            <div className="WhyChooseUs-content">
                <h2 className="WhyChooseUs-content-title">Ways a project management tool can help your team</h2>
                <p className="WhyChooseUs-content-subtitle">
                    Unique and powerful suite of software to run your entire business, brought to you by a company with
                    the long term vision to transform the way you work.
                </p>
                <ul className="WhyChooseUs-content-list">
                    {menuList.map((item) => (
                        <li key={item.id}>
                            <img src={item.icon} alt="icon why choose us" />
                            <h3>{item.title}</h3>
                            <p>{item.subTitle}</p>
                        </li>
                    ))}
                </ul>
                <button>Get Started</button>
            </div>
            <img src="/WEEKLY_DECEMBER_FRONT_1/assets/images/imageWhyChooseUs.png" alt="why choose us" />
        </div>
    );
};
export default WhyChooseUs;
