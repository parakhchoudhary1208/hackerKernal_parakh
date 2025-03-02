"use client"
import Link from "next/link";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="section-head-wrapper-light">
                <h4 className="section-head">Contact</h4>
            </div>
            <ul className="contact-details">
                <li className="address">
                    <div className="contact-icon">
                        <img src="/assets/CU1.png" alt="CU1" />
                    </div>
                    <Link href="#">White Architectures<br />2787 Street, Fremont<br />California<br />94538</Link>
                </li>
                <li className="mail">
                    <div className="contact-icon">
                        <img src="/assets/CU2.png" alt="CU2" />
                    </div>
                    <Link href="#">wagetintouch@whitearch.com</Link>
                </li>
                <li className="tel">
                    <div className="contact-icon">
                        <img src="/assets/CU3.png" alt="CU3" />
                    </div>
                    <Link href="#">510-979-9360</Link>
                </li>
            </ul>
        </section>
    );
};

export default Contact;