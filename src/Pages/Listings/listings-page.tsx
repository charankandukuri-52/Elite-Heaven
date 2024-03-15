import Navbars from "../Navbar/Navbar";
import photo1 from "../../assets/Images/lp1.jpeg";
import { CiShare2 } from "react-icons/ci";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const listingMenu = [
  {
    id: new Date(Date.now()).getSeconds().toString(),
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nisi corrupti dolores molestias velit neque earum?",
    place: "India",
    Category: "Normal",
    reviews: "5.0",
    image1: { photo1 },
    image2: "image2",
    image3: "image3",
    price: 40,
    startDate: new Date(Date.now()).toString(),
    endDate: new Date(Date.now() + 86400000),
  },
];

const Listings = () => {
  const [liked, setLiked] = useState(false);
  const handleLikeClick = () => {
    setLiked(!liked);
  };
  return (
    <>
      <Navbars />
      <div className="title">
        <div className="flex gap-10 items-center justify-center">
          <h1 className="text-2xl py-10 px-10 -mx-10">
            {listingMenu[0].title}
          </h1>
          <div className="md:flex gap-2 hidden">
            <Button variant="outline">
              <CiShare2 /> <span className="mx-2">Share</span>
            </Button>
            <Button variant="outline" onClick={handleLikeClick}>
              {liked ? (
                <MdFavorite style={{ color: "red" }} />
              ) : (
                <MdFavoriteBorder />
              )}
              <span
                className="mx-2"
                style={{ color: liked ? "red" : "inherit" }}
              >
                {liked ? "Added to Favourites" : "Add to Favourite"}
              </span>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="container mx-auto px-4">
            <section className="py-8 px-4">
              <div className="flex flex-wrap -mx-4">
                <div className="hidden md:block md:w-1/2 px-4">
                  <div className="h-full w-full bg-cover rounded shadow-md image-1 bg-black">
                    <img
                      className="rounded shadow-md image-2"
                      src="https://source.unsplash.com/random/640x760"
                      alt=""
                    />
                  </div>
                </div>
                <div className="md:w-1/2 h-auto px-4 ">
                  <div className="mb-8 bg-blue-500">
                    <img
                      className="rounded shadow-md image-2"
                      src="https://source.unsplash.com/random/1280x720"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="rounded shadow-md"
                      src="https://source.unsplash.com/random/1280x720"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Drawer>
            <DrawerTrigger asChild>
              <Button>Show All Images</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full">
                <DrawerHeader>
                  <DrawerTitle>Images</DrawerTitle>
                  <DrawerDescription>All Images of the Hotel</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                  <div className="container mx-auto px-4">
                    <section className="py-8 px-4">
                      <div className="flex flex-wrap -mx-4">
                        <div className="hidden md:block md:w-1/2 px-4">
                          <div className="h-full w-full bg-cover rounded shadow-md image-1">
                            <img
                              className="rounded shadow-md image-2"
                              src="https://source.unsplash.com/random/640x760"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="md:w-1/2 h-auto px-4">
                          <div className="mb-8">
                            <img
                              className="rounded shadow-md image-2"
                              src="https://source.unsplash.com/random/1280x720"
                              alt=""
                            />
                          </div>
                          <div>
                            <img
                              className="rounded shadow-md"
                              src="https://source.unsplash.com/random/1280x720"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="py-8 px-4">
                      <div className="flex flex-wrap -mx-4">
                        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
                          <img
                            className="rounded shadow-md"
                            src="https://source.unsplash.com/random/1280x720"
                            alt=""
                          />
                        </div>
                        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
                          <img
                            className="rounded shadow-md"
                            src="https://source.unsplash.com/random/1280x720"
                            alt=""
                          />
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="destructive">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <div className="grid grid-cols-2"></div>
    </>
  );
};

export default Listings;
