import { Dialog, Transition, Disclosure } from "@headlessui/react";
import { Fragment } from "react";
import { useRecoilState } from "recoil";
import { valueModalState } from "./../../atoms/valueModalAtom";
import { ChevronUpIcon } from '@heroicons/react/solid';
import { currentValue } from "../../atoms/currentValueAtom";


const Options = [
  {
    Topic: 'Array',
    subOptions: [
      {Name: 'Cutomised Array', Value: 'cutomised_array'},
      {Name: 'Array of Random User Images', Value: 'random_userimage_array'},
      {Name: 'Array of Random Images', Value: 'random_image_array'},
      {Name: 'Array of Random User Name', Value: 'random_username_array'},
      {Name: 'Array of Random Text', Value: 'random_text_array'},
    ]
  },
  {
    Topic: 'String',
    subOptions: [
      {Name: 'Random User Name', Value: 'random_username'},
      {Name: 'Random Text', Value: 'random_text'},
    ]
  },
  {
    Topic: 'Object',
    subOptions: [
      {Name: 'Cutomised Object', Value: 'cutomised_object'},
    ]
  },
]

const ValueModal = () => {
  const [isValueModalOpen, setIsValueModalOpen] =
    useRecoilState(valueModalState);


  const [value, setValue] = useRecoilState(currentValue);

  return (
    <Transition appear show={isValueModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsValueModalOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-xl border-2 border-[#F4ABC4] bg-black p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h1"
                  className="text-xl font-medium leading-6 text-gray-200"
                >
                  Chose Value
                </Dialog.Title>

                <div className="w-full pt-4">
                  <div className="mx-auto w-full max-w-2xl rounded-xl bg-black border-2 border-gray-600 p-2">

                    {
                      Options.map((option: any) => {
                        return (
                          <Disclosure key={option.Topic}>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="my-1 flex w-full justify-between rounded-md bg-[#f9d1df] px-4 py-2 text-left text-lg font-medium text-gray-900 hover:bg-[#F4ABC4] focus:outline-none focus-visible:ring focus-visible:ring-[#F4ABC4] focus-visible:ring-opacity-75">
                                  <span>{option.Topic}</span>
                                  <ChevronUpIcon
                                    className={`${
                                      open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-[#F4ABC4]`}
                                  />
                                </Disclosure.Button>
                                
                                <Disclosure.Panel className="pl-6 pt-1 pb-2 text-lg text-gray-500">
                                  <div className="flex pr-2 flex-col space-y-2">
                                    {
                                      option.subOptions.map((subO: any) => {
                                        return (
                                          <div 
                                            key={subO.Name} 
                                            className="cursor-pointer flex w-full justify-between rounded-md bg-[#f9d1df] px-4 py-2 text-left text-lg font-medium text-gray-900 hover:bg-[#F4ABC4] focus:outline-none focus-visible:ring focus-visible:ring-[#F4ABC4] focus-visible:ring-opacity-75"
                                            onClick={() => {setValue(subO.Value)}}>
                                              {subO.Name}
                                            </div>
                                        )
                                      })
                                    }
                                  </div>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        )
                      })
                    }
                    
                    
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-[#f9d1df] px-4 py-2 text-lg font-medium text-gray-900 hover:bg-[#F4ABC4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f9d1df] focus-visible:ring-offset-2"
                    onClick={() => setIsValueModalOpen(false)}
                  >
                    Done
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ValueModal;
