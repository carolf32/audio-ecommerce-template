import { Link } from "react-router-dom";
import { HeaderTemplateUser } from "../components/HeaderTemplateUser";

export const ProductPageFeat = () => {
  return (
    <div>
      <HeaderTemplateUser />

      <div className="flex flex-col gap-1 m-4">
        <p className="text-sm text-green-default font-semibold">USD 350</p>
        <h2 className="font-semibold text-4xl pb-3">TMA-2 HD Wireless</h2>
      </div>

      <div className="flex justify-between items-center m-4">
        <Link to="/:id">Overview</Link>
        <div className="flex flex-col justify-center items-center">
          Features
          <div className="bg-green-default text-green-default w-7 h-1 rounded"></div>
        </div>
        <Link to="/:id/specifications">Specification</Link>
      </div>

      <div className="m-4">
        <h3 className="font-semibold mb-3">Highly Detailed Audio</h3>
        <p className="leading-7">
          Nam vel porta diam. Morbi et ornare tortor, et consectetur ante. Etiam
          non metus ipsum. Nulla et lorem lacinia, consectetur sem eu, porta
          enim. Curabitur condimentum porttitor dui eget malesuada. Nullam
          consectetur ex at rhoncus ullamcorper. Ut id pretium eros. Mauris nec
          viverra magna. In accumsan turpis et quam vulputate dapibus. Vivamus
          iaculis quam quis eros hendrerit, eget lobortis mauris ullamcorper.
          Nam non tortor a nunc consectetur sagittis vel eget leo.{" "}
        </p>
      </div>

      <div
        href=""
        className="bg-green-default text-white max-w-80 mx-auto items-center m-3 p-2 rounded-lg flex justify-center font-semibold"
      >
        Add to cart
      </div>
    </div>
  );
};
