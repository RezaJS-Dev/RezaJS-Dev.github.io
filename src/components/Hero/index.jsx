"use client";

import Button from "../Ui/Button";

const Hero = () => {
  return (
    <>
      <section className="pt-20 min-h-svh flex flex-col sm:flex-row justify-around items-center bg-wedgwood-50 dark:bg-wedgwood-925">
        <div className="font-display space-y-4">
          <p className="text-xl">Hello, I am</p>
          <h2 className="font-bold text-5xl text-wedgwood-600 dark:text-wedgwood-400">
            Reza <span>Jafari S.</span>
          </h2>
          <p className="text-xl">React / Dynamic Web Page Developer</p>
          <div className="flex space-x-3">
            <Button
              textColor={"text-wedgwood-50"}
              bgColor={"bg-wedgwood-500"}
              borderColor={"border-wedgwood-500"}
              hoverText={"hover:text-wedgwood-50"}
              hoverBg={"hover:bg-wedgwood-600"}
              hoverBorder={"hover:border-wedgwood-600"}
              href={"#contact"}
            >
              Let's Connect
            </Button>
            <Button
              textColor={"text-wedgwood-600 dark:text-wedgwood-400"}
              borderColor={"border-wedgwood-600 dark:border-wedgwood-400"}
              hoverText={"hover:text-wedgwood-50"}
              hoverBg={"hover:bg-wedgwood-500"}
              hoverBorder={"hover:border-wedgwood-500"}
              href={"/documents/Reza_Jafari_CV.pdf"}
              download={"Reza_Jafari_CV.pdf"}
            >
              Download CV
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="image-container">
            <img className="translate-x-3 scale-[1.1]" src="/me.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
