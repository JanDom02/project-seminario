"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navBarStyles } from "@/styles/navBarStyles";
import LoginButton from "@/components/LoginButton"; // Importamos el nuevo componente

interface NavbarProps {
  links: { label: string; href: string }[];
}

export default function Navbar({ links }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className={navBarStyles.container}>
      <div className={navBarStyles.nav}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${navBarStyles.link} ${
              pathname === link.href ? navBarStyles.link : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      
    </nav>
  );
}
