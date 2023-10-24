import { ExpTile } from "../Work/components/ExpTile/ExpTile";

export const Education = () => {
  return (
    <div className="mt-12 max-w-6xl mx-auto">
      <h1 className="text-2xl uppercase text-center mb-4 font-bold">
        Education
      </h1>
      <div className="p-4">
        <ExpTile
          data={{
            company: "Harbour.Space",
            description: "sss",
            isPresent: false,
            jobTitle: "Front End Development",
            location: "Barcelona, Spain",
            startEndDate: "2022 Oct - 2025 Sep",
          }}
          noDescription
        />
      </div>
    </div>
  );
};
