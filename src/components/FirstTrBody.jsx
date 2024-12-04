import styles from "../styles/MainTable.module.css";
import useCalcPercent from "../customHooks/useCalcPercent";

function FirstTrBody({ currentCulomns, sortData }) {
  const {
    othersPercent,
    calcAinPercent,
    calcBinPercent,
    firstCityInPercent,
    SecondCityInPercent,
    othersCityinPercent,
    normalInPercent,
    memberInPercent,
    maleInPercent,
    femaleInPercent,
    electronicsInPercent,
    clothingInPercent,
    othersProductsInPercent,
    others,
    othersCity,
    othersProducts,
  } = useCalcPercent();
  return (
    <tr>
      {currentCulomns.map((col) => {
        if (col.head === "ID") {
          return (
            <td key={col.id}>
              <p className={styles.secondHead}>{sortData.length}</p>
              <p className={styles.secondHead}>Total Values</p>
            </td>
          );
        } else if (col.head === "Branch") {
          return (
            <td key={col.id}>
              <p className={styles.secondHead}>
                A : {calcAinPercent.toFixed(0)}%
              </p>
              <p className={styles.secondHead}>
                B : {calcBinPercent.toFixed(0)}%
              </p>
              <p className={styles.secondHead}>
                Others({others}) : {othersPercent.toFixed(0)}%
              </p>
            </td>
          );
        } else if (col.head === "City") {
          return (
            <td key={col.id}>
              <p className={styles.secondHead}>
                Houston : {firstCityInPercent.toFixed(0)}%
              </p>
              <p className={styles.secondHead}>
                Phoenix : {SecondCityInPercent.toFixed(0)}%
              </p>
              <p className={styles.secondHead}>
                Others({othersCity}) : {othersCityinPercent.toFixed(0)}%
              </p>
            </td>
          );
        } else if (col.head === "Customer type") {
          return (
            <td key={col.id}>
              <p className={styles.secondHead}>
                Normal : {normalInPercent.toFixed(0)}%
              </p>
              <p className={styles.secondHead}>
                Member : {memberInPercent.toFixed(0)}%
              </p>
            </td>
          );
        } else if (col.head === "Gender") {
          return (
            <td key={col.id}>
              <p className={styles.secondHead}>
                Male : {maleInPercent.toFixed(0)}%
              </p>
              <p className={styles.secondHead}>
                Female : {femaleInPercent.toFixed(0)}%
              </p>
            </td>
          );
        } else if (col.head === "Product line") {
          return (
            <td key={col.id}>
              <p className={styles.secondHead}>
                Electronics : {electronicsInPercent.toFixed(0)}%
              </p>
              <p className={styles.secondHead}>
                Clothing : {clothingInPercent.toFixed(0)}%
              </p>
              <p className={styles.secondHead}>
                Others({othersProducts}) : {othersProductsInPercent.toFixed(0)}%
              </p>
            </td>
          );
        } else {
          return <td key={col.id}>No Data</td>;
        }
      })}
    </tr>
  );
}

export default FirstTrBody;
