// src/components/MyComponent.tsx
import React from "react";

interface MyComponentProps {
  href: string;
  children: React.ReactNode;
}

const BotonSocial: React.FC<MyComponentProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      type="button"
      className="text-orange-700 border border-orange-700 hover:bg-orange-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:focus:ring-orange-800 dark:hover:bg-orange-500 transition-all duration-100"
    >
      {children}
    </a>
  );
};

export default BotonSocial;
