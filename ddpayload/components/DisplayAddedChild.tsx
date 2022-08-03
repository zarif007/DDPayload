import React, { useEffect, useState } from "react";
import { RiSettings2Line } from "react-icons/ri";
import AddNewObject from "./AddNewObject";

const colors = ["#F4ABC4", "#5DADE2", "#40E0D0"];


// const colors = ["#F4ABC4", "#F4ABC4", "#F4ABC4"];

const DisplayAddedChild = ({ data, handleAddChild, parent }: any) => {
  
  return (
    <>
      <div className="hidden">
        <p className="text-[#F4ABC4]">hi</p>
        <p className="text-[#5DADE2]">hi</p>
        <p className="text-[#40E0D0]">hi</p>
      </div>
      {data === undefined
        ? "loading"
        : Object.entries(data).map((fData: any) => {
            return <RenderChild key={fData[0]} handleAddChild={handleAddChild} fData={fData} parent={parent} />;
          })}
    </>
  );
};

const RenderChild = ({ fData, handleAddChild, parent }: any) => {

  const [color, setColor] = useState<string>(colors[fData[1].counter % colors.length]);

  useEffect(() => {
    setColor(colors[fData[1].counter % colors.length]);
  }, [fData])

  return (
    <div
      className={`border border-black hover:border-[${color}] p-1 w-fit`}
    >
      <div className="flex space-x-1 items-center">
        <div
          className={`flex flex-row p-2 bg-[${
            color
          }] rounded-md gap-4 w-fit justify-center items-center my-2`}
        >
          <div className="w-full px-4 py-1 focus:outline-none bg-black text-md font-bold text-white rounded-md">
            {fData[1].key}
          </div>
          <p className="font-bold text-xl">{parent[1]?.type === 'array' ? '=' : ':'}</p>
          <div className="w-full px-4 py-1 focus:outline-none bg-black text-md font-bold text-white rounded-md">
            {fData[1].value}
          </div>
          <div className="flex space-x-1">
            <div className="rounded-md bg-black p-1 cursor-pointer flex">
              <RiSettings2Line className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
        <div>
          {fData[1]?.type === 'array'  ||
          fData[1]?.type === 'object' ? (
            <span
              className={`text-[${
                color
              }] font-semibold text-5xl pl-2`}
            >
              {fData[1]?.type === 'object' ? "{" : "["}
            </span>
          ) : (
            <span
              className={`text-[${
                color
              }] font-semibold text-5xl mt-8`}
            >
              {fData[1]?.value?.length > 2 && ","}
            </span>
          )}
        </div>
      </div>
      {/* Children  */}
      {fData[1].children !== undefined &&
        fData[1].children !== null &&
        Object.entries(fData[1].children).length > 0 && (
          <>
            <div className="m-2 ml-8 block">
              <DisplayAddedChild
                handleAddChild={handleAddChild}
                data={fData[1].children}
                parent={fData}
              />
            </div>
          </>
        )}

      {(fData[1]?.type === 'array'  ||
        fData[1]?.type === 'object') && (
        <>
          <div className="m-2 ml-8 block">
            <AddNewObject handleAddChild={handleAddChild} parent={fData} />
          </div>
          <span
            className={`text-[${
              color
            }] font-semibold text-5xl`}
          >
            {fData[1]?.type === 'object' ? "}," : "],"}
          </span>
        </>
      )}
    </div>
  );
};

export default DisplayAddedChild;
