import React, { useState } from "react";
import { RiAddLine } from "react-icons/ri";

const AddNewObject = ({ handleAddChild, parent }: any) => {
  const [currentPair, setCurrentPair] = useState<{
    key: string;
    value: string;
  }>({ key: "", value: "" });

  return (
    <div className="flex flex-row p-2 bg-[#F4ABC4] rounded-md gap-4 w-fit justify-center items-center my-2">
      <input
        type="key"
        className="w-full px-4 py-1 focus:outline-none bg-black text-md font-bold text-white rounded-md"
        placeholder="Key"
        onChange={(e) => {
          const updated = currentPair;
          updated.key = e.target.value;
          setCurrentPair(updated);
        }}
      />
      <p className="font-bold text-xl">:</p>
      <input
        type="value"
        className="w-full px-4 py-1 focus:outline-none bg-black text-md font-bold text-white rounded-md"
        placeholder="Value"
        onChange={(e) => {
          const updated = currentPair;
          updated.value = e.target.value;
          setCurrentPair(updated);
        }}
      />
      <div className="rounded-md bg-black p-1 cursor-pointer">
        <RiAddLine
          className="w-6 h-6 text-gray-400"
          onClick={() => {
            handleAddChild(parent, currentPair);
            setCurrentPair({ key: "", value: "" });
          }}
        />
      </div>
    </div>
  );
};

export default AddNewObject;
