import React, { createContext, useContext, useState, useEffect } from "react";

import { ethers } from "ethers";
import { BigNumber } from "ethers";
import { toast } from "react-toastify";
import { usePublicClient, useAccount, useNetwork } from "wagmi";
import { useEthersSigner } from "../web3-services/signer.ts";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import invoice from "../data/invoice.js";

const UserDataContext = createContext();

export const UserContextProvider = ({ children }) => {
  const { chain } = useNetwork();
  const [activeChain, setActiveChainId] = useState(chain?.id);
  useEffect(() => {
    setActiveChainId(chain?.id);
  }, [chain?.id]);
  const { address, isDisconnected } = useAccount();
  const signer = useEthersSigner(activeChain);
  const [confetti, setConfetti] = useState(false);
  const navigate = useNavigate();
  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const onRegisterUser=async()=>{
    setConfetti(true);
    await sleep(3* 1000);
    setConfetti(false);
    navigate("/auth");
  }

  const onLogin =async ()=>{
    setConfetti(true);
    await sleep(3 * 1000);
    setConfetti(false);
    navigate("/marketplace");
  }


  useEffect(() => {
    if (!signer) return;
  }, [signer, address]);


  function addQrCodeToPdf(qrCodeDataUrl, pdf) {
    const qrImg = new Image();
    qrImg.src = qrCodeDataUrl;

    // Define the position where you want to add the QR code (xPosition, yPosition)
    const xPosition = 450; // Example position (adjust as needed)
    const yPosition = 50; // Example position (adjust as needed)

    qrImg.onload = function () {
      const qrWidth = 60; // Set the width of the QR code image
      const qrHeight = (qrImg.height * qrWidth) / qrImg.width; // Maintain aspect ratio

      // Add QR code image to the PDF at a specific position
      pdf.addImage(
        qrCodeDataUrl,
        "PNG",
        xPosition,
        yPosition,
        qrWidth,
        qrHeight
      );

      // Save or display the PDF with the QR code
      pdf.save("invoice_with_qr.pdf"); // Save the PDF
      // OR
      // window.open(pdf.output('datauristring')); // Open the PDF in a new tab
    };
  }

  function GenerateInvoice() {
    let id = toast.loading("⏳ Generating QRCode ...", {
      theme: "dark",
      autoClose: true,
    });
    html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: [612, 792],
      });
      toast.update(id, {
        render: " Generating Invoice... 🔓 !",
        type: "success",
        isLoading: true,
        theme: "dark",
        autoClose: true,
      });
      pdf.internal.scaleFactor = 1;
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      // Assuming you have a QR code data URL in qrCodeDataUrl variable
      const qrCodeDataUrl =
        "https://chart.googleapis.com/chart?cht=qr&chl=hello&chs=180x180&choe=UTF-8&chld=L|2"; // Replace with actual QR code data URL

      // Add QR code to the PDF
      addQrCodeToPdf(qrCodeDataUrl, pdf);
      toast.update(id, {
        render: " Adding QRCODE on invoice for Prrof... 🔓 !",
        type: "success",
        isLoading: false,
        theme: "dark",
        autoClose: true,
      });
    });
  }
  return (
    <UserDataContext.Provider
      value={{
        onRegisterUser,
        confetti,
        onLogin,
        GenerateInvoice
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
export const useUserDataContext = () => useContext(UserDataContext);