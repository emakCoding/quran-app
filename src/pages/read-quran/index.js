import LeftSection from "../../components/read_quran/LeftSection";

function ReadQuran() {
  return (
    <div className="bg-slate-500 flex w-full h-screen">
      {/* bagian kiri */}
      <LeftSection />

      {/* bagian kanan  */}
      <div className="bg-slate-200 basis-3/4">kanan</div>
    </div>
  );
}

export default ReadQuran;
