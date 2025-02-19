import Sidebar from "@/components/Sidebar";
import Menubar from "@/components/Menubar";

export default function Home() {
  return (
    <section className=" mx-auto flex m-1 items-center lg:items-start">
      <div className="flex-col hidden lg:block overflow-hidden w-[20%] bg-white pt-4 px-4 mb-3 h-[770px] text-left">
        <Sidebar />
      </div>

      <div className="flex flex-col justify-center overflow-hidden w-[80%] bg-white mb-3 rounded-b-2xl h-[770px] text-left">
        <Menubar />
      </div>
    </section>
  );
}
