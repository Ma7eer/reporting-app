import * as React from "react";

const DefectContext = React.createContext();

let date = new Date();

let list = [
  [
    "1", //id
    "R2020-3413", //report ref id
    "23.0000", // lat
    "54.0000", // long
    "0", // chainage in km
    "pothole", // defectType
    "image url?", // image ref
    "3", // length in m
    "1", // width in m
    "50", // depth/thickness in mm?
    "its a hole with cracks", // Notes
    `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`, // date
    "Action",
  ],
];

let list2 = [
  {
    defectId: "1", //id
    reportId: "R2020-3413", //report ref id
    lat: "23.0000", // lat
    long: "54.0000", // long
    chainage: "0", // chainage in km
    defectType: "pothole", // defectType
    ImageRef: "image url?", // image ref
    length: "3", // length in m
    width: "1", // width in m
    depth: "50", // depth/thickness in mm?
    Notes: "its a hole with cracks", // Notes
    date: `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`, // date
    Action: "Action",
  },
];

export const DefectProvider = ({ children }) => {
  /* This allows us to change context from our tag component */
  const [defectList, setDefectList] = React.useState(list2);

  return (
    <DefectContext.Provider
      value={{
        defectList,
        setDefectList,
      }}
    >
      {children}
    </DefectContext.Provider>
  );
};

export default DefectContext;
