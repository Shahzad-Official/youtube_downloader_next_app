import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Drawer from "./Drawer/Drawer";
import Helmet from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import GTM from "@/utils/GTM";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <main>
      <GTM/>
      <Drawer />
      <Header />
      {children}
      <Footer />
      <ToastContainer />
    </main>
  );
}

export default Layout;
