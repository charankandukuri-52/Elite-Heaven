import { CategoryGrids } from "./CategoryGrid";
import { ContainerScrolls } from "./ContainerScroll";
import Content from "./Content";
import { ExploreMore } from "./ExploreMore";

const Hero = () => {
  return (
    <div>
      <ExploreMore />
      <Content />
      <ContainerScrolls />
      <CategoryGrids />
    </div>
  );
};

export default Hero;
