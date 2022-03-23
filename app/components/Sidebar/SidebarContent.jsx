import React from "react";

const SidebarContent = () => {
  const links = [
    { href: "index.html", content: "home" },
    { href: "about.html", content: "about" },
    { href: "projects.html", content: "projects" },
    { href: "contact.html", content: "contact" },
  ];

  return (
    <nav className="links">
      <ul>
        {links.map(link => (
          <li>
            <a href={link.href}>{link.content}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarContent;
