import TodaysCollections from "@/components/dashboard/TodaysCollections";

export default function Home() {
  return (
    <div>
      <div className="my-3 tracking-wide"> <span className="opacity-50">Egg Module</span> <span className="opacity-75"> / Dashboard</span></div>
      <div className="flex justify-between my-3">

      <h1 className="text-gray-700 text-2xl font-bold">Current Stats</h1>
      <div>
        <input type="date"></input>
      </div>
      </div>
      <TodaysCollections />
    </div>
  );
}
