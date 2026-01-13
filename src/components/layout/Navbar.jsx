import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingBag, FiUser, FiSearch, FiMenu } from 'react-icons/fi';
import { useShop } from '../../context/ShopContext';
import './Navbar.css';

const Navbar = () => {
    const { cartCount, setIsCartOpen } = useShop();
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar">
            <Link to="/" className="nav-brand">
                <span>Zen Tea</span>
            </Link>

            <div className="nav-links">
                <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
                <Link to="/shop" className={`nav-link ${isActive('/shop')}`}>Shop</Link>
                <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
                <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
            </div>

            <div className="nav-actions">
                <button className="icon-btn" title="Search">
                    <FiSearch />
                </button>
                <Link to="/account" className="icon-btn" title="Account">
                    <FiUser />
                </Link>
                <Link to="/cart" className="cart-btn">
                    <FiShoppingBag />
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
