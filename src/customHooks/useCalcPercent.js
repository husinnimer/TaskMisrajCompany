import { data } from "../data/data";
function useCalcPercent() {
  //branch
  const AinPercent = data.filter((el) => el.branch === "A").length;
  const BinPercent = data.filter((el) => el.branch === "B").length;
  const others = data.filter(
    (el) => el.branch !== "B" && el.branch !== "A"
  ).length;

  const othersPercent = (others / data.length) * 100;
  const calcAinPercent = (AinPercent / data.length) * 100;
  const calcBinPercent = (BinPercent / data.length) * 100;
  //City
  const firstCity = data.filter((el) => el.city === "Houston").length;
  const SecondCity = data.filter((el) => el.city === "Phoenix").length;
  const othersCity = data.filter(
    (el) => el.city !== "Houston" && el.city !== "Phoenix"
  ).length;
  const firstCityInPercent = (firstCity / data.length) * 100;
  const SecondCityInPercent = (SecondCity / data.length) * 100;
  const othersCityinPercent = (othersCity / data.length) * 100;
  //type
  const normal = data.filter((el) => el.customer_type === "Normal").length;
  const member = data.filter((el) => el.customer_type === "Member").length;
  const normalInPercent = (normal / data.length) * 100;
  const memberInPercent = (member / data.length) * 100;
  //Gender
  const male = data.filter((el) => el.gender === "Male").length;
  const female = data.filter((el) => el.gender === "Female").length;
  const maleInPercent = (male / data.length) * 100;
  const femaleInPercent = (female / data.length) * 100;
  //product-line
  const electronics = data.filter(
    (el) => el.product_line === "Electronics"
  ).length;
  const clothing = data.filter((el) => el.product_line === "Clothing").length;
  const electronicsInPercent = (electronics / data.length) * 100;
  const clothingInPercent = (clothing / data.length) * 100;
  const othersProducts = data.filter(
    (el) => el.product_line !== "Electronics" && el.product_line !== "Clothing"
  ).length;
  const othersProductsInPercent = (othersProducts / data.length) * 100;

  return {
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
  };
}

export default useCalcPercent;
