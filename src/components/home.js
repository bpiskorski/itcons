import React from 'react';
import { Link } from "react-router-dom";
import './home.css';

function Home() {
  return (
    <div className='Home'>
      <div className='services'>
        <h2>Our Services</h2>
        <ul>
          <li>
            <h3>Mobile and Computer Repair and Maintenance</h3>
            <ul>
              <li>Our skilled technicians are experts in diagnosing and repairing hardware and software issues with your mobile devices and computers.</li>
              <li>We provide timely repairs to get your devices back up and running as quickly as possible.</li>
              <li>Regular maintenance helps to prevent future issues and keep your devices running smoothly.</li>
            </ul>
          </li>
          <li>
            <h3>IT Consulting</h3>
            <ul>
              <li>Our experienced consultants can provide advice on the best technology solutions to meet your business needs.</li>
              <li>We can help you optimize your IT infrastructure to improve efficiency, productivity, and security.</li>
              <li>With our consulting services, you can stay up-to-date with the latest technology trends and advancements.</li>
            </ul>
          </li>
          <li>
            <h3>Network Installation and Optimization</h3>
            <ul>
              <li>We can help you set up and optimize your network infrastructure for better connectivity and security.</li>
              <li>Our team can assist with the installation and configuration of routers, switches, and firewalls to ensure reliable and secure network access.</li>
              <li>With our network optimization services, you can improve the performance of your network and avoid downtime.</li>
            </ul>
          </li>
          <li>
            <h3>Databases</h3>
            <ul>
              <li>Our database experts can help you design, implement, and manage your databases to ensure optimal performance and reliability.</li>
              <li>We can assist with the migration of data between databases and provide support for your database applications.</li>
              <li>With our database services, you can ensure that your data is secure and easily accessible.</li>
            </ul>
          </li>
        </ul>
        <p>Contact us today to learn more about how we can help you with your technology needs.</p>
        <div className='btns'>
          <Link to="/contact">
            <button>contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}




export default Home;
