import React from 'react'
import {Document, Page, pdfjs} from 'react-pdf';
import pdfFile from '../../assets/pdf/resume/BALAMURUGAN.pdf';
function PdfViewer() {
 // pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.js`;

 pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.js';

    const [numPages,setNumPages]=React.useState(null);
    const [pageNumber,setPageNumber]=React.useState(1);
    const [error, setError] = React.useState(null);

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
    }


    function onDocumentLoadError(err) {
        setError(err);
      }

  return (
    <div>
        {error && <p>Error loading PDF: {error.message}</p>}
      <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadError}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button disabled={pageNumber<=1}
      onClick={()=>setPageNumber(pageNumber-1)}>Previous</button>
      <button disabled={pageNumber<=1}
      onClick={()=>setPageNumber(pageNumber+1)}>Next</button>
    </div>
  )
}

export default PdfViewer
