import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import ShortUniqueId from "short-unique-id";
import AddNewObject from "../../components/AddNewObject";
import DisplayAddedChild from "../../components/DisplayAddedChild";
import ValueModal from "../../components/modals/ValueModal";
import formatData from './../../functions/FormatData';
import { globalData } from './../../atoms/globalData';

const Generator = () => {
  const {
    query: { id },
  } = useRouter();


  const [data, setData] = useState<any>({});
  const [actualdata, setActualData] = useState<any>({});
  const [arrayfiedData, setArrayfiedData] = useState<any>([]);

  const ready = () => {

    const updatedData = data;

    const nw: any = formatData(updatedData)

    console.log(nw)
  }
  
  const findParentAndAdd = (parent: string, updatedData: any, currentPair: any, keyId: string) => {


    let type: string = "";

    if(currentPair.value.includes("array"))
      type = 'array'
    else if(currentPair.value.includes("object"))
      type = 'object'
    else 
      type = 'string'

    if (parent === "") {
      updatedData[keyId] = {
        key: currentPair.key,
        value: currentPair.value,
        children: {},
        counter: 0,
        type,
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
          counter: ud[1].counter + 1,
          type,
        }

        Object.assign(ud[1].children, ok)
        return;
      }

      Object.entries(ud[1].children).length > 0 && 
        findParentAndAdd(parent, ud[1].children, currentPair, keyId);
    })
  }

  const handleAddChild = async (parent: any, currentPair: any) => {

    const updatedData = data;

    const uid = new ShortUniqueId();
    const keyId = uid();

    findParentAndAdd(parent, updatedData, currentPair, keyId);
    
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
    <div className="text-white max-w-7xl mx-auto ">

      <Head>
        <title>DD Payload</title>
        <meta name="description" content="Generated apis" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Saira:wght@500&display=swap" rel="stylesheet"></link>
      </Head>
      
      <div className="text-5xl font-bold text-[#F4ABC4] uppercase mx-2">
        Playground
      </div>

      <button className="px-4 py-1 m-2 bg-[#F4ABC4] rounded-md font-semibold text-lg mt-3 mb-0"
        onClick={ready}>Ready</button>

      <button className="px-4 py-1 m-2 bg-[#5DADE2] rounded-md font-semibold text-lg mt-3 mb-0"
        onClick={ready}>Ready</button>

      <button className="px-4 py-1 m-2 bg-[#40E0D0] rounded-md font-semibold text-lg mt-3 mb-0"
        onClick={ready}>Ready</button>

      <div className="border-2 my-12 min-h-fit  border-[#F4ABC4] rounded-md overflow-x-auto mx-2 pb-40 bg-black">
        <div className="flex space-x-2 font-semibold m-1 text-lg mx-4">
          <button className="hover:text-[#F4ABC4]">Generator</button>
          <button className="hover:text-[#F4ABC4]">Demo</button>
        </div>

        <p className={styles.curleyBraces}>{`Data = [{`}</p>
        <main className="m-6 ml-12 text-black">
          {
            arrayfiedData.length > 0 ? <DisplayAddedChild handleAddChild={handleAddChild} data={data} parent={['']} /> : <></>
          }
          <AddNewObject handleAddChild={handleAddChild} parent={['']} />
        </main>
        <p className={styles.curleyBraces}>{`}, ]`}</p>
      </div>

      <ValueModal />

    </div>
  );
};


export default Generator;
