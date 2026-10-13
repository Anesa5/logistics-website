import Link from 'next/link';
import { Article } from '@/lib/data';
import Reveal from './Reveal';

export default function BlogCard({ article }: { article: Article }) {
    return (
        <Reveal>
            <article className="blog-card">
                <div className="blog-thumb">
                    <span className="blog-thumb-tag">{article.tag}</span>
                    <i className={`fa-solid ${article.icon}`} />
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