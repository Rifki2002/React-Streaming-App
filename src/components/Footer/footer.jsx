import logoImg from "../../assets/Logo.png";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-logo">
      <div className="logo">
        <img src={logoImg} alt="Logo"/>
      </div>
      <p>&copy; 2023 Chill All Rights Reserved.</p>
    </div>
    <div className="footer-sections">
      <div className="footer-section genre">
        <h4>Genre</h4>
        <div className="genre-columns">
          <ul>
            <li>Aksi</li>
            <li>Anak-anak</li>
            <li>Anime</li>
            <li>Britania</li>
          </ul>
          <ul>
            <li>Drama</li>
            <li>Fantasi Ilmiah & Fantasi</li>
            <li>Kejahatan</li>
            <li>KDrama</li>
          </ul>
          <ul>
            <li>Komedi</li>
            <li>Petualangan</li>
            <li>Perang</li>
            <li>Romantis</li>
          </ul>
          <ul>
            <li>Sains & Alam</li>
            <li>Thriller</li>
          </ul>
        </div>
      </div>
      <div className="footer-section">
        <h4>Bantuan</h4>
        <ul>
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