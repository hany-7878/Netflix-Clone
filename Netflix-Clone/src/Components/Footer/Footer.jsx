
import React, { useState } from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br/>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price.",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com or on any internet-connected device that offers the Netflix app.<br/>You can also download shows with the iOS or Android app to watch offline.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies.<br/>Kids profiles come with PIN-protected parental controls to restrict content.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="footer_container">
      {/* FAQ Section */}
      <div className="footer_faq">
        <h3>Frequently Asked Questions</h3>
        <ul className="faq_list">
          {faqData.map((item, index) => (
            <li
              key={index}
              className={`faq_item ${openIndex === index ? "open" : ""}`}
              onClick={() => handleToggle(index)}
            >
              <div className="faq_question">
                {item.question}
                <span className="faq_toggle">{openIndex === index ? "➕" : "➕"}</span>
              </div>
              {openIndex === index && (
                <p
                  className="faq_answer"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                ></p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Email Subscription */}
      <div className="footer_email">
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
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
