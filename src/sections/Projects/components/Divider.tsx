export function ProjectsDivider() {
  return (
    <section className="relative h-20 shadow-[0px_20px_20px_2px_#000] z-20">
      <div className="h-full w-[calc(100%+0.4rem)] bg-black-1 absolute -left-[0.3rem] 
        rotate-3 -top-10 shadow-[inset_0px_20px_20px_2px_#000] origin-top" 
      />
    </section>
  );
}

export function ProjectsDividers() {
  return (
    <section className="bg-black-1 h-max relative max-w-[100vw]">

      {/* the problem is here */}
      <div
        className="h-28 w-[100vw] absolute"
      >
        <div className="h-full w-full bg-black-1 rotate-3 -top-10 -left-1
        shadow-[inset_0px_20px_20px_2px_#000] absolute" />
      </div>

      <div className="h-20 shadow-[inset_0px_20px_20px_2px_#000] w-full relative top-16" />
    </section>
  );
}