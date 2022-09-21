import React from "react";
import { pictures } from "../data/pictures";
import GalleryContainer from "./GalleryContainer";

function ForMyLove() {
  return <div>ForMyLove</div>;
}

export default ForMyLove;

// const [count, setCount] = useState(0);
// const [imageVisible, setImageVisible] = useState(false);

// // Cute stuff
// const displayPicture = () => {
//   setCount(count + 1);
//   if (count >= 5) {
//     setImageVisible(true);
//   }
// };

// const resetPicture = () => {
//   setCount(0);
//   setImageVisible(false);
// };
// <div className={`image ${imageVisible ? "image-visible" : ""}`}>
//   {imageVisible && (
//     <GalleryContainer
//       galleryImages={pictures.gallery}
//       isOpen={true}
//       onClose={() => {
//         resetPicture();
//       }}
//     />
//   )}
// </div>;
// <div className="header__logo" onClick={() => displayPicture(count)}></div>;

// .image {
//   opacity: 0;
//   pointer-events: none;
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 20%;
//   height: 20%;
//   transition: all 0.3s ease-in-out;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//   }
// }

// .image-visible {
//   width: 90%;
//   height: 90%;
//   opacity: 1;
//   pointer-events: all;
// }
