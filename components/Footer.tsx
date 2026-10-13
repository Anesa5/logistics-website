'use client';

import Link from 'next/link';
import { SERVICES } from '@/lib/data';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-top">
                <div>
                    <Link href="/" className="logo">
                        <img src="/logo.png" alt="ICL Logistics Pvt. Ltd." className="logo-img" />
                    </Link>
                    <p className="footer-about">
                        Global freight, thoughtfully coordinated. From the first mile to
                        the last, we keep your business moving across worldwide.
                    </p>
                    <div className="footer-social">
                        <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
                        <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter" /></a>
                        <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
                        <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
                    </div>
                </div>

                <div>
                    <h5>Our Services</h5>
                    <div className="footer-links">
                        {SERVICES.map((s) => (
                            <Link key={s.slug} href={`/services/${s.slug}`}>
                                <i className="fa-solid fa-chevron-right" /> {s.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h5>Company</h5>
                    <div className="footer-links">
                        <Link href="/about"><i className="fa-solid fa-chevron-right" /> About Us</Link>
                        <Link href="/services"><i className="fa-solid fa-chevron-right" /> All Services</Link>
                        <Link href="/blog"><i className="fa-solid fa-chevron-right" /> Our Blog</Link>
                        <Link href="/contact"><i className="fa-solid fa-chevron-right" /> Contact Us</Link>
                        <Link href="/contact"><i className="fa-solid fa-chevron-right" /> Careers</Link>
                    </div>
                </div>

                <div>
                    <h5>Get In Touch</h5>
                    <div className="footer-contact">
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-location-dot" />
                            <span>Plaza No. 543, Block A, Main Boulevard, Jubilee Town, Lahore, Pakistan</span>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-phone" />
                            <a href="tel:+92 3-111-444-224">+92 3-111-444-224</a>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-envelope" />
                            <a href="mailto:info@logistics.com">info@icllogisticgroup.com</a>
                        </div>
                    </div>

                    <div className="footer-newsletter">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your email address" required />
                            <button type="submit" aria-label="Subscribe">
                                <i className="fa-solid fa-paper-plane" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom">
                <span>© 2024 Logistics. All rights reserved.</span>
                <div className="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
        </footer>
    );
}