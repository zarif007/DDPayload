import React from "react";
import { RiSettings2Line } from "react-icons/ri";
import AddNewObject from "./AddNewObject";


const DisplayAddedChild = ({ data, handleAddChild }: any) => {
  return (
    <>
      { data === undefined ? 'loading' :  Object.entries(data).map((fData: any) => {
        return (
          <div key={fData[0]}>
            <div className="flex space-x-1 items-center" >
              <div className={`flex flex-row p-2 bg-[${fData[1].color}] rounded-md gap-4 w-fit justify-center items-center my-2`}>
                <div className="w-full px-4 py-1 focus:outline-none bg-black text-md font-bold text-white rounded-md">
                  {fData[1].key}
                </div>
                <p className="font-bold text-xl">:</p>
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
                {(fData[1]?.value?.includes('Array') || fData[1]?.value?.includes('Object')) ? (
                  <span className={`text-[${fData[1].color}] font-semibold text-5xl pl-2`}>
                    {
                      fData[1]?.value?.includes('Object') ? '{' : '['
                    }
                  </span>
                ) : (
                  <span className={`text-[${fData[1].color}] font-semibold text-5xl mt-8`}>
                    {fData[1]?.value?.length > 2 && ','}
                  </span>
                )}
              </div>
            </div>
            {/* Children  */}
            {(fData[1].children !== undefined && fData[1].children !== null) && Object.entries(fData[1].children).length && (
              <>
                <div className="m-2 ml-8 block">
                  <DisplayAddedChild
                    handleAddChild={handleAddChild}
                    data={fData[1].children}
                  />
                </div>
              </>
            )}

            {
              (fData[1]?.value?.includes('Array') || fData[1]?.value?.includes('Object')) && (
                <>
                  <div className="m-2 ml-8 block">
                    <AddNewObject handleAddChild={handleAddChild} parent={fData[0]} />
                  </div>
                  <span className={`text-[${fData[1].color}] font-semibold text-5xl`}>
                    {
                      fData[1]?.value?.includes('Object') ? '},' : '],'
                    }
                  </span>
                </>
              ) 
            }
            
          </div>
        );
      })}
    </>
  );
};

export default DisplayAddedChild;
