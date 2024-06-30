import { HeaderTemplate } from "../components/HeaderTemplate";
import { BannerHomepage } from "../components/homepageComponents/bannerHomepage";
import { HomeProducts } from "../components/homepageComponents/products";
import { SearchHomepage } from "../components/homepageComponents/searchHomepage";

export const Homepage = () => {
  return (
    <main>
      <HeaderTemplate />
      <SearchHomepage />
      <BannerHomepage />
      <HomeProducts />
    </main>
  );
};
