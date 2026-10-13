'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
    { icon: 'fa-globe', value: 38, label: 'Countries Reached' },
    { icon: 'fa-truck-fast', value: 12000, label: 'Shipments / Year' },
    { icon: 'fa-user-tie', value: 120, label: 'Logistics Experts' },
    { icon: 'fa-thumbs-up', value: 97, label: '% On-Time Rate' },
];

function Stat({ icon, value, label }: { icon: string; value: number; label: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !started.current) {
                        started.current = true;
                        const duration = 1600;
                        const start = performance.now();
                        const step = (now: number) => {
                            const t = Math.min((now - start) / duration, 1);
                            const eased = 1 - Math.pow(1 - t, 3);
                            setCount(Math.floor(value * eased));
                            if (t < 1) requestAnimationFrame(step);
                            else setCount(value);
                        };
                        requestAnimationFrame(step);
                    }
                });
            },
            { threshold: 0.4 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, [value]);

    return (
        <div className="stat reveal is-visible" ref={ref}>
            <i className={`fa-solid ${icon}`} />
            <strong>{count.toLocaleString()}</strong>
            <span>{label}</span>
        </div>
    );
}

export default function StatsCounter() {
    return (
        <div className="stats">
            {STATS.map((s) => (
                <Stat key={s.label} {...s} />
            ))}
        </div>
    );
}