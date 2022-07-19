import React, { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import Select from 'react-select'



const AddNewObject = ({ handleAddChild, parent }: any) => {
  const [currentPair, setCurrentPair] = useState<{key: string;value: string;}>({ key: "", value: "" });


  const options = [
    { value: 'Random_Text', label: 'Random_Text' },
    { value: 'Random_Username', label: 'Random_Username' },
    { value: 'Random_UserImage', label: 'Random_UserImage'},
    { value: 'Customised_Array', label: 'Customised_Array' },
    { value: 'Customised_Object', label: 'Customised_Object' },
  ] 

  const selectStyle = {
    valueContainer: (base: any) => ({
        ...base,
        background: `${"black"}`,
    }),
    control: (base: any, state: any) => ({
        ...base,
        border: `${"black"}`,
        background: `${"black"}`,
    }),
    menuList: (styles: any) => ({
        ...styles,
        background: `${"black"}`,
    }),
    placeholder: (defaultStyles: any) => {
        return {
            ...defaultStyles,
            color: `${"#a1a1aa"}`,
        };
    },
  };

  const styles = {
    select: `basic-multi-select w-full px-4 bg-black text-md font-bold text-white rounded-md`,
  }

  return (
    <div className="flex flex-row p-2 m-1 bg-[#F4ABC4] rounded-md gap-4 w-fit justify-center items-center my-2">
      <input
        type="key"
        className="w-full px-4 py-2 focus:outline-none bg-black text-md font-bold text-white rounded-md"
        placeholder="Key"
        onChange={(e) => {
          const updated = currentPair;
          updated.key = e.target.value;
          setCurrentPair(updated);
        }}
      />
      <p className="font-bold text-xl">:</p>
      <Select
        name={'Value'}
        options={options}
        className={styles.select}
        classNamePrefix={`Value`}
        placeholder={'Value'}
        theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
            ...theme.colors,
            primary25: 'liteblue',
            primary: 'black',
            neutral50: '#1A1A1A',
            },
        })}
        onChange={(e: any) => {
          const updated = currentPair;
          updated.value = e.value;
          setCurrentPair(updated);
        }}
        styles={selectStyle}
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
