// Home.jsx

import React, { useEffect, useState } from "react";
import { Download, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import img1 from "../images/3.jpg";
import img2 from "../images/2.jpeg";
import img3 from "../images/1.png";

const Home = () => {

    const { allProducts } = useAuth();
    const [products, setProducts] = useState([]);
    const [defaultImg, setDefaultImg] = useState([img1, img2, img3].map((img, index) => ({
        id: index,
        img1: img,
        image: { url: img },
    })));

    useEffect(() => {
        setProducts(allProducts);
    }, [allProducts]);

  // =========================
  // PAGINATION
  // =========================
  const ITEMS_PER_PAGE = 16;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentProducts = products.slice(startIndex, endIndex);

  // =========================
  // MODAL
  // =========================
  const [selectedImage, setSelectedImage] = useState(null);

  // =========================
  // DOWNLOAD FUNCTION
  // =========================
  const handleDownload = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `wallpaper-${Date.now()}.jpg`;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 py-10">
      {/* =========================
          HEADER
      ========================= */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Wallpaper Gallery
        </h1>

        <p className="text-gray-400 text-sm md:text-base">
          Explore and download beautiful wallpapers
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mb-4 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {defaultImg.map((item, index) => (
              <div
                key={item.id || index}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 shadow-lg"
              >
                {/* IMAGE */}
                <img
                  src={item.image?.url}
                  alt="Wallpaper"
                  className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110 cursor-pointer"
                  onClick={() => setSelectedImage(item.image?.url)}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                  {/* VIEW BUTTON */}
                  <button
                    onClick={() => setSelectedImage(item.image?.url)}
                    className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition"
                  >
                    View
                  </button>

                  {/* DOWNLOAD BUTTON */}
                  <button
                    onClick={() => handleDownload(item.image?.url)}
                    className="bg-black border border-white px-4 py-2 rounded-xl hover:bg-white hover:text-black transition"
                  >
                    <Download size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

      {/* =========================
          EMPTY STATE
      ========================= */}
      {products.length === 0 ? (
        <div className="flex justify-center items-center h-[50vh]">
          <h2 className="text-2xl text-gray-400">
            No Wallpapers Found
          </h2>
        </div>
      ) : (
        <>
          {/* =========================
              GALLERY GRID
          ========================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((item, index) => (
              <div
                key={item.id || index}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 shadow-lg"
              >
                {/* IMAGE */}
                <img
                  src={item.image?.url}
                  alt="Wallpaper"
                  className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110 cursor-pointer"
                  onClick={() => setSelectedImage(item.image?.url)}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                  {/* VIEW BUTTON */}
                  <button
                    onClick={() => setSelectedImage(item.image?.url)}
                    className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition"
                  >
                    View
                  </button>

                  {/* DOWNLOAD BUTTON */}
                  <button
                    onClick={() => handleDownload(item.image?.url)}
                    className="bg-black border border-white px-4 py-2 rounded-xl hover:bg-white hover:text-black transition"
                  >
                    <Download size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* =========================
              PAGINATION
          ========================= */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12 flex-wrap">
              {/* PREV */}
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className={`px-4 py-2 rounded-xl flex items-center gap-2 transition ${
                  currentPage === 1
                    ? "bg-zinc-800 text-gray-500 cursor-not-allowed"
                    : "bg-white text-black hover:scale-105"
                }`}
              >
                <ChevronLeft size={18} />
                Prev
              </button>

              {/* PAGE NUMBERS */}
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-10 h-10 rounded-xl font-semibold transition ${
                    currentPage === index + 1
                      ? "bg-white text-black"
                      : "bg-zinc-900 hover:bg-zinc-800"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              {/* NEXT */}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className={`px-4 py-2 rounded-xl flex items-center gap-2 transition ${
                  currentPage === totalPages
                    ? "bg-zinc-800 text-gray-500 cursor-not-allowed"
                    : "bg-white text-black hover:scale-105"
                }`}
              >
                Next
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </>
      )}

      {/* =========================
          IMAGE MODAL
      ========================= */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex justify-center items-center p-4">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 bg-white text-black p-2 rounded-full hover:scale-110 transition"
          >
            <X size={22} />
          </button>

          {/* IMAGE */}
          <img
            src={selectedImage}
            alt="Preview"
            className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
          />

          {/* DOWNLOAD BUTTON */}
          <button
            onClick={() => handleDownload(selectedImage)}
            className="absolute bottom-8 bg-white text-black px-6 py-3 rounded-2xl flex items-center gap-2 font-semibold hover:scale-105 transition"
          >
            <Download size={20} />
            Download
          </button>
        </div>
      )}

      <div className="h-16">
        {/* Footer Space */}
        @2026 Paigaam Wallpapers. All rights reserved.
      </div>
    </div>
  );
};

export default Home;