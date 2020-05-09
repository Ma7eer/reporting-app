import * as React from "react";

const ReportContext = React.createContext();

let date = new Date();

let potholeList = [
  [
    "R2019-001",
    "Fahud to Mattan",
    `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
    "Action",
  ],
  [
    "R2019-002",
    "Fahud to Yibal",
    `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
    "Action",
  ],
  [
    "R2019-003",
    "Fahud to Lekhwair",
    `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
    "Action",
  ],
];

let washoutList = [
  [
    "R2020-001",
    "Fahud to MGate 2",
    `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
    "Action",
  ],
];

export const ReportProvider = ({ children }) => {
  /* This allows us to change context from our tag component */
  const [potholeReportList, setPotholeReportList] = React.useState(potholeList);
  const [washoutReportList, setWashoutReportList] = React.useState(washoutList);

  return (
    <ReportContext.Provider
      value={{
        potholeReportList,
        setPotholeReportList,
        washoutReportList,
        setWashoutReportList,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export default ReportContext;
