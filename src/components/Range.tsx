// import React from "react";
// // plugin that creates slider
// import Slider from "nouislider";
// export default function Range () {
//     const sliderElement = document.getElementById("sliderRegular");
//     React.useEffect(() => {
//         if(sliderElement !== null){
//             Slider.create(sliderElement,), {
//                 start: [40],
//                 connect: [true, false],
//                 step: 1,
//                 range: { min: 0, max: 100 },

//         }
//        });
//         Slider.create(document.getElementById("sliderDouble"), {
//           start: [20, 60],
//           connect: [false, true, false],
//           step: 1,
//           range: { min: 0, max: 100 },
//         });
//       }, []);
//       return (
//         <>
//         <div className="input-slider-container">
//           <div className="slider input-slider--" id="sliderRegular"></div>
//           <br></br>
//           <div className="slider input-slider--" id="sliderDouble"></div>
//         </div>
//         </>
//       );
// }
