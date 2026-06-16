// Home.jsx

import React, { useEffect, useState } from "react";
import { Download, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import img1 from "../images/07f29316d02c2f03864e94c388ed6b1834341364.jpg";
import img2 from "../images/2413612.jpg";
import img3 from "../images/4ceum17c9j921.jpg";
import img4 from "../images/532668.jpg";
import img5 from "../images/595712.jpg";
import img6 from "../images/599142.jpg";
import img7 from "../images/669517.jpg";
import img8 from "../images/691791.jpg";
import img9 from "../images/709880.jpg";
import img10 from "../images/709896.jpg";
import img11 from "../images/713530.jpg";
import img12 from "../images/727351.jpg";
import img13 from "../images/740347.jpg";
import img14 from "../images/742357.jpg";
import img15 from "../images/743763.jpg";
import img16 from "../images/787647-new-windows-wallpaper-desktop-1920x1080.jpg";
import img17 from "../images/855142.jpg";
import img18 from "../images/881534.jpg";
import img19 from "../images/884138.jpg";
import img20 from "../images/907909.jpg";
import img21 from "../images/934950.jpg";
import img22 from "../images/953699.jpg";
import img23 from "../images/995105.jpg";
import img24 from "../images/995106.jpg";
import img25 from "../images/995107.jpg";
import img26 from "../images/a5395c96aa66fb7ca3abe21ebcc00f2bebb35a9b.jpg";
import img27 from "../images/abstract-7680x4320-colorful-8k-20675.jpg";
import img28 from "../images/abstract-nature-7680x4320-8k-21456.jpg";
import img29 from "../images/aladdin-6200x3672-mena-massoud-naomi-scott-princess-jasmine-will-17881.jpg";
import img30 from "../images/assassin-039-s-creed-valhalla-3840x2160-assassins-creed-valhalla-screenshot-4k-22751.jpg";
import img31 from "../images/assassin-039-s-creed-valhalla-7680x4320-assassins-creed-valhalla-artwork-8k-22753.jpg";
import img32 from "../images/assassin-039-s-creed-valhalla-7680x4320-assassins-creed-valhalla-artwork-8k-22754.jpg";
import img33 from "../images/assassins_creed_iv_black_flag-wallpaper-2560x1440.jpg";
import img34 from "../images/assassins_creed_origins_2017_8k_video_game-wallpaper-7680x4320.jpg";
import img35 from "../images/avengers-endgame-6200x3600-gamora-rocket-raccoon-thor-star-lord-groot-17768.jpg";
import img36 from "../images/a_wooden_house_forest-wallpaper-3554x1999.jpg";
import img37 from "../images/battlefield_3_bf3_2-wallpaper-2560x1440.jpg";
import img38 from "../images/battlefield_3___caspian_border-wallpaper-1920x1080.jpg";
import img39 from "../images/beautiful_forest_2-wallpaper-1920x1080.jpg";
import img40 from "../images/beautiful_summer_landscape_5-wallpaper-2560x1440.jpg";
import img41 from "../images/broken_4k-3840x2160.jpg";
import img42 from "../images/broken_knight-wallpaper-1920x1080.jpg";
import img43 from "../images/bungalows-3840x2160-4k-hd-wallpaper-reef-french-polynesia-water-594.jpg";
import img44 from "../images/call-of-duty-ww2-7680x4320-tokyo-game-show-2017-poster-8k-15906.jpg";
import img45 from "../images/call_of_duty_black_ops_3_specialist_nomad-wallpaper-1920x1080.jpg";
import img46 from "../images/call_of_duty_ghosts_2-wallpaper-1920x1080.jpg";
import img47 from "../images/call_of_duty_screenshot-wallpaper-2048x1152.jpg";
import img48 from "../images/call_of_duty_ww2_3-wallpaper-2560x1440.jpg";
import img49 from "../images/call_of_duty_wwii_2017_game-wallpaper-5120x2880.jpg";
import img50 from "../images/call_of_duty_wwii_2017_video_game-wallpaper-2048x1152.jpg";
import img51 from "../images/call_of_duty__black_ops-wallpaper-2560x1440.jpg";
import img52 from "../images/call_of_duty__ghosts-wallpaper-1920x1080.jpg";
import img53 from "../images/call_of_duty___modern_warfare-wallpaper-1920x1080.jpg";
import img54 from "../images/chamarel_waterfalls_mauritius-wallpaper-3840x2160.jpg";
import img55 from "../images/close-up-photo-of-fungi-1643409.jpg";
import img56 from "../images/clouded_sun-wallpaper-3840x2160.jpg";
import img57 from "../images/clouds-3840x2160-4k-hd-wallpaper-sky-blue-river-sun-rays-599.jpg";
import img58 from "../images/cod_black_ops-wallpaper-1920x1080.jpg";
import img59 from "../images/cod_wwii-wallpaper-2048x1152.jpg";
import img60 from "../images/deep_within_2-wallpaper-1920x1080.jpg";
import img61 from "../images/elder-scrolls-online-3840x2160-best-games-2015-game-mmorpg-fantasy-pc-6021.jpg";
import img62 from "../images/escape-from-tarkov-2560x1440-fps-tps-shooter-pc-13207.jpg";
import img63 from "../images/fairytale_forest-wallpaper-1920x1080.jpg";
import img64 from "../images/far-cry-4-3840x2160-game-open-world-adventure-games-shooter-kyrat-2649.jpg";
import img65 from "../images/far-cry-4-5120x2880-game-open-world-adventure-games-shooter-kyrat-2650.jpg";
import img66 from "../images/far_cry_22-wallpaper-5120x2880.jpg";
import img67 from "../images/far_cry_3_2012_video_game-wallpaper-2560x1440.jpg";
import img68 from "../images/flat-3840x2160-forest-deer-4k-5k-iphone-wallpaper-abstract-11925.jpg";
import img69 from "../images/foggy_forest_4-wallpaper-3840x2160.jpg";
import img70 from "../images/for-honor-shadows-of-the-hitokiri-3840x2160-e3-2019-screenshot-4k-21655.jpg";
import img71 from "../images/for-honor-tyranny-3840x2160-screenshot-4k-22610.jpg";
import img72 from "../images/for-honor-tyranny-3840x2160-screenshot-4k-22613.jpg";
import img73 from "../images/forest-2560x1440-mountains-violet-birds-art-hd-16431.jpg";
import img74 from "../images/forest-3840x2160-sunset-artwork-4k-20035.jpg";
import img75 from "../images/forest-3840x2160-sunset-fox-4k-15517.jpg";
import img76 from "../images/forest-5120x2880-4k-5k-wallpaper-8k-branches-path-trees-6510.jpg";
import img77 from "../images/forest-7680x4320-snow-winter-sunrise-clouds-8k-17357.jpg";
import img78 from "../images/girl-3840x2160-silhouette-shadow-4k-18685.jpg";
import img79 from "../images/grand-tetons-landscape-4k-p7-3840x2400.jpg";
import img80 from "../images/green_lantern_movie_2011-wallpaper-3840x2160.jpg";
import img81 from "../images/ha-long-bay-3840x2160-5k-4k-wallpaper-8k-halong-bay-vietnam-mountains-330.jpg";
import img82 from "../images/hdr_mountains_lake-wallpaper-2560x1440.jpg";
import img83 from "../images/ko-tapu-5120x2880-thailand-islands-mountains-rocks-ocean-5k-16556.jpg";
import img84 from "../images/lake-lucerne-3840x2160-switzerland-landscape-lake-mountain-4k-15261.jpg";
import img85 from "../images/lake-zurich-3840x2160-forest-sky-mountains-4k-17798.jpg";
import img86 from "../images/lake_mountains_trees_129959_3840x2160.jpg";
import img87 from "../images/laptop_3-wallpaper-3554x1999.jpg";
import img88 from "../images/lara-croft-hunter-girl-8k-o0-7680x4320.jpg";
import img89 from "../images/light_bomb-wallpaper-3840x2160.jpg";
import img90 from "../images/lost-wallpaper-2560x1440.jpg";
import img91 from "../images/maui-5120x2880-hawaii-beach-ocean-coast-mountain-sky-5k-16701.jpeg";
import img92 from "../images/maui_hawaii_united_states-wallpaper-1920x1080.jpg";
import img93 from "../images/mountain-3840x2160-sun-forest-4k-17113.jpg";
import img94 from "../images/mountains-5120x2880-5k-4k-wallpaper-8k-waterfall-forest-yosemite-12577.jpg";
import img95 from "../images/mountain_forest_6-wallpaper-2560x1440.jpg";
import img96 from "../images/mountain_river_3-wallpaper-2560x1440.jpg";
import img97 from "../images/natural_archway-wallpaper-2560x1440.jpg";
import img98 from "../images/nikola-wav-2560x1440-nikola-wav-22768.jpg";
import img99 from "../images/nordic_landscape-wallpaper-1920x1080.jpg";
import img100 from "../images/norway-5120x2880-lofoten-islands-europe-mountains-sea-sunrise-5k-16595.jpg";
import img101 from "../images/prince_of_persia_the_sand_of_time-wallpaper-1920x1200.jpg";
import img102 from "../images/reindeer-minimalism-art-4k-7v-1366x768.jpg";
import img103 from "../images/relax_4k.jpg";
import img104 from "../images/road_aspens_trees_in_colorado_summer-wallpaper-3840x2160.jpg";
import img105 from "../images/rural_road_green_trees_landscape-wallpaper-5120x2880.jpg";
import img106 from "../images/sea-3840x2160-5k-4k-wallpaper-ocean-shore-waves-night-5737.jpg";
import img107 from "../images/shadow-of-the-tombraider-8k-9e-7680x4320.jpg";
import img108 from "../images/skull-bones-3840x2160-e3-2018-screenshot-4k-19083.jpg";
import img109 from "../images/soldier-3840x2160-u-s-army-assault-rifle-camo-scope-12249.jpg";
import img110 from "../images/spectacular_mountain_river-wallpaper-2560x1440.jpg";
import img111 from "../images/sunset_in_the_forest-wallpaper-3554x1999.jpg";
import img112 from "../images/sun_rays_through_the_forest_trees_road-wallpaper-2560x1440.jpg";
import img113 from "../images/switzerland-3840x2160-4k-5k-wallpaper-alps-mountains-stars-night-5713.jpg";
import img114 from "../images/switzerland-3840x2160-4k-hd-wallpaper-river-mountains-rocks-5706.jpg";
import img115 from "../images/thailand-3840x2160-5k-4k-wallpaper-ocean-rocks-sky-5405.jpg";
import img116 from "../images/the_hobbit_the_battle_of_the_five_armies_7-wallpaper-2560x1440.jpg";
import img117 from "../images/the_thick_forest-wallpaper-1920x1080.jpg";
import img118 from "../images/tom-clancy-039-s-ghost-recon-breakpoint-7680x4320-tom-clancys-ghost-recon-breakpoint-e3-2019-poster-8k-21667.jpg";
import img119 from "../images/turtle-island-3840x2160-5k-4k-wallpaper-krabi-thailand-andaman-sea-6175.jpg";
import img120 from "../images/uncharted-the-lost-legacy-3840x2160-4k-ps4-pro-screenshot-e3-2017-13995.jpg";
import img121 from "../images/view-of-elephant-in-water-247431.jpg";
import img122 from "../images/wallhaven-j83y3p.jpg";
import img123 from "../images/wallhaven-md538m.jpg";
import img124 from "../images/wallhaven-md5z28.jpg";
import img125 from "../images/wallhaven-oxq5k7.jpg";
import img126 from "../images/wallpaperflare.com_wallpaper (1).jpg";
import img127 from "../images/wallpaperflare.com_wallpaper (10).jpg";
import img128 from "../images/wallpaperflare.com_wallpaper (2).jpg";
import img129 from "../images/wallpaperflare.com_wallpaper (6).jpg";
import img130 from "../images/wallpaperflare.com_wallpaper (7).jpg";
import img131 from "../images/wallpaperflare.com_wallpaper (8).jpg";
import img132 from "../images/wallpaperflare.com_wallpaper (9).jpg";
import img133 from "../images/wallpaperflare.com_wallpaper.jpg";
import img134 from "../images/wallpapersden.com_windows-10-spotlight-lock-screen-underground_3840x2160.jpg";
import img135 from "../images/Wallpaper_8K_0_7680x4320.jpg";
import img136 from "../images/waterfall-3840x2160-thailand-4k-19249.jpg";
import img137 from "../images/Waterfalls_USA_Crag_Trees_Hocking_Hills_State_Park_Ohio_Nature_10929x5553.jpg";
import img138 from "../images/wp2496218-geralt-of-rivia-wallpapers.png";
import img139 from "../images/wp3266279.jpg";
import img140 from "../images/yosemite-2560x1440-el-capitan-hd-4k-wallpaper-winter-forest-osx-apple-3942.jpg";

const Home = () => {

  const { allProducts } = useAuth();
  const [products, setProducts] = useState([]);
  const defaultImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
    img47,
    img48,
    img49,
    img50,
    img51,
    img52,
    img53,
    img54,
    img55,
    img56,
    img57,
    img58,
    img59,
    img60,
    img61,
    img62,
    img63,
    img64,
    img65,
    img66,
    img67,
    img68,
    img69,
    img70,
    img71,
    img72,
    img73,
    img74,
    img75,
    img76,
    img77,
    img78,
    img79,
    img80,
    img81,
    img82,
    img83,
    img84,
    img85,
    img86,
    img87,
    img88,
    img89,
    img90,
    img91,
    img92,
    img93,
    img94,
    img95,
    img96,
    img97,
    img98,
    img99,
    img100,
    img101,
    img102,
    img103,
    img104,
    img105,
    img106,
    img107,
    img108,
    img109,
    img110,
    img111,
    img112,
    img113,
    img114,
    img115,
    img116,
    img117,
    img118,
    img119,
    img120,
    img121,
    img122,
    img123,
    img124,
    img125,
    img126,
    img127,
    img128,
    img129,
    img130,
    img131,
    img132,
    img133,
    img134,
    img135,
    img136,
    img137,
    img138,
    img139,
    img140,
  ].map((img, index) => ({
    id: index,
    image: { url: img },
  }));

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
                className={`px-4 py-2 rounded-xl flex items-center gap-2 transition ${currentPage === 1
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
                  className={`w-10 h-10 rounded-xl font-semibold transition ${currentPage === index + 1
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
                className={`px-4 py-2 rounded-xl flex items-center gap-2 transition ${currentPage === totalPages
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