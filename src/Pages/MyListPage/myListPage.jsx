import { useEffect } from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import MyList from "../../components/MyList/myList";

function MyListPage() {
  useEffect(() => {
    document.body.className = "bg-black text-white min-h-screen m-0"; 
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-transparent">
      <Header />

      <main className="flex flex-col items-center flex-1 p-10">
        <h2 className="text-2xl font-semibold mb-6">🎬 Daftar Saya</h2>
        <MyList />
      </main>

      <footer className="text-center">
        <Footer />
      </footer>
    </div>
  );
}

export default MyListPage;
