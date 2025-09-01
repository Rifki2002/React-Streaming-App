import logoImg from "../../assets/Logo.png";

function Footer() {
  return (
    <footer className="relative w-full mt-10">
      <div className="h-[2px] bg-white mb-5 w-full"></div>

      <div className="flex flex-wrap justify-start max-w-[1200px] pl-10">
        <div className="flex-1 min-w-[200px] mb-5 mt-16">
          <div className="flex items-center gap-2 text-xl font-bold">
            <img src={logoImg} alt="Logo" className="h-11 mb-6" />
          </div>
          <p className="mt-3 text-sm text-gray-400">
            &copy; 2023 Chill All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-3 justify-between flex-wrap w-full lg:w-auto">
          <div className="min-w-[200px] my-16 mx-5">
            <h4 className="text-base mb-2 font-semibold">Genre</h4>
            <div className="flex gap-8">
              <ul className="space-y-4 text-sm text-gray-300">
                <li>Aksi</li>
                <li>Anak-anak</li>
                <li>Anime</li>
                <li>Britania</li>
              </ul>
              <ul className="space-y-4 text-sm text-gray-300">
                <li>Drama</li>
                <li>Fantasi Ilmiah & Fantasi</li>
                <li>Kejahatan</li>
                <li>KDrama</li>
              </ul>
              <ul className="space-y-4 text-sm text-gray-300">
                <li>Komedi</li>
                <li>Petualangan</li>
                <li>Perang</li>
                <li>Romantis</li>
              </ul>
              <ul className="space-y-4 text-sm text-gray-300">
                <li>Sains & Alam</li>
                <li>Thriller</li>
              </ul>
            </div>
          </div>

          <div className="min-w-[200px] my-16 mx-5">
            <h4 className="text-base mb-2 font-semibold">Bantuan</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>FAQ</li>
              <li>Kontak Kami</li>
              <li>Privasi</li>
              <li>Syarat & Ketentuan</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
