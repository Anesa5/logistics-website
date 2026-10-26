import { airFreightData } from './services-data/air-freight';
import { oceanFreightData } from './services-data/ocean-freight';
import { roadTransportData } from './services-data/road-transport';
import { warehousingData } from './services-data/warehousing';
import { customsClearanceData } from './services-data/customs-clearance';
import { buyersConsolidationData } from './services-data/buyers-consolidation';
import { globalProcurementData } from './services-data/global-procurement';
import { supplyChainData } from './services-data/supply-chain';
import { projectLogisticsData } from './services-data/project-logistics';

export type Service = {
    slug: string;
    icon: string;
    image: string;
    title: string;
    short: string;
    overviewTitle?: string; // 
    intro: string;
    features: string[];
    stats: { value: string; label: string }[];
    process?: { num: string; title: string; desc: string }[];
    faqs?: { q: string; a: string }[];
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
    airFreightData,
    oceanFreightData,
    roadTransportData,
    warehousingData,
    customsClearanceData,
    buyersConsolidationData,
    globalProcurementData,
    supplyChainData,
    projectLogisticsData,
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
        name: 'Muhammad Waseem',
        role: 'Chief Executive Officer',
        initials: 'MW',
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