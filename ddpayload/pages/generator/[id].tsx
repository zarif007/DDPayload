import { useRouter } from "next/router";
import React, { useState } from "react";
import ShortUniqueId from "short-unique-id";
import AddNewObject from "../../components/AddNewObject";
import DisplayAddedChild from "../../components/DisplayAddedChild";

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
  const [formattedData, setFormattedData] = useState<any>([]);

  const handleAddChild = (parent: any, currentPair: any) => {

    const updatedData = data;

    const uid = new ShortUniqueId();
    const keyId = uid();

    if (parent === "") {
      updatedData[keyId] = {
        key: currentPair.key,
        value: currentPair.value,
        children: {
          
        },
        
        parent: 1,
      };
    } else {
      console.log('parent', parent)
      // const ooo = {
      //   keyId: {
      //     'key': 'orrrrr',
      //   }
      // };
      // Object.assign(parent.children, ooo)
      // console.log(parent)
    }

    setData(updatedData);
    formatData();
  };

  const formatData = () => {
    setFormattedData(Object.entries(data));
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
            formattedData.length  && <DisplayAddedChild handleAddChild={handleAddChild} data={data} />
          }
          <AddNewObject handleAddChild={handleAddChild} parent={''} />
        </main>
        <p className={styles.curleyBraces}>{`}`}</p>
      </div>
    </div>
  );
};


export default Generator;
