// // ErrorPage.js
// import React from 'react';
// import Lottie from 'lottie-web';
// import animationData from '../animation/error-animation.json';


// const ErrorPage = () => {
//   React.useEffect(() => {
//     // Initialize Lottie animation
//     const animationContainer = document.getElementById('lottie-container');
//     Lottie.loadAnimation({
//       container: animationContainer,
//       animationData: animationData,
//       renderer: 'svg',
//       loop: true,
//       autoplay: true,
//     });
//   }, []);

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="max-w-md p-8 bg-white shadow-lg rounded-md">
//         <div id="lottie-container" className="mb-8"></div>
//         <h2 className="text-2xl font-semibold mb-4">Oops! Something went wrong.</h2>
//         <p className="text-gray-600">
//           We apologize for the inconvenience. Please try again later.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ErrorPage;