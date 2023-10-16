import React, { Fragment } from "react";
import { useUserDataContext } from "../context/DataContext";

const InvoiceGenerator = () => {
  const {GenerateInvoice} = useUserDataContext();
  return (
    

      <button onClick={GenerateInvoice} style={{ color: "red" }}>
        Generate-Invoice
      </button>
    // </Fragment>
  );
};

export default InvoiceGenerator;
