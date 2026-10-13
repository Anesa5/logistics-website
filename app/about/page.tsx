import Link from 'next/link';
import Reveal from '@/components/Reveal';
import StatsCounter from '@/components/StatsCounter';
import { TEAM } from '@/lib/data';

export const metadata = { title: 'About Us — ICL Logistics' };

export default function AboutPage() {
    return (
        <main>
            <section className="page-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link href="/">Home</Link>
                        <i className="fa-solid fa-chevron-right" />
                        <span>About Us</span>
                    </nav>
                    <h1>About&nbsp;&nbsp;Us</h1>
                    <p>Big enough to reach, close enough to care. Meet the people behind the movement.</p>
                </div>
            </section>

            <section className="section">
                <div className="container about-story-grid">
                    <Reveal>
                        <span className="section-eyebrow">Our Story</span>
                        <div className="about-quote">&quot;</div>
                    </Reveal>

                    <Reveal>
                        <h2>We Built the Partner We Wanted to Work With</h2>
                        <p>
                            In 2008, ICL Logistics started with a handful of lanes and a promise
                            to answer the phone. Today we coordinate freight across worldwide
                            , but the promise is the same: know the details, say
                            what is true, and stay with the shipment until it is where it
                            needs to be.
                        </p>
                        <p>
                            We work with owners and operations teams who are tired of
                            disconnected handoffs. They choose us because our network is
                            global, our thinking is practical, and our people take the
                            outcome personally.
                        </p>
                        <p>
                            Whether you are moving one urgent consignment or redesigning a
                            full supply chain, you get the same thing from us: a clear plan,
                            a named contact, and honest updates.
                        </p>
                        <Link href="/contact" className="btn btn-blue">
                            Meet Us on Your Next Shipment <i className="fa-solid fa-arrow-right" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <section className="section section-bg-blue">
                <div className="container">
                    <div className="section-head reveal is-visible">
                        <span className="section-eyebrow" style={{ color: 'var(--orange)' }}>Our Impact</span>
                        <h2>Precision Is a Habit</h2>
                        <p style={{ color: 'rgba(255,255,255,0.75)' }}>
                            It shows up in the questions we ask, the updates we send, and
                            the risks we handle before they reach you.
                        </p>
                    </div>
                    <StatsCounter />
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-head reveal is-visible">
                        <span className="section-eyebrow">Our People</span>
                        <h2>Meet the Team</h2>
                        <p>A small group of operators, engineers, and customs specialists who care about getting your freight there on time.</p>
                    </div>

                    <div className="team-grid">
                        {TEAM.map((t) => (
                            <Reveal key={t.name}>
                                <div className="team-card">
                                    <div className="team-avatar">
                                        <i className="fa-solid fa-user" />
                                    </div>
                                    <h4>{t.name}</h4>
                                    <span>{t.role}</span>
                                    <div className="team-social">
                                        <a href={`mailto:${t.email}`} aria-label="Email">
                                            <i className="fa-solid fa-envelope" />
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-band">
                <div className="container cta-inner">
                    <div>
                        <h2>Let&apos;s Build a Better Supply Chain</h2>
                        <p>Tell us about your lane, your volumes, and your biggest pain point. We&apos;ll come back with a plan.</p>
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