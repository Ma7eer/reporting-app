import * as React from "react";

const ReportContext = React.createContext();

const reportsHardCoded = [
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
];

export const ReportProvider = ({ children }) => {
  /* This allows us to change context from our tag component */
  const [reportList, setReportList] = React.useState(reportsHardCoded);

  return (
    <ReportContext.Provider value={{ reportList, setReportList }}>
      {children}
    </ReportContext.Provider>
  );
};

export default ReportContext;
