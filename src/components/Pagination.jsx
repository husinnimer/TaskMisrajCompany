import { motion } from "motion/react";
import styles from "../styles/MainTable.module.css";

function Pagination({ currentPage, setCurrentPage, numbers, numPage }) {
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (currentPage !== numPage) setCurrentPage(currentPage + 1);
  };
  const changePage = (el) => {
    setCurrentPage(el);
  };

  return (
    <div style={{ width: "100px", margin: "auto" }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 2 } }}
      >
        <ul className={styles.listPagination}>
          <li onClick={prevPage}>Prev</li>
          {numbers.map((el, index) => (
            <li
              key={index}
              onClick={() => changePage(el)}
              className={currentPage === el ? `${styles.active}` : ""}
            >
              {el}
            </li>
          ))}
          <li onClick={nextPage}>Next</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Pagination;
