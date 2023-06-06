import Link from "next/link";
import { prisma } from "@/db";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
  "use server"; //represents server code never run on client side
  const title = data.get("title")?.valueOf();
  //get function is used to get form data for that we need to pass name ofthe input ? use for it does not return undefine
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title");
  }
  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}
export default function Page() {
  return (
    <>
      <div className="flex w-full justify-center my-5">
        <div className="w-full max-w-md items-center h-fit rounded-lg border border-gray-200 overflow-hidden shadow-md ">
          <div className="flex flex-col  bg-white mx-auto p-4 sm:p-8 ">
            <header className="flex justify-between items-center mb-4">
              <h1 className="flex text-2xl font-semibold gap-1">
                <span className="text-black">Add</span>
                <span className="text-red-500">New</span>
              </h1>
            </header>
            <div className="py-2 ">
              <form action={createTodo} className="flex flex-col gap-2 py-2">
                {/* name property is imp in input box */}
                <div>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter List title"
                    required
                    className="w-full border border-gray-600 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-1 justify-end ">
                  <Link
                    href=".."
                    className="border text-center border-gray-800 px-2 py-1 rounded-lg  text-black  focus-within:bg-gray-40 outline-none"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="border border-gray-800 px-2 py-1 rounded-lg text-black  focus-within:bg-gray-40 outline-none"
                  >
                    {" "}
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
