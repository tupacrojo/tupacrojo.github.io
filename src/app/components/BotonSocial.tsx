// src/components/MyComponent.tsx
import Link from "next/link";
import React from "react";

interface MyComponentProps {
  href: string;
  children: React.ReactNode;
  nombrePixel?: string;
}

const BotonSocial: React.FC<MyComponentProps> = ({
  href,
  children,
  nombrePixel,
}) => {
  return (
    <Link
      onClick={() => {
        if (nombrePixel) {
          window.fbq("trackCustom", `Click${nombrePixel}`, {
            event: `Click en ${nombrePixel}`,
            timestamp: new Date().toISOString(),
          });
        }
      }}
      href={href}
      target="_blank"
      type="button"
      className="text-orange-700 border border-orange-700 hover:bg-orange-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:focus:ring-orange-800 dark:hover:bg-orange-500 transition-all duration-100"
    >
      {children}
    </Link>
  );
};

export default BotonSocial;
