import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";

export const HomeProducts = () => {
  const { products } = useProducts();

  return (
    <div className="bg-grey-1 mt-5 rounded-t-3xl h-full pb-7">
      <div className="p-5 flex justify-evenly items-center flex-wrap gap-1">
        <Link
          to="/headphones"
          className="bg-green-default cursor-pointer text-grey-0 px-4 py-1 font-semibold rounded-full hover:text-black"
        >
          Headphones
        </Link>
        <Link
          to="/earpads"
          className="bg-green-default cursor-pointer text-grey-0 px-4 py-1 font-semibold rounded-full hover:text-black"
        >
          Earpads
        </Link>
        <Link
          to="/acessories"
          className="bg-green-default cursor-pointer text-grey-0 px-4 py-1 font-semibold rounded-full hover:text-black"
        >
          Acessories
        </Link>
        <Link
          to="/products"
          className="bg-green-default cursor-pointer text-grey-0 px-4 py-1 font-semibold rounded-full hover:text-black"
        >
          All Products
        </Link>
      </div>
      <div className="flex justify-between px-5 py-7">
        <h3 className="font-semibold ">Featured Products</h3>
        <Link
          to="/products"
          className="cursor-pointer hover:text-green-default"
        >
          See All
        </Link>
      </div>

      <div className="grid gap-4 max-[425px]:grid-cols-1  px-5 m-auto md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="bg-white pt-0 mt-0 rounded-2xl flex flex-col text-center items-center cursor-pointer justify-center">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-60 h-60 rounded-xl mt-2 object-cover"
              />
              <p className="py-2 font-bold">{product.name}</p>
              <p className="mb-2">{`€ ${product.price.toFixed(2)}`}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
