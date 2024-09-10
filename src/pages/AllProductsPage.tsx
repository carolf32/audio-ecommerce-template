// import { MdOutlineTune } from "react-icons/md";
import { Link } from "react-router-dom";
import { HeaderTemplateUser } from "../components/HeaderTemplateUser";
// import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

export const AllProductsPage = () => {
  const { products } = useProducts();

  return (
    <div>
      <HeaderTemplateUser />

      <div className="flex flex-col gap-1 m-4">
        <p className="text-sm">Explore our full range of audio products</p>
        <h2 className="font-semibold text-xl pb-3">All Products</h2>
      </div>

      {/* <div className="flex justify-between items-center m-4">
        <div className="flex gap-1 items-center bg-grey-2 p-2 rounded-lg cursor-pointer hover:text-green-default">
          <MdOutlineTune />
          Filter
        </div>
        <div className="hover:text-green-default cursor-pointer">
          Popularity
        </div>
        <div className="hover:text-green-default cursor-pointer">Newest</div>
        <Link
          to="/products"
          className="hover:text-green-default cursor-pointer"
        >
          See All
        </Link>
      </div> */}

      <div className="bg-grey-1 mt-5 rounded-t-3xl h-full py-6">
        <div className="grid gap-4 max-[425px]:grid-cols-1  px-5 m-auto md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <div
                key={product.id}
                className="bg-white pt-0 mt-0 rounded-2xl flex flex-col text-center items-center cursor-pointer justify-center"
              >
                <img
                  src={product.images[0]}
                  className="w-60 h-60 rounded-xl mt-2 object-cover"
                />
                <p className="py-2 font-bold">{product.name}</p>
                <p className="mb-2">{`€ ${product.price.toFixed(2)}`}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
