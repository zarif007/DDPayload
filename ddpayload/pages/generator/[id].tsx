import { useRouter } from "next/router";
import React, { useState } from "react";
import ShortUniqueId from "short-unique-id";
import AddNewObject from "../../components/AddNewObject";
import DisplayAddedChild from "../../components/DisplayAddedChild";

const Generator = () => {
  const {
    query: { id },
  } = useRouter();


  const [data, setData] = useState<any>({});
  const [actualdata, setActualData] = useState<any>({});
  const [arrayfiedData, setArrayfiedData] = useState<any>([]);


  const formatData = (updatedData: any) => {

    Object.entries(updatedData).map((ud: any) => {
      if(ud[1]?.value?.includes('Array') || ud[1]?.value?.includes('Object')){
        return 0;
      } else {
        const dp: any = {};

        dp[ud[1].key] = ud[1].value;

        return dp;
      }
    })

    return updatedData
  }

  const ready = () => {

    const updatedData = data;

    const chk = formatData(updatedData)

    console.log(chk)
  }
  
  const findParent = (parent: string, updatedData: any, currentPair: any, keyId: string) => {

    if (parent === "") {
      updatedData[keyId] = {
        key: currentPair.key,
        value: currentPair.value,
        children: {
          
        },
        counter: 0,
      };

      return;
    }

    
    Object.entries(updatedData).map((ud: any) => {

      if(parent === ud[0]){
        const ok: any = {}

        ok[keyId] = {
          key: currentPair.key,
          value: currentPair.value,
          children: {
            
          },
          counter: ud[1].counter + 1
        }

        Object.assign(ud[1].children, ok)
        return;
      }

      Object.entries(ud[1].children).length > 0 && 
        findParent(parent, ud[1].children, currentPair, keyId);
    })
  }

  const handleAddChild = (parent: any, currentPair: any) => {

    const updatedData = data;

    const uid = new ShortUniqueId();
    const keyId = uid();

    findParent(parent, updatedData, currentPair, keyId);
    
    setData(updatedData);
    arrayFiedData();
  };

  const arrayFiedData = () => {
    setArrayfiedData(Object.entries(data));
  }


  const styles = {
    curleyBraces: `text-6xl text-[#F4ABC4] font-bold m-3`,
  };

  return (
    <div className="text-white max-w-7xl mx-auto">
      <div className="text-5xl font-bold text-[#F4ABC4] uppercase mx-2">
        Playground
      </div>

      <button className="px-4 py-1 m-2 bg-[#F4ABC4] rounded-md font-semibold text-lg mt-3 mb-0"
      onClick={ready}>Ready</button>

      <div className="border my-12 min-h-fit  border-[#F4ABC4] rounded-sm overflow-x-auto mx-2 pb-40">
        <div className="flex space-x-2 font-semibold m-1 text-lg mx-4">
          <button className="hover:text-[#F4ABC4]">Generator</button>
          <button className="hover:text-[#F4ABC4]">Demo</button>
        </div>

        <p className={styles.curleyBraces}>{`{`}</p>
        <main className="m-6 ml-12 text-black">
          {
            arrayfiedData.length > 0 ? <DisplayAddedChild handleAddChild={handleAddChild} data={data} /> : <></>
          }
          <AddNewObject handleAddChild={handleAddChild} parent={''} />
        </main>
        <p className={styles.curleyBraces}>{`}`}</p>
      </div>
    </div>
  );
};


export default Generator;
