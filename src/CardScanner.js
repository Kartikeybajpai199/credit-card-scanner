// import React, { useState, useEffect, useRef } from 'react';
// import cv from 'opencv.js';
// import Tesseract from 'tesseract.js';

// const CardScanner = () => {
//   // const videoRef = useRef(null);
//   // const canvasRef = useRef(null);
//   // const [cardDetails, setCardDetails] = useState(null);

//   // const video = videoRef.current;
//   // const canvas = canvasRef.current;
//   // const context = canvas.getContext('2d');
//   // const cardNumberRegex = /\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}/;
//   // const expirationDateRegex = /\d{1,2}\/\d{2}/;
//   // const nameRegex = /[A-Z][a-z]+\s[A-Z][a-z]+/;

//   // const processImage = async (imageData) => {
//   //   await cv.cvtColorAsync(imageData, imageData, cv.COLOR_RGBA2GRAY);
//   //   await cv.adaptiveThresholdAsync(imageData, imageData, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 11, 2);
//   //   const mat = cv.matFromArray(imageData.rows, imageData.cols, cv.CV_8UC1, imageData.data);
//   //   const contours = new cv.MatVector();
//   //   const hierarchy = new cv.Mat();
//   //   cv.findContours(mat, contours, hierarchy, cv.RETR_TREE, cv.CHAIN_APPROX_SIMPLE);
//   //   for (let i = 0; i < contours.size(); i++) {
//   //     const cnt = contours.get(i);
//   //     const rect = cv.boundingRect(cnt);
//   //     if (rect.width > imageData.width / 2 && rect.height > imageData.height / 2) {
//   //       const roi = imageData.data.slice(rect.y * imageData.width * 4, (rect.y + rect.height) * imageData.width * 4);
//   //       const roiMat = cv.matFromArray(rect.height, rect.width, cv.CV_8UC4, roi);
//   //       await cv.cvtColorAsync(roiMat, roiMat, cv.COLOR_RGBA2GRAY);
//   //       const { data } = roiMat;
//   //       const result = await Tesseract.recognize(data, {
//   //         tessedit_char_whitelist: '0123456789/',
//   //       });
//   //       const text = result.text.replace(/\s+/g, '');
//   //       const cardNumber = text.match(cardNumberRegex)?.[0];
//   //       const expirationDate = text.match(expirationDateRegex)?.[0];
//   //       const name = text.match(nameRegex)?.[0];

//   //       if (cardNumber && expirationDate && name) {
//   //         setCardDetails({ cardNumber, expirationDate, name });
//   //         return;
//   //       }
//   //     }
//   //   }
//   //   contours.delete();
//   //   hierarchy.delete();
//   //   mat.delete();
//   // };

//   // const processVideo = async () => {
//   //   context.drawImage(video, 0, 0, canvas.width, canvas.height);
//   //   const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
//   //   await processImage(imageData);
//   //   stopCamera();
//   // //  requestAnimationFrame(processVideo);
//   // };

//   // const startCamera = async () => {
//   //   try {
//   //     const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
//   //     video.srcObject = stream;
//   //     video.play();
//   //   } catch (err) {
//   //     console.error('Failed to access camera', err);
//   //   }
//   // };

//   // const stopCamera=()=>
//   // {
//   //   const video=videoRef.current;
//   //   const stream =video.srcObject;
//   //   const tracks=stream.getTracks();
//   //   tracks.forEach(track=>track.stop());
//   //   video.srcObject=null;
  
//   // }

//   // cv.onRuntimeInitialized = () => {
//   //   startCamera();

//   //  requestAnimationFrame(processVideo);
    
//   // };

//   // useEffect(() => {
   
//   // }, []);


//   return (
//     <div>
//       <video ref={videoRef} />
//       <canvas ref={canvasRef}/>
//       {cardDetails && (
//       <div>
//         <div>Card Number: {cardDetails.cardNumber}</div>
//         <div>Expiration Date: {cardDetails.expirationDate}</div>
//         <div>Name: {cardDetails.name}</div>
//       </div>
//     )}
//       </div>
//   )
//       }

//     export default CardScanner;
