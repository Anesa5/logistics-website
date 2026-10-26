'use client';

export default function WhatsAppButton() {
    // Yahan apna WhatsApp number dalein (Country code ke sath, bina + ke)
    // Example: Pakistan ka 03111444224 -> 923111444224
    const phoneNumber = '923111444224';
    const message = 'Hello ICL Logistics, I would like to inquire about your services.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <i className="fa-brands fa-whatsapp"></i>
        </a>
    );
}