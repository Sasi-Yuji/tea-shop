import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './Checkout.css';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useShop();
    const navigate = useNavigate();
    
    // Form State
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        country: 'US', // Default
        postalCode: '',
        phone: '',
        shippingMethod: 'standard',
        paymentMethod: 'card'
    });

    const [isProcessing, setIsProcessing] = useState(false);

    // Redirect to shop if cart is empty
    if (cart.length === 0) {
        return (
            <div className="container section">
                <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                    <h2>Your cart is empty</h2>
                    <p style={{ marginBottom: '1rem' }}>Please add some items before checking out.</p>
                    <Link to="/shop" className="btn btn-primary">Return to Shop</Link>
                </div>
            </div>
        );
    }

    const shippingCost = formData.shippingMethod === 'express' ? 15.00 : 5.00; // Flat rates
    const taxes = cartTotal * 0.08; // 8% Tax
    const finalTotal = cartTotal + shippingCost + taxes;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsProcessing(false);
            alert(`Order Placed Successfully! (Order #${Math.floor(Math.random() * 10000)})`);
            clearCart();
            navigate('/');
        }, 2000);
    };

    return (
        <div className="container checkout-page">
            <div className="checkout-layout">
                {/* Left Column: Forms */}
                <div className="checkout-main">
                    {/* Breadcrumbs / Steps */}
                    <div className="checkout-steps">
                        <Link to="/cart">Cart</Link>
                        <span className="separator">{'>'}</span>
                        <span className="active">Information</span>
                        <span className="separator">{'>'}</span>
                        <span>Shipping</span>
                        <span className="separator">{'>'}</span>
                        <span>Payment</span>
                    </div>

                    <form id="checkout-form" onSubmit={handleSubmit}>
                        {/* Contact Section */}
                        <div className="checkout-form-section">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h2>Contact Information</h2>
                                <span style={{ fontSize: '0.9rem' }}>
                                    Already have an account? <Link to="/login" style={{ color: 'var(--color-primary)' }}>Log in</Link>
                                </span>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    className="form-input" 
                                    placeholder="you@email.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required 
                                />
                                <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                    <input type="checkbox" id="newsletter" style={{ marginRight: '0.5rem' }} />
                                    <label htmlFor="newsletter" style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                                        Email me with news and offers
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div className="checkout-form-section">
                            <h2>Shipping Address</h2>
                            <div className="form-group">
                                <label className="form-label">Country / Region</label>
                                <select 
                                    name="country" 
                                    className="form-input" 
                                    value={formData.country}
                                    onChange={handleInputChange}
                                >
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="UK">United Kingdom</option>
                                </select>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <input 
                                        type="text" 
                                        name="firstName" 
                                        className="form-input" 
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Last Name</label>
                                    <input 
                                        type="text" 
                                        name="lastName" 
                                        className="form-input" 
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Address</label>
                                <input 
                                    type="text" 
                                    name="address" 
                                    className="form-input" 
                                    placeholder="123 Main St"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Apartment, suite, etc. (optional)</label>
                                <input 
                                    type="text" 
                                    name="apartment" 
                                    className="form-input" 
                                    value={formData.apartment}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">City</label>
                                    <input 
                                        type="text" 
                                        name="city" 
                                        className="form-input" 
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Postal Code</label>
                                    <input 
                                        type="text" 
                                        name="postalCode" 
                                        className="form-input" 
                                        value={formData.postalCode}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Phone</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    className="form-input" 
                                    placeholder="(555) 555-5555"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                        </div>

                        {/* Shipping Method */}
                        <div className="checkout-form-section">
                            <h2>Delivery Options</h2>
                            <div className="radio-group">
                                <label className={`radio-option ${formData.shippingMethod === 'standard' ? 'selected' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="shippingMethod" 
                                        value="standard"
                                        checked={formData.shippingMethod === 'standard'}
                                        onChange={handleInputChange}
                                    />
                                    <div className="radio-details">
                                        <span className="radio-label">Standard Shipping (5-7 business days)</span>
                                        <span className="radio-price">$5.00</span>
                                    </div>
                                </label>
                                <label className={`radio-option ${formData.shippingMethod === 'express' ? 'selected' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="shippingMethod" 
                                        value="express"
                                        checked={formData.shippingMethod === 'express'}
                                        onChange={handleInputChange}
                                    />
                                    <div className="radio-details">
                                        <span className="radio-label">Express Shipping (2-3 business days)</span>
                                        <span className="radio-price">$15.00</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="checkout-form-section">
                            <h2>Payment Details</h2>
                            <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                                All transactions are secure and encrypted.
                            </p>
                            
                            <div className="radio-group">
                                <label className={`radio-option ${formData.paymentMethod === 'card' ? 'selected' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="paymentMethod" 
                                        value="card"
                                        checked={formData.paymentMethod === 'card'}
                                        onChange={handleInputChange}
                                    />
                                    <div className="radio-details">
                                        <span className="radio-label">Credit / Debit Card</span>
                                        {/* Icons could go here */}
                                    </div>
                                </label>
                                
                                {/* If card is selected, show card fields (simplified for mock) */}
                                {formData.paymentMethod === 'card' && (
                                    <div style={{ padding: '1rem', background: '#f9f9f9', border: '1px solid #e0e0e0', borderTop: 'none', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px', marginTop: '-0.5rem' }}>
                                        <div className="form-group">
                                            <input type="text" className="form-input" placeholder="Card Number" />
                                        </div>
                                        <div className="form-row">
                                            <input type="text" className="form-input" placeholder="Expiration (MM/YY)" />
                                            <input type="text" className="form-input" placeholder="Security Code" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-input" placeholder="Name on Card" />
                                        </div>
                                    </div>
                                )}

                                <label className={`radio-option ${formData.paymentMethod === 'paypal' ? 'selected' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="paymentMethod" 
                                        value="paypal"
                                        checked={formData.paymentMethod === 'paypal'}
                                        onChange={handleInputChange}
                                    />
                                    <div className="radio-details">
                                        <span className="radio-label">PayPal</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary btn-block" 
                            style={{ padding: '1rem', width: '100%', fontSize: '1.1rem' }}
                            disabled={isProcessing}
                        >
                            {isProcessing ? 'Processing...' : `Pay $${finalTotal.toFixed(2)}`}
                        </button>
                    </form>
                </div>

                {/* Right Column: Summary */}
                <div className="checkout-summary-column">
                    <div className="checkout-summary">
                        <h3>Order Summary</h3>
                        
                        <div className="summary-items">
                            {cart.map(item => (
                                <div key={item.id} className="summary-item">
                                    <div className="summary-img-container">
                                        <img src={item.image} alt={item.name} className="summary-img" />
                                        <span className="badge-qty">{item.quantity}</span>
                                    </div>
                                    <div className="summary-info">
                                        <div className="summary-name">{item.name}</div>
                                        {/* <div className="summary-variant">50g Pouch</div> */}
                                    </div>
                                    <div className="summary-price">${(item.price * item.quantity).toFixed(2)}</div>
                                </div>
                            ))}
                        </div>

                        <div className="summary-totals">
                            <div className="total-row">
                                <span>Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="total-row">
                                <span>Shipping</span>
                                <span>${shippingCost.toFixed(2)}</span>
                            </div>
                            <div className="total-row">
                                <span>Taxes (Estimated)</span>
                                <span>${taxes.toFixed(2)}</span>
                            </div>
                            <div className="total-row final">
                                <span>Total</span>
                                <span>${finalTotal.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="secure-notice">
                            <span role="img" aria-label="lock">🔒</span> Secure Checkout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
