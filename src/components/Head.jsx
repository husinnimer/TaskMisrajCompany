import SortIcon from "@mui/icons-material/Sort";
import styles from "../styles/MainTable.module.css";
import Tooltip from "@mui/material/Tooltip";

function Head({ currentCulomns, sortData, setSortData, setCurrentCulomns }) {
  const handleDragStart = (e, columnIndex) => {
    e.dataTransfer.setData("columnIndex", columnIndex);
  };

  const handleDragOver = (e, columnIndex) => {
    e.preventDefault();
    const dragIndex = e.dataTransfer.getData("columnIndex");
    if (dragIndex !== columnIndex) {
      const newColumns = [...currentCulomns];
      const [draggedColumn] = newColumns.splice(dragIndex, 1);
      newColumns.splice(columnIndex, 0, draggedColumn);
      setCurrentCulomns(newColumns);
    }
  };

  const handleSortingAtoZ = (id) => {
    const heading = currentCulomns
      .find((el) => el.id === id)
      .head.toLowerCase()
      .replace(" ", "_");

    console.log(heading);

    const sortHandle = [...sortData].sort((a, b) => {
      if (typeof a[heading] === "number") {
        return b[heading] - a[heading];
      }
      if (typeof a[heading] === "string") {
        return a[heading].localeCompare(b[heading]);
      }

      return 0;
    });
    setSortData(sortHandle);
  };

  const handleSortingZtoA = (id) => {
    const heading = currentCulomns
      .find((el) => el.id === id)
      .head.toLowerCase()
      .replace(" ", "_");

    const sortHandle = [...sortData].sort((a, b) => {
      if (typeof a[heading] === "number") {
        return a[heading] - b[heading];
      }
      if (typeof a[heading] === "string") {
        return b[heading].localeCompare(a[heading]);
      }
      return 0;
    });

    setSortData(sortHandle);
  };

  //change name column
  const handleChangeInputs = (value, id) => {
    setCurrentCulomns((prev) =>
      prev.map((el) => {
        if (el.id === id) {
          return { ...el, head: value };
        } else {
          return el;
        }
      })
    );
  };

  return (
    <thead>
      <tr>
        {currentCulomns.map((el, index) => (
          <th
            style={{ width: `${el.width}` }}
            key={el.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
          >
            <div className={styles.heading}>
              <div>
                <span>{el.head === "ID" ? "num" : "string"}</span>
                <Tooltip title="A-Z">
                  <SortIcon
                    className={styles.icon}
                    onClick={() => handleSortingAtoZ(el.id)}
                  />
                </Tooltip>
                <Tooltip title="Z-A">
                  <SortIcon
                    className={styles.icon}
                    onClick={() => handleSortingZtoA(el.id)}
                  />
                </Tooltip>
              </div>
              <input
                type="text"
                value={el.head}
                style={{ outline: "none", border: "none" }}
                onChange={(e) => handleChangeInputs(e.target.value, el.id)}
              />
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default Head;
