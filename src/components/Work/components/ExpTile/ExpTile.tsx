import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { WorkTileData } from "../../../../data/work";

export const ExpTile = ({ data }: { data: WorkTileData }) => {
  return (
    <div
      className={`border bg-gray-900 border-gray-800 mb-4 p-6 rounded-lg ${
        data.isPresent ? "border-green-500" : null
      }`}
    >
      <div className="">
        <span
          className={data?.isPresent ? "text-green-400" : "" + " font-bold"}
        >
          {data.jobTitle}
        </span>{" "}
        at{" "}
        <span
          className={data?.isPresent ? "text-green-400" : "" + " font-bold"}
        >
          {data.company}
        </span>
      </div>
      <div className="working-dates text-gray-500 text-sm flex items-center gap-x-2">
        <CalendarDaysIcon className="w-4 h-4 text-gray-500" />
        {data.startEndDate} {data.isPresent ? " - Present" : null}
      </div>
      <div className="description mt-2 text-gray-400 min-h-[180px]">
        {data.description}
      </div>
      <div className="location mt-2 text-gray-600 flex gap-x-2 items-center">
        <MapPinIcon className="w-4 h-4 text-gray-500" />
        {data.location}
      </div>
    </div>
  );
};
