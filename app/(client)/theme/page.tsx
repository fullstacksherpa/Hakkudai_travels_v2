import { ModeToggle } from "@/components/mode-toggle";

const page = () => {
  return (
    <div className="h-[60vh] flex items-center justify-center md:text-4xl text-xl px-3 tracking-widest leading-7">
      <ModeToggle />
    </div>
  );
};

export default page;
