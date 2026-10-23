export type Service = {
    slug: string;
    icon: string;
    image: string;
    title: string;
    short: string;
    intro: string;
    features: string[];
    stats: { value: string; label: string }[];
};

export type Article = {
    slug: string;
    tag: string;
    icon: string;
    date: string;
    readTime: string;
    title: string;
    excerpt: string;
    body: string[];
};

export type TeamMember = {
    name: string;
    role: string;
    initials: string;
    linkedin: string;
    twitter: string;
    email: string;
};

export type Testimonial = {
    quote: string;
    name: string;
    role: string;
    initials: string;
};

export const SERVICES: Service[] = [
    {
        slug: 'air-freight',
        icon: 'fa-plane',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&auto=format&fit=crop',
        title: 'Air Freight',
        short: 'Time-sensitive cargo transportation with shipment planning and documentation support.',
        intro: 'Time-sensitive cargo transportation with shipment planning, booking coordination, and documentation support.',
        features: [
            'Priority and deferred capacity across major carriers',
            'Door-to-door pickup, screening and customs clearance',
            'Charter and hand-carry options for critical parts',
            'Milestone alerts from uplift through proof of delivery',
        ],
        stats: [
            { value: '24h', label: 'typical door-to-door' },
            { value: '112', label: 'active trade lanes' },
        ],
    },
    {
        slug: 'ocean-freight',
        icon: 'fa-ship',
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format&fit=crop',
        title: 'Ocean Freight',
        short: 'Commercial cargo shipping with container options and international coordination.',
        intro: 'Commercial cargo shipping with container options, booking support, and international shipment coordination.',
        features: [
            'Named-account space protection on core trade lanes',
            'FCL, SOC and buyer’s consolidation programmes',
            'Customs brokerage and origin documentation',
            'Port-to-door drayage coordination',
        ],
        stats: [
            { value: '38', label: 'countries reached' },
            { value: '97.4%', label: 'on-time milestone rate' },
        ],
    },
    {
        slug: 'road-transport',
        icon: 'fa-truck',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format&fit=crop',
        title: 'Road Transport',
        short: 'Cargo transportation by road for domestic and cross-border routes.',
        intro: 'Cargo transportation by road for domestic movements and supported cross-border routes with full and partial load options.',
        features: [
            'Full truckload and less-than-truckload programmes',
            'Cross-border documentation and customs support',
            'Temperature-controlled and high-value cargo',
            'Real-time GPS tracking with ETA updates',
        ],
        stats: [
            { value: '4.8/5', label: 'partner satisfaction' },
            { value: '18 min', label: 'average first response' },
        ],
    },
    {
        slug: 'warehousing',
        icon: 'fa-warehouse',
        image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&auto=format&fit=crop',
        title: 'Warehousing',
        short: 'Storage and cargo handling solutions to support inventory management.',
        intro: 'Storage and cargo handling solutions to support inventory management and distribution needs.',
        features: [
            'Short and long-term storage across 12 countries',
            'Pick, pack and fulfilment services',
            'Real-time inventory visibility and reporting',
            'Integration with your e-commerce and ERP systems',
        ],
        stats: [
            { value: '12', label: 'warehouse hubs' },
            { value: '99.8%', label: 'inventory accuracy' },
        ],
    },
    {
        slug: 'custom-clearance',
        icon: 'fa-file-shield',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop',
        title: 'Customs Clearance',
        short: 'Customs documentation and clearance support for import and export requirements.',
        intro: 'Customs documentation and clearance support to help shipments meet import and export requirements.',
        features: [
            'Import and export clearance in 38 countries',
            'Duty and tariff optimisation advice',
            'HS classification and origin management',
            'AEO-certified brokerage network',
        ],
        stats: [
            { value: '38', label: 'countries cleared' },
            { value: '2.1h', label: 'average clearance time' },
        ],
    },
    {
        slug: 'buyers-consolidation',
        icon: 'fa-boxes-stacked',
        image: '/css/buyers-consolidation.jpg',
        title: 'Buyers Consolidation',
        short: 'Combining shipments from multiple suppliers to reduce freight costs.',
        intro: 'Combining shipments from multiple suppliers into one consignment to reduce freight costs and simplify handling.',
        features: [
            'Multi-supplier pickup and coordination',
            'Origin consolidation at our partner warehouses',
            'Mixed-SKU container loading and packing',
            'One bill of lading, one customs entry',
        ],
        stats: [
            { value: '40%', label: 'average freight savings' },
            { value: '25+', label: 'origin consolidation hubs' },
        ],
    },
    {
        slug: 'global-procurement',
        icon: 'fa-magnifying-glass-dollar',
        image: '/css/global-procurement.jpg',
        title: 'Global Procurement',
        short: 'Sourcing products from international suppliers with negotiation and QC support.',
        intro: 'Sourcing products from international suppliers, negotiate pricing, purchase coordination & QC support.',
        features: [
            'Supplier identification and vetting',
            'Price negotiation and contract support',
            'Quality inspection before shipment',
            'End-to-end procurement-to-delivery handling',
        ],
        stats: [
            { value: '500+', label: 'vetted suppliers' },
            { value: '18%', label: 'average cost reduction' },
        ],
    },
    {
        slug: 'supply-chain',
        icon: 'fa-route',
        image: '/css/supply-chain.png',
        title: 'Supply Chain',
        short: 'Supply chain coordination covering sourcing, transportation, and delivery.',
        intro: 'Supply chain coordination covering sourcing, transportation, and delivery to keep goods moving efficiently.',
        features: [
            'End-to-end control tower coordination',
            'Multi-modal routing and mode optimisation',
            'Inventory-in-transit visibility and reporting',
            'Exception management with named operators',
        ],
        stats: [
            { value: '24/7', label: 'human support coverage' },
            { value: '14 yr', label: 'moving business forward' },
        ],
    },
    {
        slug: 'project-logistics',
        icon: 'fa-helmet-safety',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c508b0?w=800&q=80&auto=format&fit=crop',
        title: 'Project Logistics',
        short: 'Coordinated cargo planning and transportation for complex projects.',
        intro: 'Coordinated cargo planning and transportation for complex projects, heavy equipment, and time-sensitive deliveries.',
        features: [
            'Heavy lift and out-of-gauge cargo planning',
            'Route surveys and permit coordination',
            'On-site supervision and project management',
            'Time-sensitive delivery scheduling',
        ],
        stats: [
            { value: '100+', label: 'projects handled' },
            { value: '0', label: 'safety incidents' },
        ],
    },
];

export const ARTICLES: Article[] = [
    // Same as before...
    {
        slug: 'the-new-rules-of-resilient-supply-chains',
        tag: 'Perspective',
        icon: 'fa-chart-line',
        date: 'June 12, 2024',
        readTime: '06 min read',
        title: 'The new rules of resilient supply chains',
        excerpt: 'What the most prepared operations teams are changing before the next disruption arrives.',
        body: [
            'Resilience used to be measured in backup suppliers. Today it is measured in how quickly a team can see a problem and how much authority they have to act on it.',
            'The operations teams that recovered fastest from the last few years of disruption shared three habits: they shortened the distance between signal and decision, they pre-agreed what to do when a lane failed, and they treated their freight partner as part of the team rather than a vendor.',
            'None of that requires a larger budget. It requires fewer handoffs, clearer ownership, and a willingness to rehearse the bad day before it arrives.',
        ],
    },
    {
        slug: 'when-air-freight-is-the-right-call',
        tag: 'Operations',
        icon: 'fa-plane-departure',
        date: 'May 28, 2024',
        readTime: '04 min read',
        title: 'When air freight is the right call',
        excerpt: 'A practical framework for deciding when speed earns its premium.',
        body: [
            'Air freight is rarely about the cost of the shipment. It is about the cost of the shipment arriving late — a stalled production line, a missed launch, a customer who does not order again.',
            'The simplest test we use with clients: compare the premium against the daily cost of the delay. If the delay costs more per day than the air premium, the decision is already made.',
            'The second test is recoverability. If a sea shipment slips a week, can the schedule absorb it? If the answer is no, plan for air before the problem, not after.',
        ],
    },
    {
        slug: 'a-closer-look-at-port-to-door',
        tag: 'Field Notes',
        icon: 'fa-truck-fast',
        date: 'May 14, 2024',
        readTime: '05 min read',
        title: 'A closer look at port-to-door',
        excerpt: 'Why the last 100 miles deserve the same precision as the first 10,000.',
        body: [
            'A container can cross an ocean without a scratch and still lose three days at the terminal. The final hundred miles are where most promises quietly expire.',
            'We treat the port-to-door leg as its own project: pre-cleared documentation, a booked drayage slot before the vessel berths, and a named contact who owns the delivery window.',
            'It is unglamorous work. It is also the difference between a shipment that arrives and a shipment that arrives on time.',
        ],
    },
];

export const TEAM: TeamMember[] = [
    {
        name: 'Muhammad Waseem',
        role: 'Chief Executive Officer',
        initials: 'MW',
        linkedin: '#',
        twitter: '#',
        email: 'info@icllogistics.com',
    },
    // Add other team members if you have them, otherwise keep just CEO
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: 'ICL Logistics turned our supply chain from a liability into a competitive advantage. Their team owns problems before we even hear about them.',
        name: 'Hassan Raza',
        role: 'COO, Indus Manufacturing',
        initials: 'HR',
    },
    {
        quote: 'We moved 14 lanes to ICL Logistics in one quarter. Not a single shipment slipped without a warning call first. That is the difference.',
        name: 'Zainab Iqbal',
        role: 'VP Supply Chain, Karachi Electronics',
        initials: 'ZI',
    },
    {
        quote: 'The control tower team is the extension of our ops department we never knew we needed. Real answers in minutes, not days.',
        name: 'Usman Sheikh',
        role: 'Head of Logistics, Lahore Textiles',
        initials: 'US',
    },
];