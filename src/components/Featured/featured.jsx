import featuredImg from "../../assets/featured.png";
import ageBadge from "../../assets/18+.png";

function Featured() {
  return (
    <section
      className="relative w-full min-h-[500px] bg-cover brightness-100 p-8"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      <div className="absolute bottom-8 left-8 max-w-md text-white">
        <h2 className="text-4xl font-bold mb-4">Duty After School</h2>
        <p className="text-base mb-4">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
          Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
          siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
          dalam perang.
        </p>

        <div className="flex items-center gap-6 mt-6">
          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-full font-bold border-2 border-white bg-[#191970] text-white hover:bg-[#3030d6ff]">
              Mulai
            </button>
            <button className="px-8 py-3 rounded-full font-bold border-2 border-white bg-[#0d1b2a] text-white hover:bg-[#272c32ff]">
              Selengkapnya
            </button>
          </div>

          <div className="flex items-center justify-center w-[45px] h-[45px] rounded-full flex-shrink-0 hover:bg-black/50 cursor-pointer">
            <img src={ageBadge} alt="18+" className="h-10 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
