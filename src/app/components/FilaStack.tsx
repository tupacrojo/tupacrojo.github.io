import React from "react";

interface MyComponentProps {
  title?: string;
  children: React.ReactNode;
}

function FilaStack({ title, children }: MyComponentProps) {
  return (
    <>
      {title && (
        <p className="ml-1.5 font-black  w-fit p-2 rounded-lg">{title}</p>
      )}
      <div className="space-x-2 space-y-2 flex flex-row flex-wrap justify-center items-center bg-orange-200 bg-opacity-10 p-4 rounded-xl">
        <div></div>
        {children}
      </div>
    </>
  );
}

export default FilaStack;
