'use client';

import { useState } from 'react';
import { SERVICES } from '@/lib/data';

export default function ContactPage() {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        // Aapki Web3Forms Access Key (Email par data bhejne ke liye)
        formData.append("access_key", "4c6f50b6-95b5-44f5-a45b-23dca4745582");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSent(true);
                (e.target as HTMLFormElement).reset(); // Form clear karein
                setTimeout(() => setSent(false), 4000);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Failed to send request. Please check your internet connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            <section className="page-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <a href="/">Home</a>
                        <i className="fa-solid fa-chevron-right" />
                        <span>Contact</span>
                    </nav>
                    <h1>Get in Touch</h1>
                    <p>Tell us what needs to move. Our operations team will come back with the right questions — not a canned pitch.</p>
                </div>
            </section>

            <section className="section">
                <div className="container contact-grid">
                    {/* LEFT SIDE INFO */}
                    <div className="contact-info-card reveal is-visible">
                        <h3>Contact Information</h3>
                        <p>Whether you have a lane to price, a warehouse to relocate, or a supply chain that needs a second set of eyes, we&apos;re ready to listen.</p>

                        <div className="contact-info-list">
                            <div className="contact-info-item">
                                <div className="contact-info-icon"><i className="fa-solid fa-location-dot" /></div>
                                <div>
                                    <small>Visit Us</small>
                                    <strong> Plaza No. 543, Block A, Main Boulevard, Jubilee Town, Lahore, Pakistan</strong>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon"><i className="fa-solid fa-phone" /></div>
                                <div>
                                    <small>Call Operations</small>
                                    <strong><a href="tel:+92 3-111-444-224">+92 3-111-444-224</a></strong>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon"><i className="fa-solid fa-envelope" /></div>
                                <div>
                                    <small>Email the Team</small>
                                    <strong><a href="mailto:info@icllogisticgroup.com">info@icllogisticgroup.com</a></strong>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon"><i className="fa-solid fa-clock" /></div>
                                <div>
                                    <small>Working Hours</small>
                                    <strong>Mon – Sat: 8:00 – 18:00<br />Sun: Closed</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: EXACT SAME FORM FROM HERO */}
                    <div className="contact-form reveal is-visible">
                        <h3>Request a Quote</h3>
                        <p>Tell us what needs to move. We&apos;ll reply within one business hour.</p>

                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <label htmlFor="quote-name">Name</label>
                                <input id="quote-name" name="name" type="text" placeholder="Full Name" required />
                            </div>

                            <div className="field">
                                <label htmlFor="quote-company">Company Name</label>
                                <input id="quote-company" name="company" type="text" placeholder="Company Name" />
                            </div>

                            <div className="field">
                                <label htmlFor="quote-email">Email</label>
                                <input id="quote-email" name="email" type="email" placeholder="you@company.com" required />
                            </div>

                            <div className="field">
                                <label htmlFor="quote-phone">Phone</label>
                                <input id="quote-phone" name="phone" type="tel" placeholder="+92 300 1234567" />
                            </div>

                            <div className="field">
                                <label htmlFor="quote-type">Business Type</label>
                                <select id="quote-type" name="business_type">
                                    <option value="">Select Business Type</option>
                                    <option value="manufacturing">Manufacturing</option>
                                    <option value="retail">Retail & FMCG</option>
                                    <option value="textiles">Textiles & Apparel</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="field">
                                <label htmlFor="quote-service">Services Needed</label>
                                <select id="quote-service" name="service" defaultValue="">
                                    {SERVICES.map((s) => (
                                        <option key={s.slug} value={s.title}>{s.title}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="field">
                                <label htmlFor="quote-method">Shipping Method</label>
                                <select id="quote-method" name="shipping_method">
                                    <option value="air">Air Freight</option>
                                    <option value="ocean">Ocean Freight</option>
                                    <option value="road">Road Transport</option>
                                    <option value="not-sure">Not Sure Yet</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-orange"
                                disabled={loading}
                                style={sent ? { background: '#22c55e', pointerEvents: 'none' } : {}}
                            >
                                {loading ? 'Sending...' : sent ? '✓ Request Sent' : <>Send Request <i className="fa-solid fa-paper-plane" /></>}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}