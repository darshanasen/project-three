import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <h1>Contact us!</h1>
            <h2>We love contact</h2>

            <nav>
                <ul>
                    <li>
                        <Link to="/contact/sales">Sales team</Link>
                    </li>
                    <li>
                        <Link to="/contact/dev">Dev team</Link>
                    </li>
                </ul>

            </nav>
            <Outlet />
        </>
    )
}

export default Contact;