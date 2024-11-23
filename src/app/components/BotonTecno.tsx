import React from "react";

interface MyComponentProps {
  title?: string;
  children: React.ReactNode;
}

function BotonTecno({ title, children }: MyComponentProps) {
  return (
    <div className="min-w-36 bg-orange-600 rounded-xl p-2 flex flex-row justify-center items-center w-auto h-auto space-x-2">
      {children}
      {title && <p>{title}</p>}
    </div>
  );
}

export default BotonTecno;
