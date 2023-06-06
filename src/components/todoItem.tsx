"use client";

//props type defined here
type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  createdAt: Date;
  toggleTodo: (id: string, complete: boolean) => void;
};

export default function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  createdAt,
}: TodoItemProps) {
  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  return (
    <>
      <li className="flex justify-between items-center m-2 px-2 py-4 hover:bg-blue-200 hover:border-blue-800 border border-gray-200 rounded-lg shadow">
        <div className="flex gap-2 ">
          <input
            id={id}
            type="checkbox"
            className="coursor-pointer peer  form-checkbox w-4 rounded-full text-blue-500"
            defaultChecked={complete}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <label
            htmlFor={id}
            className="peer-checked:line-through text-black font-medium peer-checked:text-red-500 "
          >
            <span>{title}</span>
          </label>
        </div>
        <div>
          <span className="text-gray-500 text-sm">{formatDate(createdAt)}</span>
        </div>
      </li>
    </>
  );
}
