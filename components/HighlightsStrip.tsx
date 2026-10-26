import Reveal from './Reveal';

const ITEMS = [
    {
        icon: 'fa-industry',
        title: 'Industry Experience',
        desc: 'Backed by over a decade of expertise in global freight and supply chain logistics.'
    },
    {
        icon: 'fa-layer-group',
        title: 'Multiple Service Options',
        desc: 'From air and ocean freight to warehousing and procurement, we cover it all.'
    },
    {
        icon: 'fa-users',
        title: 'Customer-Centric Service',
        desc: 'Dedicated account managers and 24/7 support focused entirely on your business needs.'
    },
    {
        icon: 'fa-chart-line',
        title: 'Business-Focused Solutions',
        desc: 'Tailored logistics strategies designed to optimize your costs and improve efficiency.'
    },
];

export default function HighlightsStrip() {
    return (
        <section className="highlights-strip">
            <div className="container">
                <div className="highlights-grid">
                    {ITEMS.map((item) => (
                        <Reveal key={item.title}>
                            <div className="highlight-item">
                                <div className="highlight-icon">
                                    <i className={`fa-solid ${item.icon}`} />
                                </div>
                                <div className="highlight-text">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}