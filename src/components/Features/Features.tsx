import './Features.scss';

const subContent = [
    {
        id: 1,
        icon: '/assets/images/icons/01.png',
        title: 'Powerful Settings',
        text: 'Provide excellent customer service.Answer more tickets.',
    },
    {
        id: 2,
        icon: '/assets/images/icons/02.png',
        title: 'User Friendly',
        text: 'Use Timeline to plan projects right how the pieces fit together.',
    },
    {
        id: 3,
        icon: '/assets/images/icons/03.png',
        title: 'Integrated platform',
        text: 'Vivamus massa eleifend etiam neque odio feugiat dolor est.',
    },
];
const Features = () => {
    return (
        <div className="Features">
            <h2 className="Features-title">Explore Premium Features</h2>
            <p className="Features-text">
                Unique and powerful suite of software to run your entire business, brought to you by a company with the
                long term vision to transform the way you work.
            </p>
            <div className="Features-sub-content">
                {subContent.map((item) => (
                    <div className="Features-sub-content-item" key={item.id}>
                        <img src={item.icon} className="Features-icon" alt="icon" />
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Features;
