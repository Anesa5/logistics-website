import Link from 'next/link';
import { Service } from '@/lib/data';
import Reveal from './Reveal';

export default function ServiceCard({ service }: { service: Service }) {
    return (
        <Reveal>
            <Link href={`/services/${service.slug}`} className="service-card">
                <div className="service-card-image">
                    <img src={service.image} alt={service.title} loading="lazy" />
                    <span className="service-card-badge">
                        <i className={`fa-solid ${service.icon}`} />
                    </span>
                </div>
                <div className="service-card-body">
                    <h3>{service.title}</h3>
                    <p>{service.short}</p>
                    <span className="service-link">
                        Read More <i className="fa-solid fa-arrow-right" />
                    </span>
                </div>
            </Link>
        </Reveal>
    );
}