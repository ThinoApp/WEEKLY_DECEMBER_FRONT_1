import { FiCheck } from 'react-icons/fi';
import './Pricing.scss';
const Pricing = () => {
    return (
        <div className="Pricing">
            <h2>Deliver End-To-End Retail Billing & Solutions</h2>
            <p>
                Unique and powerful suite of software to run your entire business, brought to you by a company with the
                long term vision to transform the way you work.
            </p>
            <div className="Pricing-content">
                <div className="Starter">
                    <h3>
                        <img src="/assets/images/starter.png" />
                        Starter
                    </h3>
                    <div className="liste">
                        <h2>$45/Mo</h2>
                        <p>
                            Includes <b>1,000 </b>
                            Marketing contacts. Additional marketing contacts are sold in increments of <b>1,000 </b>
                            From
                        </p>
                        <hr />
                        <ul>
                            <li>
                                <FiCheck color="#2FCF3F" />
                                Outbound email and{' '}
                                <em>
                                    <strong>in-product</strong>
                                </em>
                            </li>
                            <li>
                                <FiCheck color="#2FCF3F" />
                                messaging
                            </li>
                            <li>
                                <FiCheck color="#2FCF3F" />
                                <span className="highlight">Push messages</span>& notifications
                            </li>
                            <li>
                                <FiCheck color="#2FCF3F" />
                                Custom bots
                            </li>
                            <li>
                                <FiCheck color="#2FCF3F" />
                                Mobile Carousels
                            </li>
                            <li>
                                <FiCheck color="#2FCF3F" />
                                Banner messages
                            </li>
                            <li>
                                <FiCheck color="gray" />
                                <em>
                                    <strong>Multi-channel</strong>
                                </em>
                                campaigns
                            </li>
                            <li>
                                <FiCheck color="gray" />
                                A/B testing & control groups
                            </li>
                        </ul>
                        <button>Get Started</button>
                    </div>
                </div>
                <div className="Professional">
                    <h3>
                        <img src="/assets/images/professional.png" />
                        Professional
                    </h3>

                    <div className="liste">
                        <h2>$60/Mo</h2>
                        <p>
                            Includes <b>2,000 </b>
                            Marketing contacts. Additional marketing contacts are sold in increments of <b>5,000 </b>
                            From
                        </p>
                        <hr />
                        <ul>
                            <li>
                                <FiCheck color="#2FCF3F" />
                                Outbound email and{' '}
                                <em>
                                    <strong>in-product</strong>
                                </em>
                            </li>
                            <li>
                                <FiCheck color="#2FCF3F" />
                                messaging
                            </li>
                            <li>
                                <FiCheck color="#2FCF3F" />
                                <span className="highlight">Push messages</span>& notifications
                            </li>
                            <li>
                                <FiCheck color="#2FCF3F" />
                                Custom bots
                            </li>
                            <li>
                                <FiCheck color="#2FCF3F" />
                                Mobile Carousels
                            </li>
                            <li>
                                <FiCheck color="#2FCF3F" />
                                Banner messages
                            </li>
                            <li>
                                <FiCheck color="gray" />
                                <em>
                                    <strong>Multi-channel</strong>
                                </em>
                                campaigns
                            </li>
                            <li>
                                <FiCheck color="gray" />
                                A/B testing & control groups
                            </li>
                            <li>
                                <FiCheck color="#2FCF3F" />
                                Outbound email and{' '}
                                <em>
                                    <strong>in-product</strong>
                                </em>
                            </li>
                            <li>
                                <FiCheck color="#2FCF3F" />
                                messaging
                            </li>
                            <li>
                                <FiCheck color="#2FCF3F" />
                                <span className="highlight">Push messages</span>& notifications
                            </li>
                        </ul>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Pricing;
