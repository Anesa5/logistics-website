import Link from 'next/link';

export default function NotFound() {
    return (
        <main>
            <section className="page-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="section-eyebrow">Error 404</span>
                    <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)' }}>This Route Isn&apos;t on Our Map</h1>
                    <p style={{ margin: '0 auto 32px', maxWidth: 620 }}>
                        The page you were looking for has moved or never existed. Let&apos;s get you back onto a known lane.
                    </p>

                    <div className="hero-buttons" style={{ justifyContent: 'center' }}>
                        <Link href="/" className="btn btn-orange">
                            Back to Home <i className="fa-solid fa-arrow-right" />
                        </Link>
                        <Link href="/services" className="btn btn-outline-white">
                            Browse Services
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}