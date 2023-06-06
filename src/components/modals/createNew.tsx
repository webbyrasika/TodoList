"use client";
import { useState } from "react";
import Link from "next/link";
import { prisma } from "@/db";
import { redirect } from "next/navigation";

export default function CreateNew() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Button to open modal */}
      <div className="pb-2">
        <button
          onClick={() => {
            toggleModal();
          }}
          className="items-center hidden px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm sm:inline-flex hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Add New
        </button>
      </div>

      {/* Modal overlay */}
      <div
        className={`${
          isOpen
            ? "opacity-100 pointer-events-auto bg-black bg-opacity-70"
            : "opacity-0 pointer-events-none"
        } fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 transition-all duration-200`}
      >
        {/* Modal container */}
        <div className=" bg-white w-full max-w-md rounded-lg shadow-lg text-left text-black ">
          {/* Modal header */}
          <div className="bg-gray-100 px-4 py-2 rounded-t-lg">
            <div className="flex flex-row">
              <h3 className="text-lg font-bold capitalize">Apply Leave</h3>
            </div>
          </div>

          {/* Modal body */}
          <button onClick={handleModalClose}>close</button>
        </div>
      </div>
    </div>
  );
}
