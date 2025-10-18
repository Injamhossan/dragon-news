import React, { Suspense } from "react";
import Catagory from "../../pages/Home/Catagory";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <Catagory></Catagory>
      </Suspense>
    </div>
  );
};

export default LeftAside;
