import React from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";

const DisclosureButtons = () => {
  return (
    <>
      {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
      <Link href="/#about" passHref>
        <Disclosure.Button
          as="a"
          className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-[#DFB600] hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
        >
          Acerca de
        </Disclosure.Button>
      </Link>
      <Link href="/#features" passHref>
        <Disclosure.Button
          as="a"
          className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-[#DFB600] hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
        >
          Quienes somos
        </Disclosure.Button>
      </Link>
      <Link href="/#pricing" passHref>
        <Disclosure.Button
          as="a"
          className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-[#DFB600] hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
        >
          Precios
        </Disclosure.Button>
      </Link>
      <Link href="/#contact" passHref>
        <Disclosure.Button
          as="a"
          className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-[#DFB600] hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
        >
          Contáctenos
        </Disclosure.Button>
      </Link>
    </>
  );
};

export default DisclosureButtons;
