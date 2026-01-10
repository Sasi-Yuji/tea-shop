import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { products } from '../data/products';

const Home = () => {
    const featuredProducts = products.slice(0, 3); // Just show first 3 for now

    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Find Your Inner Peace</h1>
                    <p>Discover our curated collection of premium teas and artisanal snacks from around the world.</p>
                    <Link to="/shop" className="btn btn-primary">Shop Collection</Link>
                </div>
            </section>

            <section className="section container">
                <div className="section-header">
                    <h2>Our Collections</h2>
                    <p>Hand-picked for quality and sustainability</p>
                </div>

                <div className="category-grid">
                    <Link to="/shop?category=tea" className="category-card">
                        <img src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800" alt="Tea Collection" />
                        <div className="category-overlay">
                            <h3>Premium Teas</h3>
                            <p>Green, Black, Oolong & Herbal</p>
                        </div>
                    </Link>

                    <Link to="/shop?category=snacks" className="category-card">
                        <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800" alt="Snacks" />
                        <div className="category-overlay">
                            <h3>Gourmet Snacks</h3>
                            <p>Biscuits, Mochi & More</p>
                        </div>
                    </Link>

                    <Link to="/shop?category=retail" className="category-card">
                        <img src="https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?auto=format&fit=crop&q=80&w=800" alt="Tea Sets" />
                        <div className="category-overlay">
                            <h3>Teaware & Gifts</h3>
                            <p>Ceramics, Sets & Accessories</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2>Best Sellers</h2>
                    </div>
                    {/* We will reuse ProductCard component here later */}
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                        {featuredProducts.map(product => (
                            <div key={product.id} className="card">
                                <div style={{ height: '250px', overflow: 'hidden' }}>
                                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <h3>{product.name}</h3>
                                    <p style={{ color: 'var(--color-primary-dark)', fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
                                    <Link to={`/product/${product.id}`} className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
