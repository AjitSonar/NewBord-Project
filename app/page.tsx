import Sidebar from "@/components/Sidebar";
import Menubar from "@/components/Menubar";

export default function Home() {
  return (
    <section className="w-full flex m-1 lg:items-start">
      <div className="lg:flex flex-col hidden overflow-hidden w-[304px] bg-white pt-4 px-4 mb-3 h-[940px] text-left">
        <Sidebar />
      </div>

      <div className="flex flex-col sm:justify-start overflow-hidden w-full lg:w-[1417px] bg-white mb-3 rounded-b-2xl h-[940px] text-left">
        <Menubar />
      </div>
    </section>
  );
}
