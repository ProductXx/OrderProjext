import React from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./views/Nav";

const Layout = ({ children }) => {
  const location = useLocation();

  const navVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      {location.pathname === '/'? null:<Nav/>}
      {children}
    </div>
  );
};

export default Layout;
