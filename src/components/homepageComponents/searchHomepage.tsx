import { CiSearch } from "react-icons/ci";
import { useUserContext } from "../../hooks/useUserContext";

export const SearchHomepage = () => {
  const { user } = useUserContext();

  return (
    <div className="flex flex-col gap-1 m-4">
      <p className="text-sm">Hi, {user ? <p>{user.name}</p> : "guest"}</p>
      <h2 className="font-semibold text-xl pb-3">
        What are you looking for today?
      </h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Search headphone"
          className="border-solid focus:border-green-default border-2 w-full rounded-2xl pl-6 outline-none font-thin text-sm pt-1 pb-1"
        />
        <CiSearch className="absolute top-2 left-1 text-grey-3" />
      </div>
    </div>
  );
};
