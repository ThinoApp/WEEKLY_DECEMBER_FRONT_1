import './Header.scss';
const Header = () => {
    return (
        <div className="Header">
            <div className="Header-logo">
                <img src="/WEEKLY_DECEMBER_FRONT_1/assets/images/Logo.png" alt="logo" />
                <h2>PrimeCRM</h2>
            </div>
            <ul className="Header-menu">
                <li>Solution</li>
                <li>Industries</li>
                <li>Products</li>
                <li>Resources</li>
                <li>Pricing</li>
                <li>
                    <button>Login</button>
                </li>
            </ul>
        </div>
    );
};
export default Header;
