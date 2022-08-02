import React, { useEffect, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { useRecoilState } from "recoil";
import { currentValue } from "../atoms/currentValueAtom";
import { valueModalState } from "../atoms/valueModalAtom";


const AddNewObject = ({ handleAddChild, parent }: any) => {
  const [currentPair, setCurrentPair] = useState<{key: string;value: string;}>({ key: "", value: "" });

  const [isValueModalOpen, setIsValueModalOpen] = useRecoilState(valueModalState);

  const [cValue, setCValue] = useRecoilState(currentValue);


  useEffect(() => {
    setCurrentPair({ key: "", value: "" })
  }, [])


  useEffect(() => {
    const up = currentPair;

    up.value = cValue;

    setCurrentPair(up)
  }, [cValue])

  useEffect(() => {
    if(parent && parent[1]?.type === 'array') {
      console.log(Object.entries(parent[1].children).length.toString())
      setCurrentPair({ key: Object.entries(parent[1].children).length.toString(), value: currentPair.value })
    }    
  }, [parent]);

  return (
    <div className="flex flex-row p-2 m-1 bg-[#F4ABC4] rounded-md gap-4 w-fit justify-center items-center my-2">

      <div>
      {
        parent[1]?.type === 'array' ? <div 
          className={`w-full px-4 py-2 focus:outline-none bg-black text-md font-bold text-white rounded-md`}>
            {currentPair.key}
        </div> : <input
          type="key"
          className={`w-full px-4 py-2 focus:outline-none bg-black text-md font-bold text-white rounded-md`}
          placeholder="Key"
          onChange={(e) => {
            const updated = currentPair;
            updated.key = e.target.value;
            setCurrentPair(updated);
          }}
        />
      }
      </div>
      
      <p className="font-bold text-xl">
        {
          parent[1]?.type === 'array' ? '=' : ':'
        }
      </p>


      <div 
        className={`w-full px-4 py-2 focus:outline-none bg-black text-md font-bold text-gray-400 rounded-md cursor-pointer`}
        onClick={() => setIsValueModalOpen(true)}>
        {
          currentPair.value === '' ? 'Value' : currentPair.value
        }
      </div>

      <div className="rounded-md bg-black p-1 cursor-pointer">
        <RiAddLine
          className="w-6 h-6 text-gray-400"
          onClick={() => {
            handleAddChild(parent[0], currentPair);
            setCValue('')
          }}
        />
      </div>

    </div>
  );
};

export default AddNewObject;
