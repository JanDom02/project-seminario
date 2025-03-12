import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navBarStyles } from "@/styles/navBarStyles";

interface NavbarProps {
  links: { label: string; href: string }[];
}

export default function Navbar({ links }: NavbarProps) {
  const router = useRouter();

  return (
    <nav className={navBarStyles.container}>
      <div className={navBarStyles.nav}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${navBarStyles.link} ${
              router.pathname === link.href ? navBarStyles.active : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
