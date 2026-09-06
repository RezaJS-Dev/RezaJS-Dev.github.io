"use client";

const Recommendation = ({ testimonial }) => {
  return (
    <div className="flex flex-col sm:flex-row border-2 min-h-43 grow overflow-y-auto sm:grow-0 min-w-full border-solid rounded-2xl border-wedgwood-300 dark:border-wedgwood-600 bg-wedgwood-50 dark:bg-wedgwood-800 max-w-4xl text-start items-center scrollbar-thin">
      <div className="flex items-center justify-center p-6 pb-0 sm:pb-6 sm:pr-0 min-h-fit min-w-fit ">
        <div className="flex items-center justify-center overflow-hidden border-3 border-solid rounded-full border-wedgwood-500 dark:border-wedgwood-400 size-24">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="flex items-center justify-center size-full max-h-full max-w-full wrap-normal whitespace-normal"
          />
        </div>
      </div>
      <div className="flex flex-col p-6 items-start gap-6">
        <p className="font-display text-md grow ">{testimonial.text}</p>
        <div className="flex flex-col gap-1 items-start">
          <span className="font-bold">{testimonial.name}</span>
          <span className="text-sm">
            {testimonial.position} at {testimonial.company}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
