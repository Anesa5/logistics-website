'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SERVICES } from '@/lib/data';

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (match: string) =>
        pathname === match || pathname.startsWith(match + '/');

    return (
        <>
            <div className="topbar">
                <div className="container topbar-inner">
                    <div className="topbar-left">
                        <span className="topbar-item"><i className="fa-solid fa-envelope" /> info@icllogistics.com.pk</span>
                        <span className="topbar-item"><i className="fa-solid fa-phone" /> +92 3-111-444-224</span>
                        <span className="topbar-item"><i className="fa-solid fa-clock" /> Mon – Sat: 8:00 – 18:00</span>
                    </div>
                    <div className="topbar-right">
                        <div className="topbar-social">
                            <a href="https://www.facebook.com/globalventurepl" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fa-brands fa-facebook-f" />
                            </a>
                            <a href="https://x.com/globalventurepl" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <i className="fa-brands fa-twitter" />
                            </a>
                            <a href="https://www.linkedin.com/company/global-venturepl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fa-brands fa-linkedin-in" />
                            </a>
                            <a href="https://www.instagram.com/globalventurepl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fa-brands fa-instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <header className={`header ${open ? 'menu-open' : ''}`} id="site-header">
                <div className="container header-inner">
                    <Link href="/" className="logo">
                        <img src="/logo.png" alt="ICL Logistics Pvt. Ltd." className="logo-img" />
                    </Link>

                    <nav className="nav" aria-label="Main navigation">
                        <div className="nav-item">
                            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                        </div>

                        <div className="nav-item">
                            <Link href="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
                                Services <i className="fa-solid fa-chevron-down" />
                            </Link>
                            <div className="dropdown">
                                {SERVICES.map((s) => (
                                    <Link key={s.slug} href={`/services/${s.slug}`}>
                                        <i className={`fa-solid ${s.icon}`} />
                                        <span>{s.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="nav-item">
                            <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
                        </div>

                        <div className="nav-item">
                            <Link href="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`}>Blog</Link>
                        </div>

                        <div className="nav-item">
                            <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
                        </div>
                    </nav>

                    <Link href="/contact" className="header-cta">
                        Get a Quote <i className="fa-solid fa-arrow-right" />
                    </Link>

                    <button
                        className="mobile-toggle"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <i className="fa-solid fa-xmark" /> : <i className="fa-solid fa-bars" />}
                    </button>
                </div>

                <nav className="mobile-menu" aria-label="Mobile navigation">
                    <div className="container">
                        <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} onClick={() => setOpen(false)}>Home</Link>
                        <Link href="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`} onClick={() => setOpen(false)}>Services</Link>
                        <div className="mobile-sub">
                            {SERVICES.map((s) => (
                                <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)}>
                                    {s.title}
                                </Link>
                            ))}
                        </div>
                        <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setOpen(false)}>About Us</Link>
                        <Link href="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`} onClick={() => setOpen(false)}>Blog</Link>
                        <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setOpen(false)}>Contact</Link>
                        <Link href="/contact" className="header-cta" onClick={() => setOpen(false)}>
                            Get a Quote <i className="fa-solid fa-arrow-right" />
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
}