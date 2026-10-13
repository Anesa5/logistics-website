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
        short: 'Time-critical cargo moved with speed and full visibility, door to door.',
        intro: 'When a shipment cannot wait, air freight earns its premium. We hold the space, watch the cut-offs, and keep you ahead of every handover.',
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
        short: 'Predictable port-to-port movement with space, schedules and customs handled.',
        intro: 'Ocean is a long game of small decisions. We plan the booking, protect the space, and keep the paperwork from becoming the delay.',
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
        short: 'Reliable inland delivery across borders with full load and part load options.',
        intro: 'Road freight is where supply chains are won or lost. We own the last mile as carefully as the first.',
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
        short: 'Flexible storage, fulfilment and inventory management across key hubs.',
        intro: 'Storage should flex with your demand, not lock you into a lease. We run warehousing that scales up and down with your volumes.',
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
        title: 'Custom Clearance',
        short: 'Clearance handled end-to-end so your goods never sit at the border.',
        intro: 'Customs is where good freight plans quietly die. We pre-clear documentation and keep your cargo moving without delay.',
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
        short: 'Multiple suppliers, one shipment — consolidated at origin for maximum savings.',
        intro: 'When you buy from many suppliers, consolidating at origin saves space, duty and handling cost. We coordinate the pickup, merge the cargo, and ship it as one.',
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
        short: 'Source smarter with vetted suppliers, negotiated pricing and QC support.',
        intro: 'Finding the right supplier is only half the job. We help you source, verify, negotiate, and quality-check — so what you buy is what you get.',
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
        short: 'One accountable partner coordinating every handoff across your supply chain.',
        intro: 'Most supply chains break between the transport legs. We own the seams, so nothing gets lost in the handoff.',
        features: [
            'End-to-end control tower coordination',
            'Multi-modal routing and mode optimisation',
            'Inventory-in-transit visibility and reporting',
            'Exception management with named operators',
        ],
        stats: [
            { value: '24/7', label: 'human support coverage' },
            { value: '16 yr', label: 'moving business forward' },
        ],
    },
];

export const ARTICLES: Article[] = [
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
    {
        slug: 'customs-mistakes-that-cost-weeks',
        tag: 'Customs',
        icon: 'fa-file-shield',
        date: 'April 30, 2024',
        readTime: '07 min read',
        title: 'Customs mistakes that cost weeks',
        excerpt: 'The five documentation errors we see most often — and how to avoid them.',
        body: [
            'Customs delays almost never come from the goods themselves. They come from paperwork that was filled in too fast, or not at all.',
            'The five we see most: mismatched invoice values, wrong HS codes, missing certificates of origin, vague goods descriptions, and an importer of record who is not actually set up in the destination country.',
            'Each one is boring. Each one can hold a shipment for days. The fix is a pre-clearance checklist you actually use.',
        ],
    },
    {
        slug: 'the-real-cost-of-cheap-freight',
        tag: 'Perspective',
        icon: 'fa-calculator',
        date: 'April 18, 2024',
        readTime: '05 min read',
        title: 'The real cost of cheap freight',
        excerpt: 'Why the lowest quote is rarely the lowest total cost of ownership.',
        body: [
            'Cheap freight is a story told on the invoice. Expensive freight is a story told six weeks later, when a customer leaves.',
            'The line item you should be comparing is not the per-container rate. It is the total cost of moving a unit of product from origin to a happy customer, including delays, damage, and the staff time spent chasing updates.',
            'When you compare that number, the cheapest quote rarely wins.',
        ],
    },
    {
        slug: 'building-a-control-tower-that-works',
        tag: 'Operations',
        icon: 'fa-satellite-dish',
        date: 'April 5, 2024',
        readTime: '08 min read',
        title: 'Building a control tower that works',
        excerpt: 'What separates useful supply chain visibility from another dashboard nobody opens.',
        body: [
            'Most control towers fail for the same reason: they show everything and own nothing. A dashboard is not a control tower. A control tower is a team with authority.',
            'The useful version has three parts: one source of truth, a small set of alerts that actually fire, and a named person who acts on each one.',
            'If any of those three is missing, the tower is decoration.',
        ],
    },
];

export const TEAM: TeamMember[] = [
    {
        name: 'Ahmed Khan',
        role: 'Chief Executive Officer',
        initials: 'AK',
        linkedin: '#',
        twitter: '#',
        email: 'info@icllogistics.com',
    },
    {
        name: 'Fatima Malik',
        role: 'Operations Manager',
        initials: 'FM',
        linkedin: '#',
        twitter: '#',
        email: 'info@icllogistics.com',
    },
    {
        name: 'Bilal Hussain',
        role: 'Logistics Manager',
        initials: 'BH',
        linkedin: '#',
        twitter: '#',
        email: 'info@icllogistics.com',
    },
    {
        name: 'Ayesha Siddiqui',
        role: 'Customer Relations Manager',
        initials: 'AS',
        linkedin: '#',
        twitter: '#',
        email: 'info@icllogistics.com',
    },
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