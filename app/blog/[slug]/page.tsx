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
                        <div className="blog-meta" style={{ marginBottom: 26 }}>
                            <span><i className="fa-solid fa-calendar" /> {a.date}</span>
                            <span><i className="fa-solid fa-clock" /> {a.readTime}</span>
                            <span><i className="fa-solid fa-tag" /> {a.tag}</span>
                        </div>

                        {a.body.map((p, i) => (
                            <p key={i} className={i === 0 ? 'lede' : undefined}>{p}</p>
                        ))}

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