import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import ShortUniqueId from "short-unique-id";
import { AiFillDelete } from "react-icons/ai";
import { TiFlowChildren } from "react-icons/ti";

const Generator = () => {
  const {
    query: { id },
  } = useRouter();

  // const data = {
  //   name: {
  //     key: 'name',
  //     value: 'username',
  //     children: [],
  //     parent: 1,
  //   },
  //   age: {
  //     key: 'age',
  //     value: 'age',
  //     children: [],
  //     parent: 1,
  //   },
  //   what: {
  //     key: 'what',
  //     value: 'object',
  //     children: [
  //       {
  //         key: 'kothay?',
  //         value: 'address',
  //         children: [],
  //         parent: 2,
  //       }
  //     ],
  //     parent: 1,
  //   },
  //   array: {
  //     key: 'array',
  //     value: 'array',
  //     children: [],
  //     parent: 1,
  //   }
  // };

  // console.log(Object.entries(data))

  const [data, setData] = useState<any>({});

  const [formattedData, setformattedData] = useState<any>([]);



  const handleAddChild = (parent: string, currentPair: any) => {

    const updatedData = data;

    const uid = new ShortUniqueId();
    const keyId = uid();

    if (parent === "") {
      updatedData[keyId] = {
        key: currentPair.key,
        value: currentPair.value,
        children: [],
        parent: 1,
      };
    } else {
    }

    setData(updatedData);
    fromatData();
  };

  const fromatData = () => {
    setformattedData(Object.entries(data));
  }
  

  const styles = {
    curleyBraces: `text-4xl text-[#F4ABC4] font-bold m-3`,
  };

  return (
    <div className="text-white max-w-7xl mx-auto">
      <div className="text-5xl font-bold text-[#F4ABC4] uppercase">
        Playground
      </div>

      <div className="border my-12 min-h-screen  border-[#F4ABC4] rounded-sm">
        <div className="flex space-x-2 font-semibold m-1 text-lg mx-4">
          <button className="hover:text-[#F4ABC4]">Generator</button>
          <button className="hover:text-[#F4ABC4]">Demo</button>
        </div>

        <p className={styles.curleyBraces}>{`{`}</p>
        <main className="m-6 text-black">
          {
            formattedData.map((data: any) => {
              return(
                <div key={data[0]} className='flex space-x-1'>
                  <DisplayAddedChild Key={data[1].key} Value={data[1].value} />
                  <span className="text-[#F4ABC4] font-semibold text-2xl mt-8">,</span>
                </div>
              )
            })
          }
          <AddNewObject handleAddChild={handleAddChild} parent={''} />
        </main>
        <p className={styles.curleyBraces}>{`}`}</p>
      </div>
    </div>
  );
};


const AddNewObject = ({handleAddChild, parent}: any) => {

  const [currentPair, setCurrentPair] = useState<{key: string, value: string}>({key: '',
                                                                               value: ''});

  return (
    <div className="flex flex-row p-2 bg-[#F4ABC4] rounded-md gap-4 w-1/4 justify-center items-center my-2">
      <input
        type="key"
        className="w-full px-4 py-1 focus:outline-none bg-black text-md font-bold text-white rounded-md"
        placeholder="Key"
        onChange={(e) => {
          const updated = currentPair;
          updated.key = e.target.value;
          setCurrentPair(updated)
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
          setCurrentPair(updated)
        }}
      />
      <div className="rounded-md bg-black p-1 cursor-pointer">
        <RiAddLine className="w-6 h-6 text-gray-400" 
          onClick={() => {
            handleAddChild(parent, currentPair);
            setCurrentPair({key: '', value: ''})
          }}/>
      </div>
    </div>
  )
}


const DisplayAddedChild = ({Key, Value}: any) => {
  // console.log('dsad', Key, Value)
  return (
    <div className="flex flex-row p-2 bg-[#F4ABC4] rounded-md gap-4 w-fit justify-center items-center my-2">
      <div
        className="w-full px-4 py-1 focus:outline-none bg-black text-md font-bold text-white rounded-md"
      >{Key}</div>
      <p className="font-bold text-xl">:</p>
      <div
        className="w-full px-4 py-1 focus:outline-none bg-black text-md font-bold text-white rounded-md"
      >{Value}</div>
      <div className="flex space-x-1">
        <div className="rounded-md bg-black p-1 cursor-pointer flex">
          <TiFlowChildren className="w-6 h-6 text-gray-400" />
        </div>
        <div className="rounded-md bg-black p-1 cursor-pointer flex">
          <AiFillDelete className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </div>
  )
}

export default Generator;
