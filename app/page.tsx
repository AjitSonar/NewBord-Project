import Sidebar from "@/components/Sidebar";
import Menubar from "@/components/Menubar";

export default function Home() {
  return (
    <section className="w-full h-screen flex lg:items-start">
      <div className="lg:flex flex-col hidden w-[304px] h-full bg-white pt-4 px-4 mb-3 text-left">
        <Sidebar />
      </div>

      <div className="flex flex-col sm:justify-start overflow-hidden w-full h-full lg:w-full bg-white mb-3 rounded-b-2xl text-left">
        <Menubar />
      </div>
    </section>
  );
}
