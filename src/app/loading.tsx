"use client";
import React from "react";
import { Circles } from "react-loader-spinner";

function loading() {
  return (
    <div>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass="w-full h-full"
        visible={true}
      />
    </div>
  );
}

export default loading;
