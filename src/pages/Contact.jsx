import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container section">
            <div className="section-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Visit our tea house or send us a message.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                    <h2>Send a Message</h2>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
                            <input
                                type="text"
                                required
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                            <input
                                type="email"
                                required
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
                            <textarea
                                rows="5"
                                required
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>

                <div>
                    <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', marginBottom: '2rem' }}>
                        <h2>Visit Us</h2>
                        <p><strong>Zen Tea House</strong></p>
                        <p>123 Serenity Lane</p>
                        <p>Tea District, TD 90210</p>
                        <br />
                        <p><strong>Hours:</strong></p>
                        <p>Mon - Fri: 8am - 8pm</p>
                        <p>Sat - Sun: 9am - 9pm</p>
                        <br />
                        <p><strong>Email:</strong> hello@zentea.com</p>
                        <p><strong>Phone:</strong> (555) 123-4567</p>
                    </div>

                    {/* Map Placeholder */}
                    <div style={{ height: '300px', backgroundColor: '#e9e9e9', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                        <p>Interactive Map would load here</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
