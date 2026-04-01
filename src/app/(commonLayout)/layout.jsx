import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";

const Layout = ({children}) => {
  return (
    <div>
      <header className="pb-18">
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-292px)] container mx-auto">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
