'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
    { icon: 'fa-award', value: '14+', label: 'Years of Experience', isNumber: false },
    { icon: 'fa-arrows-left-right', value: 'End-to-End', label: 'Logistics Solutions', isNumber: false },
    { icon: 'fa-layer-group', value: 'Multiple', label: 'Freight & Transport Options', isNumber: false },
    { icon: 'fa-handshake', value: 'One', label: 'Dedicated Logistics Partner', isNumber: false },
];

function Stat({ icon, value, label, isNumber }: { icon: string; value: string; label: string; isNumber: boolean }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        if (!isNumber) return;

        const el = ref.current;
        if (!el) return;

        const targetNumber = parseInt(value.replace(/\D/g, ''), 10);
        if (isNaN(targetNumber)) return;

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
                            setCount(Math.floor(targetNumber * eased));
                            if (t < 1) requestAnimationFrame(step);
                            else setCount(targetNumber);
                        };
                        requestAnimationFrame(step);
                    }
                });
            },
            { threshold: 0.4 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, [value, isNumber]);

    return (
        <div className="stat reveal is-visible" ref={ref}>
            <i className={`fa-solid ${icon}`} />


            <strong style={{ fontSize: isNumber ? '44px' : '28px', marginTop: isNumber ? '0' : '10px' }}>
                {isNumber ? count.toLocaleString() : value}
            </strong>

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