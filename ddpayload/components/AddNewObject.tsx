import React, { useEffect, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { useRecoilState } from "recoil";
import { currentValue } from "../atoms/currentValueAtom";
import { valueModalState } from "../atoms/valueModalAtom";


const colors = ["#F4ABC4", "#5DADE2", "#40E0D0"];

const AddNewObject = ({ handleAddChild, parent }: any) => {
  const [currentPair, setCurrentPair] = useState<{key: string;value: string;}>({ key: "", value: "" });

  const [isValueModalOpen, setIsValueModalOpen] = useRecoilState(valueModalState);

  const [cValue, setCValue] = useRecoilState(currentValue);

  const [color, setColor] = useState<string>('#F4ABC4');

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
      setCurrentPair({ key: Object.entries(parent[1].children).length.toString(), value: currentPair.value });
    }    

    if(parent[1]?.counter >= 0) {
      setColor(colors[(parent[1]?.counter + 1) % colors.length]);

      console.log(color, parent)
    }

  }, [parent]);

  return (
    <>
    <div className="hidden">
        <p className="text-[#F4ABC4]">hi</p>
        <p className="text-[#5DADE2]">hi</p>
        <p className="text-[#40E0D0]">hi</p>
      </div>
    <div className={`flex flex-row p-2 m-1 bg-[${color}] rounded-md gap-4 w-fit justify-center items-center my-2`}>
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
    </>
  );
};

export default AddNewObject;
