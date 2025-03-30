import Header from "./header";
import Footer from "./footer";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "@/redux/auth/auth.reducer";

const inter = Inter({ subsets: ["latin"] });
const Layout = (props) => {
  const dispatch = useDispatch();
  const { city, user } = props;
  useEffect(() => {
    dispatch(authActions.checkAndLoadInitialAuth());
  }, [dispatch]);
  return (
    <main className={inter.className}>
      <Header city={city} user={user} />
      {props.children}
      <Footer />
    </main>
  );
};

export default Layout;
