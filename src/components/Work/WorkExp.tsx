import { workExpData } from "../../data/work";
import { ExpTile } from "./components/ExpTile/ExpTile";

export const WorkExp = () => {
  return (
    <div className="mt-12 max-w-6xl m-auto">
      <h1 className="text-2xl uppercase text-center mb-4 font-bold">
        Employment History
      </h1>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
        {workExpData.map((data, index) => {
          return <ExpTile key={index} data={data} />;
        })}
      </div>
    </div>
  );
};
