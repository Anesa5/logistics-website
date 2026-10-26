const IMAGES = [
    'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80&auto=format&fit=crop',
];

export default function MovingBand() {
    return (
        <section className="moving-band">
            {/* Sliding Images */}
            <div className="moving-images">
                {[...IMAGES, ...IMAGES].map((src, i) => (
                    <img key={i} className="moving-img" src={src} alt="" />
                ))}
            </div>

            {/* Top Marquee Text */}
            <div className="moving-text">
                <div className="moving-text-track">
                    <span>
                        Air Freight <i className="fa-solid fa-plane" />
                        Ocean Freight <i className="fa-solid fa-ship" />
                        Road Transport <i className="fa-solid fa-truck" />
                        Warehousing <i className="fa-solid fa-warehouse" />
                        Customs Clearance <i className="fa-solid fa-file-shield" />
                        Buyers Consolidation <i className="fa-solid fa-boxes-stacked" />
                        Global Procurement <i className="fa-solid fa-magnifying-glass-dollar" />
                        Supply Chain <i className="fa-solid fa-route" />
                        Project Logistics <i className="fa-solid fa-helmet-safety" />
                    </span>
                    {/* Duplicate for seamless loop */}
                    <span>
                        Air Freight <i className="fa-solid fa-plane" />
                        Ocean Freight <i className="fa-solid fa-ship" />
                        Road Transport <i className="fa-solid fa-truck" />
                        Warehousing <i className="fa-solid fa-warehouse" />
                        Customs Clearance <i className="fa-solid fa-file-shield" />
                        Buyers Consolidation <i className="fa-solid fa-boxes-stacked" />
                        Global Procurement <i className="fa-solid fa-magnifying-glass-dollar" />
                        Supply Chain <i className="fa-solid fa-route" />
                        Project Logistics <i className="fa-solid fa-helmet-safety" />
                    </span>
                </div>
            </div>

            {/* Bottom Sub Marquee Text */}
            <div className="moving-text-sub">
                <div className="moving-text-sub-track">
                    {[
                        '14 Years Experience',
                        'Global Network',
                        'On-Time Delivery',
                        '38+ Countries',
                        'End-to-End Logistics Solutions',

                        '14 Years Experience',
                        'Global Network',
                        'On-Time Delivery',
                        '38+ Countries',
                        'End-to-End Logistics Solutions'
                    ].map((t, i) => <span key={i}>{t}</span>)}
                </div>
            </div>
        </section>
    );
}