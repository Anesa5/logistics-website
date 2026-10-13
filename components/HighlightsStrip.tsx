import Reveal from './Reveal';

const ITEMS = [
    { icon: 'fa-bolt', title: 'Same-Day Dispatch', desc: 'Urgent shipments picked up within 4 hours' },
    { icon: 'fa-shield-halved', title: 'Fully Insured', desc: 'Every shipment covered up to $2M' },
    { icon: 'fa-satellite-dish', title: 'Live Tracking', desc: 'Real-time GPS on every container' },
    { icon: 'fa-headset', title: '24/7 Operators', desc: 'Real humans, average 18-min response' },
];

export default function HighlightsStrip() {
    return (
        <section className="highlights-strip">
            <div className="container">
                <div className="highlights-grid">
                    {ITEMS.map((item) => (
                        <Reveal key={item.title}>
                            <div className="highlight-item">
                                <div className="highlight-icon"><i className={`fa-solid ${item.icon}`} /></div>
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