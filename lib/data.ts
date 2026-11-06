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
    overviewTitle?: string;
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
        slug: 'air-freight-guide-faster-international-shipping',
        tag: 'Air Freight',
        icon: 'fa-plane',
        date: 'November 06, 2026', // <-- Date update ki
        readTime: '07 min read',
        title: 'Air Freight Services: A Practical Guide to Faster International Shipping',
        excerpt: 'For cross-border businesses, delivery time affects customer satisfaction and inventory planning.',
        body: [
            'For cross-border businesses, delivery time affects customer satisfaction and inventory planning. Air freight is often selected when goods need to travel internationally faster than they would by sea or by many land routes. It can be useful for urgent orders, high-value products, samples, spare parts and shipments with a limited delivery window. However, speed is only one part of a successful shipment. Businesses also need to consider cargo dimensions, documentation, handling requirements, customs procedures and the total landed cost. Understanding the process helps businesses choose a suitable transport solution.',
            'What Are Air Freight Services?',
            'Air freight is the transportation of commercial goods by aircraft. Shipments may move as dedicated cargo or in the cargo space of passenger aircraft, depending on the route, capacity and service arrangement. Freight forwarders help coordinate the movement between the shipper, airline, handling agents, customs authorities and the receiver. Their role may include arranging space, preparing or checking shipping documents, coordinating collection and delivery, and keeping the parties informed about shipment progress.',
            'When Should a Business Choose Air Freight?',
            'Air freight can be appropriate when delivery deadlines are tight or when the value of the goods makes a shorter transit time commercially important. Examples include product samples for buyers, time-sensitive components needed to avoid production delays, seasonal merchandise and certain temperature-sensitive or specialist goods when suitable handling is available. It may also help businesses replenish stock quickly when demand changes unexpectedly. Air transport is not automatically the best choice for every shipment: large, heavy or low-value cargo may be more economical by ocean freight.',
            'How Does the Air Freight Process Work?',
            'The process usually begins with shipment details: origin, destination, cargo description, dimensions, gross weight, number of packages and any special handling instructions. The forwarder can then assess routing and available capacity and provide a quotation based on chargeable weight and other applicable costs. After booking, the cargo is collected or delivered to the nominated facility, checked and prepared for air transport. Export documentation and security procedures are completed before departure. At destination, the shipment is handled, customs clearance is arranged, and the cargo is released for collection or final delivery.',
            'Key Benefits of Air Freight for Global Businesses',
            'One major advantage is shorter transit time compared with many other international transport options. This can support responsive inventory management and help businesses meet urgent customer commitments. Air freight can also provide access to a broad network of international airports, making it suitable for many cross-border trade lanes. For compact, high-value goods, faster movement may reduce the time capital is tied up in transit. In addition, scheduled airline services can offer frequent departures on established routes.',
            'What Should You Check Before Booking?',
            'Before choosing an air freight provider, confirm that the proposed route and transit estimate match your delivery requirements. Ask what is included in the quotation, which charges may be billed separately, and whether collection, customs coordination and final delivery are available. Provide precise cargo dimensions and weight because air freight pricing commonly uses chargeable weight, which considers both actual and volumetric weight. Check packaging standards, commodity restrictions, insurance options and documentation requirements.',
            'How ICL Logistics Can Support Air Freight Shipments',
            'Businesses evaluating international cargo options can review ICL Logistics’ air freight services to understand the company’s offering and discuss shipment requirements. Depending on the nature of a consignment, related services may also be relevant. For example, customs clearance is an important part of moving goods across borders, while ocean freight may be worth comparing when transit time is more flexible and shipment economics favour sea transport.',
            'Conclusion',
            'Air freight gives importers and exporters a practical option when speed, responsiveness or access to an international route is a priority. The right decision depends on more than transit time: cargo size, chargeable weight, handling requirements, customs documentation and the full shipping cost all matter. By comparing transport modes and confirming service details before booking, businesses can select a solution that supports their supply chain and customer commitments.',
            'Frequently Asked Questions',
            'Is air freight faster than ocean freight? Air freight is generally faster for international shipments, although actual transit time depends on the route, flight availability, handling and customs clearance. Ocean freight may be more suitable when cost and shipment volume matter more than speed.',
            'How is air freight cost calculated? Charges commonly consider chargeable weight, which is based on the greater of actual gross weight or volumetric weight, along with route, handling and other applicable fees. Request a shipment-specific quotation.',
            'What documents are needed for an air freight shipment? Common documents include an air waybill, commercial invoice and packing list. Additional permits, certificates or declarations may be required depending on the goods and the destination country.',
        ],
    },
    {
        slug: 'ocean-freight-guide-cost-effective-global-shipping',
        tag: 'Ocean Freight',
        icon: 'fa-ship',
        date: 'November 06, 2026', // <-- Date update ki
        readTime: '07 min read',
        title: 'Ocean Freight Services: A Guide to Cost-Effective Global Cargo Shipping',
        excerpt: 'International businesses often need to move large quantities of products, raw materials or equipment between countries.',
        body: [
            'International businesses often need to move large quantities of products, raw materials or equipment between countries. Ocean freight remains a key option for global trade because ships can carry substantial volumes over long distances. For importers and exporters, it can offer a practical balance between capacity and transportation cost, particularly when delivery schedules allow for longer transit times. Yet choosing sea transport involves more than booking space on a vessel. Companies need to understand container options, port handling, documentation, customs procedures and the onward movement of cargo. A clear view of the process helps businesses plan shipments and manage supply-chain expectations.',
            'What Are Ocean Freight Services?',
            'Ocean freight is the transportation of goods by sea between ports. Cargo may be shipped in a full container load (FCL), where one shipper uses an entire container, or less than container load (LCL), where shipments from multiple businesses share container space. The suitable option depends on cargo volume, dimensions, handling needs and commercial priorities. A freight forwarder can coordinate bookings, documentation, port operations and communication between the shipper, carrier, customs representatives and receiver.',
            'FCL and LCL: Which Option Is Suitable?',
            'FCL is often considered when a shipment is large enough to use most or all of a container, or when the shipper prefers the cargo to travel in a dedicated container. It can simplify cargo separation and may reduce handling associated with consolidation. LCL is designed for smaller consignments that do not require a full container. The shipper pays for the space used within a consolidated load, although additional consolidation and deconsolidation handling may apply. Neither option is universally cheaper.',
            'How Does the Ocean Freight Process Work?',
            'A typical shipment starts with details about the cargo, including its description, packaging, dimensions, weight, origin and destination. The forwarder checks routing and container or consolidation options, then provides a quotation and booking information. Cargo is delivered to a warehouse or port facility according to the agreed arrangement. Export documentation and customs formalities are completed before loading. The carrier transports the container by sea to the destination port, where import procedures, terminal handling and release requirements must be addressed.',
            'Benefits of Ocean Freight for Businesses',
            'Ocean freight offers substantial carrying capacity, making it suitable for many bulky, heavy or high-volume shipments. It is commonly used for manufactured goods, machinery, furniture, building materials and commodities that can be transported safely in containers or other appropriate equipment. For businesses with predictable demand, sea transport can support planned replenishment and larger purchasing cycles. It also connects major trading regions through established port networks. However, ocean schedules can be affected by port congestion, weather, vessel changes and other operational factors.',
            'Planning Documents, Costs and Delivery Times',
            'Accurate documentation is essential. Depending on the shipment and countries involved, documents may include a commercial invoice, packing list, bill of lading, certificate of origin and permits or product-specific certificates. The importer should confirm customs requirements before cargo is dispatched. When comparing quotations, review ocean freight, origin and destination handling, documentation, customs-related charges, port fees and inland transportation. Transit time should be treated as an estimate rather than a guarantee unless the service terms state otherwise.',
            'How ICL Logistics Can Support Ocean Freight',
            'Businesses planning sea shipments can explore ICL Logistics’ ocean freight services and discuss the requirements of a particular trade lane. Depending on the cargo and delivery plan, buyers consolidation may be relevant for combining smaller purchases, while customs clearance is an important consideration for import and export movements. If a shipment has a strict deadline, businesses can also compare it with air freight services before selecting a mode.',
            'Conclusion',
            'Ocean freight is an important transport option for businesses moving goods internationally, especially when shipment volume and cost efficiency are priorities. Selecting between FCL and LCL, understanding the full cost structure and preparing accurate documents can make planning more predictable. Businesses should compare service scope and realistic transit estimates before booking, then coordinate customs and inland delivery as part of the overall logistics plan.',
            'Frequently Asked Questions',
            'What is the difference between FCL and LCL shipping? FCL uses an entire container for one shipper’s cargo, while LCL combines smaller shipments from multiple shippers in one container. The best choice depends on volume, handling and total cost.',
            'Is ocean freight cheaper than air freight? Ocean freight is often more economical for large or heavy shipments, but the final comparison depends on cargo size, route, urgency and all associated charges.',
            'How long does ocean freight take? Transit time varies by origin, destination, vessel schedule, transshipment, port conditions and customs procedures. Ask for a route-specific estimate and allow time for port and inland handling.',
        ],
    },
    {
        slug: 'road-transport-regional-supply-chains',
        tag: 'Road Transport',
        icon: 'fa-truck',
        date: 'November 06, 2026', // <-- Date update ki
        readTime: '08 min read',
        title: 'Road Transport Services: Connecting Businesses Across Regional Supply Chains',
        excerpt: 'Road transport plays an important role in moving goods between factories, warehouses, distribution centres, ports and customer locations.',
        body: [
            'Road transport plays an important role in moving goods between factories, warehouses, distribution centres, ports and customer locations. For businesses operating across regional markets, dependable trucking can connect different stages of a supply chain and support deliveries that cannot be completed by sea or air alone. It is also commonly used as the first or final leg of an international shipment. Choosing a road transport solution requires attention to route planning, vehicle suitability, cargo security, delivery schedules and border formalities where cross-border movement is involved. Understanding these factors helps businesses coordinate freight more effectively.',
            'What Are Road Transport Services?',
            'Road transport is the movement of goods by trucks and other road vehicles. It can support domestic distribution, regional trade and the collection or delivery stages of international freight. Depending on the shipment, businesses may require a dedicated vehicle, a part-load arrangement or specialist equipment for particular cargo dimensions or handling needs. Road transport providers coordinate vehicles, drivers, route information and delivery arrangements. The available service depends on the origin, destination, road network, cargo type and applicable regulations.',
            'The Role of Road Transport in the Supply Chain',
            'Road freight connects locations that may not be directly served by airports, seaports or rail terminals. It can move raw materials to production sites, finished products to distribution centres and imported cargo from ports to warehouses. In multimodal logistics, trucks often provide first-mile collection and last-mile delivery around an air or ocean movement. This makes coordination important: a delay in collection or delivery can affect the wider shipment schedule.',
            'How Does a Road Freight Shipment Work?',
            'The process usually begins with the cargo description, weight, dimensions, collection point, delivery address and required delivery date. The transport provider assesses the route and vehicle requirements, then confirms the quotation and operating arrangements. Cargo is prepared and loaded according to its packaging and handling needs. During transit, the driver follows the planned route and any applicable safety or regulatory requirements. At destination, the receiver checks the delivery and acknowledges receipt through the agreed process.',
            'Key Benefits of Road Transport for Businesses',
            'Road transport offers flexibility because vehicles can collect and deliver cargo directly between many business locations. It can be useful for short and medium-distance distribution, scheduled replenishment and connections to ports or airports. Businesses may also be able to arrange vehicle types to suit different cargo requirements, subject to availability and local regulations. Road freight can support frequent deliveries and help companies coordinate stock movement across regional networks.',
            'What to Consider When Selecting a Road Transport Provider',
            'Start by confirming that the provider can serve the required route and handle the cargo safely. Check vehicle suitability, loading arrangements, delivery windows, insurance options and how delays or route changes will be communicated. Accurate weight and dimensions are important for vehicle selection and legal load limits. Businesses should also ask which costs are included, such as fuel, tolls, waiting time, loading or unloading, and any border-related charges. For valuable or sensitive goods, discuss security measures and any tracking or status updates available.',
            'Coordinating Road Transport with Other Logistics Services',
            'Road transport is often most effective when planned as part of a wider logistics arrangement. Cargo arriving by sea may need onward trucking from the port, while air shipments may require collection from an airport cargo terminal. Businesses can review ICL Logistics’ road transport services alongside its ocean freight and air freight options when planning multimodal movements. Warehousing services may also be relevant when goods need to be stored before distribution.',
            'Conclusion',
            'Road transport links key points across domestic and regional supply chains and often completes the first or final stage of international freight. A well-planned movement depends on accurate cargo details, suitable vehicles, realistic delivery windows, clear cost information and coordination with other transport modes. By evaluating these factors before dispatch, businesses can make road freight a more reliable part of their logistics operations.',
            'Frequently Asked Questions',
            'When is road transport used in international logistics? It is commonly used to collect cargo from a shipper, deliver goods to a port or airport, and move imported shipments from a terminal to a warehouse or final destination.',
            'What information is needed for a road freight quotation? Providers typically need collection and delivery locations, cargo description, dimensions, weight, number of packages, preferred dates and any special loading or handling requirements.',
            'Can road transport be combined with air or ocean freight? Yes. Trucks frequently provide collection and delivery for air and ocean shipments as part of a multimodal transport plan. The transfer points and responsibilities should be confirmed in advance.'
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