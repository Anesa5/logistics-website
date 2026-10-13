import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { ARTICLES } from '@/lib/data';

export const metadata = { title: 'Blog — Logistics' };

export default function BlogPage() {
    return (
        <main>
            <section className="page-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link href="/">Home</Link>
                        <i className="fa-solid fa-chevron-right" />
                        <span>Blog</span>
                    </nav>
                    <h1>Our Blog</h1>
                    <p>Practical thinking on freight, supply chains, and the details that decide whether a shipment arrives on time.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="blog-grid">
                        {ARTICLES.map((a) => (
                            <BlogCard key={a.slug} article={a} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}