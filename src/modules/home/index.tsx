import { useEffect } from "react";
import IpoList from "../../components/ipoList";
import styles from "./home.module.scss";

const Home = () => {
  useEffect(() => {
    document.title = "IPO list page";
  }, []);

  return (
    <div className={styles.homeWrapper}>
      <IpoList />
    </div>
  );
};

export default Home;
