import { useState } from "react";
import "./App.css";
import ListProject from "./components/ListProject";

const projects = [
  {
    _id: 1,
    title: "طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "CLOSED",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: 10000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-22T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 2,
    title: "توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 2,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  //  خودتون میتونید دیتاهای دیگه رو اضافه کنید.
];

function App() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [filter, setFilter] = useState("ALL");
  const [sort, setSort] = useState("des");
  const [category, setCategory] = useState("all");

  const handleClickVisible = () => {
    setIsButtonVisible(false);
  };
  return (
    <div className="bg-slate-200 w-full p-4">
      <div>
        {isButtonVisible ? (
          <button
            onClick={handleClickVisible}
            className="bg-blue-600 px-9 py-2 rounded-xl text-white">
            نشان دادن پروژه ها
          </button>
        ) : (
          <ListProject
            projects={projects}
            filter={filter}
            setFilter={setFilter}
            sort={sort}
            setSort={setSort}
            category={category}
            setCategory={setCategory}
          />
        )}
      </div>
    </div>
  );
}

export default App;
