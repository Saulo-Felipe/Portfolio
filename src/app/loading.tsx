import { CgSpinner } from "react-icons/cg";

export default function Loading() {

  return (
    <section className="h-[100vh] w-full flex items-center justify-center">
      <CgSpinner className="text-7xl text-white animate-spin" />
    </section>
  );
}