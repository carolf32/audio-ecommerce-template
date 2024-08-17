import { HeaderTemplateUser } from "../components/HeaderTemplateUser";

export const ErrorPage = () => {
  return (
    <div>
      <HeaderTemplateUser />

      <div className="flex flex-col justify-center items-center my-40 text-7xl">
        <h2>Oops! Not found</h2>
        <iframe src="https://lottie.host/embed/219cbd58-0847-4f53-a3bd-7528acf38c2f/NVoLb6OLzh.json"></iframe>
      </div>
    </div>
  );
};
