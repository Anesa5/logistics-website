'use client';

export default function CallButton() {
    // Yahan apna Phone Number dalein (jo aapne topbar mein lagaya hai)
    const phoneNumber = '+923111444224';

    return (
        <a
            href={`tel:${phoneNumber}`}
            className="call-float"
            aria-label="Call Us"
        >
            <i className="fa-solid fa-phone"></i>
        </a>
    );
}