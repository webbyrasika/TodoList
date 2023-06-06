import { prisma } from "@/db";
import Link from "next/link";
import TodoItem from "@/components/todoItem";
import CreateNew from "@/components/modals/createNew";

//reusable function fetching data from database
function getTodos() {
  return prisma.todo.findMany();
}
//function for updating data
async function toggleTodo(id: string, complete: boolean) {
  "use server";
  //update todo table in according to id
  await prisma.todo.update({
    where: { id },
    data: {
      complete,
    },
  });
}
export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <div className="flex w-full justify-center my-5">
        <div className="w-full max-w-2xl items-center h-fit rounded-lg border border-gray-200 overflow-hidden shadow-md ">
          <div className="flex flex-col  bg-white mx-auto p-4 sm:p-8 ">
            <header className="flex justify-between items-center mb-4">
              <h1 className="flex text-2xl font-semibold gap-1">
                <span className="text-black">Todo</span>
                <span className="text-red-500">List</span>
              </h1>
              {/* <CreateNew /> */}
              <Link
                href="/new"
                className="items-center  px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm sm:inline-flex hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Add New
              </Link>
            </header>
            <ul className="flex flex-col gap-2">
              {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
