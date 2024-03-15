import Navbars from "../Navbar/Navbar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "@/lib/image";
import photo1 from "../../assets/Images/lp1.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  // Add more items if needed
];

const Listings = () => {
  return (
    <>
      <Navbars />
      <div className="title">
        <h1 className="text-2xl py-10 px-10">{listingMenu[0].title}</h1>
        <div className="flex items-center justify-center">
          <Carousel className="w-[40vw] border-none shadow-none">
            <CarouselContent>
              {listingMenu.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 ">
                        <Image
                          src={item.image1.photo1}
                          alt={item.title}
                          fill
                          className="rounded-md object-cover h-full w-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="grid grid-cols-2"></div>
    </>
  );
};

export default Listings;
