import { useEffect, useState } from "react";
import styles from "../styles/MainTable.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import { motion } from "motion/react";
import Head from "./Head";
import Body from "./Body";
import Pagination from "./Pagination";

function MainTable({ data, columns }) {
  const [currentCulomns, setCurrentCulomns] = useState(columns);
  const [sortData, setSortData] = useState(data);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = sortData.slice(firstIndex, lastIndex);
  const numPage = Math.ceil(sortData.length / recordsPerPage);
  const numbers = [...Array(numPage + 1).keys()].slice(1);

  //progress
  const [progress, setProgress] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProgress(false);
    }, 3000);
  }, []);

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 1 } }}
      >
        <div className={styles.container}>
          {progress ? (
            <div style={{ width: "fit-content", margin: "25% auto" }}>
              <CircularProgress color="black" />
            </div>
          ) : (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 1 } }}
              >
                <table className={styles.dataGrid}>
                  <Head
                    currentCulomns={currentCulomns}
                    sortData={sortData}
                    setSortData={setSortData}
                    setCurrentCulomns={setCurrentCulomns}
                  />
                  <Bodgit inity
                    currentCulomns={currentCulomns}
                    sortData={sortData}
                    records={records}
                  />
                </table>
              </motion.div>
            </>
          )}
        </div>
        {progress ? (
          ""
        ) : (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            numbers={numbers}
            numPage={numPage}
          />
        )}
      </motion.div>
    </>
  );
}

export default MainTable;
