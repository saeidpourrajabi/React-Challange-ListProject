import { Cog6ToothIcon } from "@heroicons/react/24/outline";

const categoryOptions = [
  {
    id: 1,
    label: "همه",
    value: "all",
  },
  {
    id: 2,
    label: "طراحی UI/UX",
    value: "ui-ux",
  },
  {
    id: 3,
    label: "برنامه نویسی",
    value: "programming",
  },
];

const sortOptions = [
  {
    id: 1,
    label: "جدیدترین",
    value: "des",
  },
  {
    id: 2,
    label: "قدیمی ترین",
    value: "asc",
  },
];

function ListProject({
  projects,
  setFilter,
  filter,
  sort,
  setSort,
  category,
  setCategory,
}) {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="text-right ml-5"> لیست پروژه ها</div>
        <div className="flex gap-x-4 items-center">
          <Vazeat setFilter={setFilter} filter={filter} />
          <Select
            options={categoryOptions}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Select
            options={sortOptions}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          />
        </div>
      </div>
      <ListDetail projects={projects} filter={filter} sort={sort} />
    </div>
  );
}

export default ListProject;

function Vazeat({ setFilter, filter }) {
  return (
    <div className="flex justify-center items-center gap-x-2">
      <p className="text-sm"> وضعیت</p>
      <div className="bg-white flex gap-x-4 p-2 rounded-xl">
        <button
          onClick={() => setFilter("ALL")}
          className={`${
            filter === "ALL" ? "bg-blue-500 text-white" : "bg-white"
          }  rounded-xl p-1 w-20`}>
          همه
        </button>
        <button
          onClick={() => setFilter("OPEN")}
          className={`${
            filter === "OPEN" ? "bg-blue-500 text-white" : "bg-white"
          }  rounded-xl p-1 w-20`}>
          باز
        </button>
        <button
          onClick={() => setFilter("CLOSED")}
          className={`${
            filter === "CLOSED" ? "bg-blue-500 text-white" : "bg-white"
          }  rounded-xl p-1 w-20`}>
          بسته
        </button>
      </div>
    </div>
  );
}

function Select({ value, onChange, options }) {
  return (
    <div>
      <select
        value={value}
        onChange={onChange}
        className="p-2 rounded-xl w-32 text-sm">
        {options.map((item) => {
          return (
            <option value={item.value} key={item.id}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

function ListDetail({ projects, filter, sort }) {
  const filterdProjects = projects.filter((p) => {
    if (filter === "ALL") return true;
    return p.status === filter;
  });
  const sortedProjects = filterdProjects.sort((a, b) => {
    if (sort === "des") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  return (
    <div className="mt-5">
      <table className="w-full border-collapse">
        <thead>
          <tr className="">
            <th className="border border-solid border-slate-500 p-2">ردیف</th>
            <th className="border border-solid border-slate-500 p-2">
              عنوان پروژه
            </th>
            <th className="border border-solid border-slate-500 p-2">
              بودجه (تومان)
            </th>
            <th className="border border-solid border-slate-500 p-2">ددلاین</th>
            <th className="border border-solid border-slate-500 p-2">وضعیت</th>
            <th className="border border-solid border-slate-500 p-2">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {sortedProjects.map((pro) => {
            return (
              <tr key={pro._id}>
                <td className="border border-solid border-slate-500 p-1 bg-white">
                  {pro._id}
                </td>
                <td className="border border-solid border-slate-500 p-1 bg-white">
                  {pro.title}
                </td>
                <td className="border border-solid border-slate-500 p-1 bg-white">
                  {Number(pro.budget).toLocaleString("fa-IR")}
                </td>
                <td className="border border-solid border-slate-500 p-1 bg-white">
                  {new Date(pro.deadline).toLocaleDateString("fa-IR")}
                </td>
                <td className="border border-solid border-slate-500 p-1 bg-white text-white">
                  <p
                    className={` p-1 rounded-xl ${
                      pro.status === "CLOSED" ? "bg-red-500" : "bg-green-500"
                    }`}>
                    {pro.status}
                  </p>
                </td>
                <td className="border border-solid border-slate-500 p-1 bg-white">
                  <button>
                    <Cog6ToothIcon className="w-5" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
