import React from "react";
import "./MobileServices.css"; // import CSS file for this component

const MobileServices = () => {
    return (
        <div className="mobile-services">
            <h2>Mobile Services</h2>
            <ul>
                <li>
                    <strong>Convenience</strong><br />Our mobile technicians offer the
                    convenience of having your device repaired or serviced at your
                    location, saving you the hassle of having to take your device to a
                    repair shop.
                </li>
                <li>
                    <strong>Time-Saving</strong><br />With our mobile services, you don't have
                    to take time off work or schedule your day around dropping off and
                    picking up your device.
                </li>
                <li>
                    <strong>Faster Repairs</strong><br />Our mobile technicians can offer
                    faster repairs than traditional repair shops since they have all the
                    necessary tools and equipment with them, allowing them to diagnose and
                    fix the problem on the spot.
                </li>
                <li>
                    <strong>Personalized Service</strong><br />We offer a more personalized
                    service than traditional repair shops. We take the time to understand
                    your needs and concerns and provide tailored solutions that meet your
                    specific needs.
                </li>
                <li>
                    <strong>Cost-Effective</strong><br /> Our mobile services are more
                    affordable than traditional repair shops since we have lower overhead
                    costs, such as rent and utilities, and can pass these savings on to
                    our customers.
                </li>
                <li>
                    <strong>Professionalism</strong><br />Our mobile technicians are trained
                    professionals who have the skills and knowledge to repair and maintain
                    your device to the highest standards.
                </li>
            </ul>
        </div>
    );
};

export default MobileServices;