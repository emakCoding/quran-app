import LeftSection from "../../components/read_quran/LeftSection";
import RightSection from "../../components/read_quran/RightSection";

function ReadQuran() {
  return (
    <div className="bg-slate-500 flex w-full h-screen">
      {/* bagian kiri */}
      <LeftSection />

      {/* bagian kanan  */}
      <RightSection />
    </div>
  );
}

export default ReadQuran;
