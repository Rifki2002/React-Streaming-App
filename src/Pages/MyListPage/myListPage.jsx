import { useEffect } from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import MyList from '../../components/MyList/myList';
import "./myListPage.css";

function MyListPage() {
  useEffect(() => {
    document.body.className = 'home-body';
  }, []);

  return (
    <div className="page-container">
      <Header />

      <main className="mylist-wrapper">
        <h2 className="mylist-title">🎬 Daftar Saya</h2>
        <MyList />
      </main>

      <Footer />
    </div>
  );
}

export default MyListPage;
