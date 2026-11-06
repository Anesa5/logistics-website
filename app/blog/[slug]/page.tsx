import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import { ARTICLES } from '@/lib/data';

export async function generateStaticParams() {
    return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const a = ARTICLES.find((x) => x.slug === slug);
    return { title: a ? `${a.title} — Logistics` : 'Article' };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const a = ARTICLES.find((x) => x.slug === slug);
    if (!a) notFound();

    const related = ARTICLES.filter((x) => x.slug !== slug).slice(0, 5);

    // Image select karne ka function (Local aur Unsplash dono support karta hai)
    const getImage = (tag: string) => {
        if (tag === 'Air Freight') return '/css/air-freight.jpg'; // Aapki local image
        if (tag === 'Ocean Freight') return 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80&auto=format&fit=crop';
        if (tag === 'Road Transport' || tag === 'Logistics') return 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80&auto=format&fit=crop';
        return 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80&auto=format&fit=crop';
    };

    return (
        <main>
            <section className="page-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link href="/">Home</Link>
                        <i className="fa-solid fa-chevron-right" />
                        <Link href="/blog">Blog</Link>
                        <i className="fa-solid fa-chevron-right" />
                        <span>{a.tag}</span>
                    </nav>
                    <h1>{a.title}</h1>
                    <p>{a.excerpt}</p>
                </div>
            </section>

            <section className="section">
                <div className="container article-grid">
                    <Reveal className="article-body">

                        {/* Featured Image */}
                        <div style={{ marginBottom: '32px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)' }}>
                            <img
                                src={getImage(a.tag)}
                                alt={a.title}
                                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                            />
                        </div>

                        <div className="blog-meta" style={{ marginBottom: 26 }}>
                            <span><i className="fa-solid fa-calendar" /> {a.date}</span>
                            <span><i className="fa-solid fa-clock" /> {a.readTime}</span>
                            <span><i className="fa-solid fa-tag" /> {a.tag}</span>
                        </div>

                        {a.body.map((p, i) => {
                            // Smart check for Headings
                            const isHeading =
                                (p.length < 60 && !p.includes('.', p.length - 1)) ||
                                p.endsWith('?') ||
                                p === 'Conclusion' ||
                                p === 'Frequently Asked Questions';

                            if (isHeading) {
                                return (
                                    <h3
                                        key={i}
                                        style={{
                                            fontSize: '24px',
                                            marginTop: '40px',
                                            marginBottom: '16px',
                                            color: 'var(--ink)',
                                            fontFamily: 'var(--font-display)',
                                            letterSpacing: '-0.02em',
                                            fontWeight: 700
                                        }}
                                    >
                                        {p}
                                    </h3>
                                );
                            }

                            return <p key={i} className={i === 0 ? 'lede' : undefined}>{p}</p>;
                        })}

                        <blockquote>
                            &quot;The best supply chains are not the ones that never break. They
                            are the ones that recover fastest when they do.&quot;
                        </blockquote>

                        <p>
                            If any of this sounds familiar, we&apos;d love to hear how your team
                            handles it. Our operators answer in minutes, not business days.
                        </p>

                        <Link href="/contact" className="btn btn-orange" style={{ marginTop: 14 }}>
                            Talk to Our Team <i className="fa-solid fa-arrow-right" />
                        </Link>
                    </Reveal>

                    <Reveal className="article-sidebar">
                        <div className="sidebar-card">
                            <h4>Related Articles</h4>
                            <div className="sidebar-links">
                                {related.map((r) => (
                                    <Link key={r.slug} href={`/blog/${r.slug}`}>
                                        <i className="fa-solid fa-chevron-right" /> {r.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-card sidebar-cta">
                            <h4>Need a Quote?</h4>
                            <p>Tell us what needs to move. We&apos;ll reply within one business hour with a plan and pricing.</p>
                            <Link href="/contact" className="btn btn-orange">
                                Request a Quote <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}