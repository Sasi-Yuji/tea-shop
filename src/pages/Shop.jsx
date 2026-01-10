import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import './Shop.css'; // Will create this

const Shop = () => {
    const [searchParams] = useSearchParams();
    const categoryFilter = searchParams.get('category');

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState(categoryFilter || 'all');
    const [priceRange, setPriceRange] = useState(100);

    const { addToCart } = useShop();

    useEffect(() => {
        let result = products;
        if (selectedCategory && selectedCategory !== 'all') {
            result = result.filter(p => p.category === selectedCategory);
        }
        result = result.filter(p => p.price <= priceRange);
        setFilteredProducts(result);
    }, [selectedCategory, priceRange]);

    useEffect(() => {
        if (categoryFilter) {
            setSelectedCategory(categoryFilter);
        }
    }, [categoryFilter]);

    return (
        <div className="container section shop-page">
            <aside className="filters">
                <div className="filter-group">
                    <h3>Categories</h3>
                    <button
                        className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('all')}
                    >
                        All Products
                    </button>
                    <button
                        className={`filter-btn ${selectedCategory === 'tea' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('tea')}
                    >
                        Teas
                    </button>
                    <button
                        className={`filter-btn ${selectedCategory === 'snacks' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('snacks')}
                    >
                        Snacks
                    </button>
                    <button
                        className={`filter-btn ${selectedCategory === 'retail' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('retail')}
                    >
                        Teaware
                    </button>
                </div>

                <div className="filter-group">
                    <h3>Max Price: ${priceRange}</h3>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                        style={{ width: '100%' }}
                    />
                </div>
            </aside>

            <main className="product-grid">
                <div className="grid-header">
                    <h2>Shop {selectedCategory !== 'all' ? selectedCategory : 'All'}</h2>
                    <p>Showing {filteredProducts.length} results</p>
                </div>

                <div className="products-grid-layout">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="card product-card">
                            <Link to={`/product/${product.id}`} className="product-image-link">
                                <img src={product.image} alt={product.name} />
                            </Link>
                            <div className="product-info">
                                <div className="product-meta">
                                    <span className="category-tag">{product.category}</span>
                                    <span className="rating">★ {product.rating}</span>
                                </div>
                                <Link to={`/product/${product.id}`}>
                                    <h3>{product.name}</h3>
                                </Link>
                                <div className="product-bottom">
                                    <span className="price">${product.price.toFixed(2)}</span>
                                    <button
                                        className="btn btn-primary btn-sm"
                                        onClick={() => addToCart(product)}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Shop;
