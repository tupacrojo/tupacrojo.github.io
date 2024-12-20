import React from "react";

interface CardProps {
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

const CardWork: React.FC<CardProps> = ({ title, content, footer }) => {
  return (
    <div className="flex flex-col h-auto w-96 rounded-xl justify-between bg-white bg-opacity-10 p-4 space-y-4 shadow shadow-orange-500">
      <p className="flex text-2xl justify-center font-semibold">{title}</p>
      <div className="bg-white bg-opacity-5 p-2 rounded-xl">{content}</div>
      {footer && <div className="flex justify-center">{footer}</div>}
    </div>
  );
};

export default CardWork;
