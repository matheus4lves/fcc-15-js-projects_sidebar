import React from "react";

const SocialMediaLinks = () => {
  const socialIcons = [
    { href: "https://www.twitter.com", className: "fab fa-facebook" },
    { href: "https://www.twitter.com", className: "fab fa-twitter" },
    { href: "https://www.twitter.com", className: "fab fa-behance" },
    { href: "https://www.twitter.com", className: "fab fa-linkedin" },
    { href: "https://www.twitter.com", className: "fab fa-sketch" },
  ];

  return (
    <nav className="social-icons">
      <ul>
        {socialIcons.map(socialIcon => (
          <li>
            <a href={socialIcon.href}>
              <i className={socialIcon.className}></i>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialMediaLinks;
