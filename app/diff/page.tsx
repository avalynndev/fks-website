"use client";

import React from "react";

export default function ComparePDFsPage() {
  const pdf1 = "/lighthouse-old.pdf";
  const pdf2 = "/lighthouse-new.pdf";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl">
        <div className="bg-white rounded-2xl shadow-md p-2">
          <h2 className="text-center text-gray-700 font-medium mb-2">
            Old Website
          </h2>
          <iframe
            src={pdf1}
            className="w-full h-[80vh] rounded-lg border"
            title="PDF 1"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-md p-2">
          <h2 className="text-center text-gray-700 font-medium mb-2">
            New website
          </h2>
          <iframe
            src={pdf2}
            className="w-full h-[80vh] rounded-lg border"
            title="PDF 2"
          />
        </div>
      </div>
    </div>
  );
}
