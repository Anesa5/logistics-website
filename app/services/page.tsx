import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import Reveal from '@/components/Reveal';
import { SERVICES } from '@/lib/data';

export const metadata = { title: 'Our Services — ICL Logistics' };

export default function ServicesPage() {
    return (
        <main>
            <section className="page-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link href="/">Home</Link>
                        <i className="fa-solid fa-chevron-right" />
                        <span>Services</span>
                    </nav>
                    <h1>Our Services</h1>
                    <p>
                        From air freight to full supply chain management, we offer a
                        complete range of logistics services built around the way you work.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="services-grid">
                        {SERVICES.map((s) => (
                            <ServiceCard key={s.slug} service={s} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-bg-gray">
                <div className="container split">
                    <Reveal className="split-copy">
                        <span className="section-eyebrow">Built Around Your Business</span>
                        <h2>Not a Menu. A Connected System.</h2>
                        <p>
                            Our services are designed to work together. Add warehousing to
                            your freight programme, pair ocean capacity with last-mile
                            delivery, or ask us to coordinate the whole picture.
                        </p>

                        <ul className="check-list">
                            {[
                                'Single point of accountability',
                                'Multi-modal optimisation',
                                'Fully digital documentation',
                                'Real-time tracking & alerts',
                            ].map((item) => (
                                <li key={item}><i className="fa-solid fa-check" /> {item}</li>
                            ))}
                        </ul>

                        <Link href="/contact" className="btn btn-blue">
                            Talk to an Expert <i className="fa-solid fa-arrow-right" />
                        </Link>
                    </Reveal>

                    <Reveal className="split-visual">
                        <div className="split-visual-main">
                            <i className="fa-solid fa-route" />
                        </div>
                        <div className="split-visual-badge">
                            <strong>38</strong>
                            <span>Countries</span>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="cta-band">
                <div className="container cta-inner">
                    <div>
                        <h2>Need a Custom Solution?</h2>
                        <p>Complex lane? Unusual cargo? Tell us about it — we&apos;ll design a plan that fits.</p>
                    </div>
                    <div className="cta-actions">
                        <Link href="/contact" className="btn btn-orange">
                            Get in Touch <i className="fa-solid fa-arrow-right" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}