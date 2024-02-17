import SearchBar from "@/components/common/SearchBar";
import { Bell, Currency, BadgeIndianRupee } from "lucide-react";
import { CurrentDate } from "./current-date";
import { UserImformation } from "./user-information";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-4 py-3 rounded-md rounded-t-none bg-white">
      <SearchBar />
      <div className="flex items-center space-x-4">
        <Button
          variant={"ghost"}
          className="border p-2 rounded-full grid place-items-center"
        >
          <Bell className="w-5 h-5" />
        </Button>
        <button className="flex bg-black justify-center px-4 py-2 rounded-md space-x-1 items-center ">
          <BadgeIndianRupee className="text-xs text-white" />
          <p className="text-xs text-white">Earn More</p>
        </button>
        <CurrentDate />
        <UserImformation />
      </div>
    </header>
  );
};

export default Header;
