"use client"
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className="logo-wrapper">
                <h1>White</h1>
                <h1>Architectures</h1>
            </div>
            <nav>
                <ul>
                    <li><Link href="#projects">Projects</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#news">News</Link></li>
                    <li><Link href="#services">Services</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </nav>
            <button type="menu" className="menu-toggle">Menu</button>
        </header>
    );
};

export default Header;