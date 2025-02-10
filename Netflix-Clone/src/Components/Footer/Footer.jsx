import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      {/* FAQ Section */}
      <div className="footer_faq">
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li>What is Netflix?</li>
          <li>How much does Netflix cost?</li>
          <li>Where can I watch?</li>
          <li>How do I cancel?</li>
          <li>What can I watch on Netflix?</li>
          <li>Is Netflix good for kids?</li>
        </ul>
      </div>

      {/* Email Subscription */}
      <div className="footer_email">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="email_input">
          <input type="email" placeholder="Enter your email" />
          <button>Get Started</button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer_links_container">
        <div className="footer_links">
          <ul>
            <li>Questions? Contact us.</li>
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Account</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Ways to Watch</li>
          </ul>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
          </ul>
          <ul>
            <li>Contact Us</li>
            <li>Speed Test</li>
            <li>Legal Notices</li>
            <li>Only on Netflix</li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="footer_socials">
        <FacebookOutlinedIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </div>

      {/* Copyright */}
      <div className="footer_copy">
        <p>© 2025 Netflix Clone | Built by Hana Tesfaye</p>
      </div>
    </div>
  );
}

export default Footer;