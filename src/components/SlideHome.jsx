import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Avatar, Button, Tooltip } from "@nextui-org/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function SlideHome({followers}) {
  const [slidesPerView, setSlidesPerView] = useState(2);

  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width >= 1700) {
      setSlidesPerView(4); 
    } else if (width >= 1418) {
      setSlidesPerView(3); 
    } else if (width >= 1160) {
      setSlidesPerView(2); 
    } else if (width >= 1024) {
      setSlidesPerView(1); 
    } else if (width >= 940) {
      setSlidesPerView(2);
    } else if (width <= 639 && width >= 530) {
      setSlidesPerView(2); 
    } else {
      setSlidesPerView(1);
    }
  };

  useEffect(() => {
    updateSlidesPerView(); // Set the initial value
    window.addEventListener("resize", updateSlidesPerView);
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);
  const users = Array(10).fill(null);
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <> <h1 className="mx-auto">Followers</h1>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={6}
        pagination={{
          clickable: true,
        }}
        effect={'coverflow'}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Pagination,EffectCoverflow]}
        className="mySwiper w-full h-[100px]"
        grabCursor={true}
      >
        
          { followers.map((f,i)=>(
          <SwiperSlide key={i} className="bg-white dark:bg-black dark:text-white text-black  w-[258px] flex items-center justify-center rounded-md text-center h-full">
            <div
              className="flex justify-between items-center mx-auto  w-[258px] h-full p-2 rounded-lg  "
             
            >
              <div className="flex gap-3">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="https://nextui.org/avatars/avatar-1.png"
                  className="flex-shrink-0"
                />
                <div className="flex flex-col gap-1 items-start justify-center flex-grow">
                  <Tooltip
                    content="abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf"
                    showArrow={true}
                    color="foreground"
                    size="lg"
                    closeDelay={50}
                  >
                    <h4 className="text-small font-semibold leading-none text-default-600 w-[100px] truncate cursor-pointer hover:underline">
                      abdellah ait bchikhe dfjksdhfbjkdhgfudsfdsf
                    </h4>
                  </Tooltip>

                  <h5 className="text-small tracking-tight text-default-400">
                    @zoeylang
                  </h5>
                </div>
              </div>
              <Button
                className={
                  isFollowed
                    ? "bg-transparent text-foreground border-default-200"
                    : ""
                }
                color="primary"
                radius="full"
                size="sm"
                variant={isFollowed ? "bordered" : "solid"}
                onPress={() => setIsFollowed(!isFollowed)}
              >
                {isFollowed ? "Unfollow" : "Follow"}
              </Button>
            </div>
          </SwiperSlide>
     
          )) }
      </Swiper>
    </>
  );
}
