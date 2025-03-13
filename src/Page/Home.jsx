import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/Searchbar";
import CategoryTabs from "../components/tab";
import Banner from "../components/Banner";
import CoinTable from "../components/coinTable";
import TopCoinsToday from "../components/topCoinToday";
import Footer from "../components/Footer";
const home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-900 min-h-screen text-white">
        <Navbar />
        <SearchBar />
        <CategoryTabs />
        <Banner />
        <CoinTable />
        <TopCoinsToday />
        <Footer />
      </div>
    </div>
  );
};

export default home;
