import { createContext, useContext, useState, useEffect, useCallback } from "react";

// Firebase
import {
  collection,
  getDocs
} from "firebase/firestore";

import { db } from "../firebase";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  // Fake user (replace later with Firebase Auth)
  const [user, setUser] = useState("Admin");

  // Global State
  const [allProducts, setAllProducts] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  /* ================= FETCH PRODUCTS ================= */
  const fetchProducts = useCallback(async () => {
    try {
      setLoadingData(true);

      const snapshot = await getDocs(collection(db, "infoGallery"));

      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setAllProducts(data);
      console.log("Products fetched:", data);

    } catch (err) {
      console.error("Products fetch failed", err);
    } finally {
      setLoadingData(false);
    }
  }, []);

  /* ================= INITIAL LOAD ================= */
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        // Data
        allProducts,
        // Loader
        loadingData,

        // Actions
        fetchProducts,

        setAllProducts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};