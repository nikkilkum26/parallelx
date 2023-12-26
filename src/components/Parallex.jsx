import { useRef, useState } from "react";
import { useEffect } from "react";

const Parallex = ({ selectedImages }) => {
  const picRef = useRef([]);
  const parallelXScroller = useRef("");
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    if (!selectedImages.length) return;
    setImageList([...selectedImages]);
    if (parallelXScroller.current) {
      let len = (selectedImages.length || 0) + 2;
      // parallelXScroller.current[0]?.style.height = `repeat(12,300px)`
      console.log(
        (parallelXScroller.current.style.gridTemplateColumns = `repeat(${len},300px)`)
      );
    }
  }, [selectedImages]);

  useEffect(() => {
    if (picRef.current?.length) {
      imageList.forEach((eachList, idx) => {
        picRef.current[idx].style.backgroundImage = `url(${eachList})`;
      });
    }
  }, [picRef.current, imageList]);

  return (
    <div className="container">
      <div className="parallex-container">
        <div className="parallex-scroller" ref={parallelXScroller}>
          <div className="item  ">
            {/* <div className="item-1" draggable="false" ></div> */}
          </div>

          {imageList.map((eachImg, idx) => (
            <div className="item " key={eachImg}>
              <div
                className="common"
                ref={(element) => {
                  picRef.current[idx] = element;
                }}
              ></div>
            </div>
          ))}

          <div className="item ">{/* <div className="item-11"></div> */}</div>
          <div className="item ">{/* <div className="item-12"></div> */}</div>
          <div className="item ">{/* <div className="item-13"></div> */}</div>
          <div className="item ">{/* <div className="item-13"></div> */}</div>

        </div>
      </div>
    </div>
  );
};

export default Parallex;
