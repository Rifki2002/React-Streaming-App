import './featured.css';
import featuredImg from '../../assets/featured.png';
import ageBadge from '../../assets/18+.png';

function Featured() {

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      <div className="hero-text">
        <h2>Duty After School</h2>
        <p>
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
          Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
          siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
          dalam perang.
        </p>
        <div className="hero-action-row">
          <div className="featured-buttons">
            <button className="play">Mulai</button>
            <button className="info">Selengkapnya</button>
          </div>
          <div className="badge-18">
            <img src={ageBadge} alt="18+" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
