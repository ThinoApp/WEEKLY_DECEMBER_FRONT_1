import './CoreFeatures.scss';
const CoreFeatures = () => {
    return (
        <div className="CoreFeatures">
            <img src="/assets/images/CoreFeaturesImg.png" alt="core features image" />
            <div className="CoreFeatures-content">
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
            </div>
        </div>
    );
};
export default CoreFeatures;
