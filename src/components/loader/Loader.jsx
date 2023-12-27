import React from 'react';
import Lottie from 'lottie-react';
import mylottie from '../../lotties/LoaderDots.json';
function Loader () {
  return (
    <div className="w-96 align-middle m-auto pt-36">
      <Lottie animationData={mylottie} loop={true} />
    </div>
  );
}

export default Loader;
