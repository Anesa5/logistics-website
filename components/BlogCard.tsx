import Link from 'next/link';
import { Article } from '@/lib/data';
import Reveal from './Reveal';

export default function BlogCard({ article }: { article: Article }) {
    // Tag ke hisaab se image select karna
    const getImage = (tag: string) => {
        if (tag === 'Air Freight') return '/css/air-freight.jpg';
        if (tag === 'Ocean Freight') return 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format&fit=crop';
        if (tag === 'Logistics') return 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format&fit=crop';
        return 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format&fit=crop';
    };

    return (
        <Reveal>
            <article className="blog-card">
                {/* Yahan background image laga di hai */}
                <div
                    className="blog-thumb"
                    style={{
                        backgroundImage: `url(${getImage(article.tag)})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <span className="blog-thumb-tag">{article.tag}</span>
                </div>
                <div className="blog-body">
                    <div className="blog-meta">
                        <span><i className="fa-solid fa-calendar" /> {article.date}</span>
                        <span><i className="fa-solid fa-clock" /> {article.readTime}</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <Link href={`/blog/${article.slug}`} className="blog-read">
                        Read More <i className="fa-solid fa-arrow-right" />
                    </Link>
                </div>
            </article>
        </Reveal>
    );
}