import React from "react";
import "./Pricing.css";

const Pricing = () => {
    return (
        <div className="pricing">

            <div className="pricing-container">
                <div className="pricing-card">
                    <h2>Computer Repair and Maintenance</h2>
                    <p className="pricing-price">£100</p>
                    <ul className="pricing-features">
                        <li>Computer repair and maintenance</li>
                        <li>Data backup and recovery</li>
                        <li>Security and virus protection</li>
                    </ul>
                </div>
                <div className="pricing-card">
                    <h2>IT Consulting</h2>
                    <br />
                    <p className="pricing-price">£80</p>
                    <ul className="pricing-features">
                        <li>Assessing the technology needs of a business and making recommendations for improvements.</li>
                        <li>Providing guidance on software and hardware selection, procurement, and implementation. </li>
                        <li>Developing technology strategies and plans to align with business objectives.</li>
                        <li>Conducting IT training sessions for staff members.</li>

                    </ul>
                </div>
                <div className="pricing-card">
                    <h2>Network Installation and Support</h2>
                    <p className="pricing-price">
                        £100</p>
                    <ul className="pricing-features">
                        <li>Designing and implementing</li>
                        <li>Network support</li>
                        <li>Monitoring and maintenance</li>
                        <li>Optimization</li>
                    </ul>
                </div>
                <div className="pricing-card">
                    <h2>Database</h2>
                    <br />
                    <p className="pricing-price">£100</p>
                    <ul className="pricing-features">
                        <li>Designing and implementing</li>
                        <li>Network support</li>
                        <li>Monitoring and maintenance</li>
                        <li>Optimization</li>
                    </ul>
                </div>

            </div>

            <div className="pricing-card2">
                <h3>We provide a complimentary collection and delivery service for private customers once their repairs have been completed.</h3>
            </div>
        </div>

    );
};

export default Pricing;
