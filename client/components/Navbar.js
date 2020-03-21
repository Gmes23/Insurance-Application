import Link from 'next/link';

const NavBar = () => (
    <ul>
        <li>
            <Link href="/">
                <a>Home</a>
            </Link>
        </li>
        <li>
            <Link href="/dashboard">
                <a>Dashboard</a>
            </Link>
        </li>
    </ul>
);

export default NavBar;