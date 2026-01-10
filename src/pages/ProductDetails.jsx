import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import './ProductDetails.css'; // Will create

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));
    const { addToCart } = useShop();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    if (!product) return <div className="container section">Product not found</div>;

    const handleAddToCart = () => {
        addToCart(product, quantity);
        // Maybe show a toast
    };

    return (
        <div className="container section product-details-page">
            <button onClick={() => navigate(-1)} className="back-btn">&larr; Back to Shop</button>

            <div className="product-layout">
                <div className="product-gallery">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="product-main-info">
                    <span className="detail-category">{product.category}</span>
                    <h1>{product.name}</h1>
                    <div className="detail-price">${product.price.toFixed(2)}</div>

                    <div className="detail-actions">
                        <div className="quantity-selector">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>Add to Cart</button>
                    </div>

                    <div className="product-tabs">
                        <div className="tab-headers">
                            <button
                                className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                                onClick={() => setActiveTab('description')}
                            >
                                Description
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
                                onClick={() => setActiveTab('details')}
                            >
                                Details
                            </button>
                        </div>

                        <div className="tab-content">
                            {activeTab === 'description' && (
                                <p>{product.description}</p>
                            )}
                            {activeTab === 'details' && (
                                <ul className="details-list">
                                    {Object.entries(product.details).map(([key, value]) => (
                                        <li key={key}>
                                            <strong>{key}: </strong> {value}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
