import "./index.css";
import profileSrc from "./assets/profile.png";
import GithubIcon from "./icons/github";
import MediumIcon from "./icons/medium";
import image from "./assets/image.jpg";
import { useRef } from "react";
import { useMouseOverZoom } from "./hooks";
import { PdfDocument } from "./PdfDocument";
// import PDFDocument2 from "./PDFDocument2";

// C:/Users/TATO/Desktop/git/ReactRepo/multi-project/src/02-pdf-viewer/assets/FORMULARIO 012-17 LICENCIAS.pdf
const pdfURL = "./src/02-pdf-viewer/assets/FORMULARIO 012-17 LICENCIAS.pdf";

const PDFViewer = () => {
  console.log("PDFViewer");
  const source = useRef(null);
  const target = useRef(null);
  const cursor = useRef(null);

  // call the custom hook
  useMouseOverZoom(source, target, cursor);

  return (
    <div className="w-screen h-screen bg-gradient-to-tr from-indigo-200 to-indigo-50 relative">
      <div className="grid grid-cols-12 gap-6 h-full">
        <div className="col-span-12 md:col-span-6 px-12 md:px-24 flex items-center relative">
          {/* CONTENT */}
          <div className="flex flex-col items-start space-y-4 relative z-10">
            <div className="flex flex-col items-start space-y-1">
              <h3 className="text-2xl text-gray-700 opacity-50">
                React Tutorial
              </h3>
              <h1 className="text-5xl text-indigo-600 font-bold leading-[1.2]">
                Mouse-Over Zoom Effect
              </h1>
            </div>
            <a
              href="https://www.instagram.com/a2.coder/"
              className="cursor-pointer rounded-full bg-gray-50 hover:bg-indigo-50 py-2 pl-2 pr-4 flex items-center space-x-2 border border-indigo-200 hover:border-indigo-300 transition ease-in-out duration-500"
            >
              <img
                src={profileSrc}
                alt="a2.coder"
                className="w-8 h-8 rounded-full object-cover object-center"
              />
              <div className="text-lg font-semibold text-gray-800">
                a2.coder
              </div>
            </a>
          </div>
        </div>
        <h1>PDF Viewer</h1>
        <div className="col-span-12 md:col-span-4 md:col-start-9 border-t-8 md:border-t-0 md:border-l-8 border-indigo-500 relative z-10">
          {/* <img ref={source} src={image} className="w-full h-full bg-gray-100 cursor-crosshair object-cover" /> */}
          {/*   <object
            // ref={source}
            data={pdfURL}
            type="application/pdf"
            width="100%"
            height="500px"
          >
            <p>
              Unable to display PDF file. Download instead.
            </p>
          </object> */}
          {/*  <embed
            src={pdfURL}
            width="500"
            height="375"
            type="application/pdf"
          ></embed> */}
          {/*  <iframe 
            // ref={source} 
            src={pdfURL} 
            width="100%">
          </iframe> */}
          {/*  <PDFDocument2 /> */}
          <div>
            <h1>PDF.js Previous/Next example</h1>
            <div>
              <button id="prev">Previous</button>
              <button id="next">Next</button>
              &nbsp; &nbsp;
              <span>
                Page: <span id="page_num"></span> /{" "}
                <span id="page_count"></span>
              </span>
            </div>
            <div className="canvas-img-container">
              <canvas /* ref={source} */ id="the-canvas"></canvas>
              <div ref={source} id="the-image-target"></div>
            </div>
          </div>
          <div
            ref={cursor}
            className="border border-sky-500 absolute pointer-events-none"
          />
          <canvas
            ref={target}
            className="absolute pointer-events-none bottom-full translate-y-1/2 left-1/2 -translate-x-1/2 md:translate-y-0 md:translate-x-0 md:bottom-16 md:-left-48 border-8 border-indigo-500 w-64 h-64 z-10 bg-gray-200"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
