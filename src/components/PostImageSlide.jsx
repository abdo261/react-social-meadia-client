import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";


export default function PostImageSlide({ images=[] }) {
 
  // images.forEach(i=>{
    // console.log(`${process.env.REACT_APP_API_URL}/images/${i}`)
  // })
  return (
    <>
      {images && images.length>0 && (
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-full lg:h-[300px] md:h-[200px] h-[170px]  rounded-md"
          spaceBetween={3}
          grabCursor={true}
        >
          {images.map((i) => (
            <SwiperSlide className="w-full h-full rounded-md flex justify-center items-center" key={i}>
              <img
                className="mx-auto h-full object-contain rounded-md"
                alt={i}
                src={`${process.env.REACT_APP_API_URL}images/${i}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
