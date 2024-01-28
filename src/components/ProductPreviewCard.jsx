import React from "react";

const ProductPreviewCard = () => {
  return (
    <div className="flex w-[343px] flex-col items-center justify-center overflow-hidden rounded-xl bg-white text-sm lg:h-[374px] lg:w-[500px] lg:flex-row">
      {/* image section  */}
      <div className="lg:h-full lg:w-1/2">
        <img src="/image-product-mobile.jpg" alt="" className="lg:hidden" />
        <img
          src="/image-product-desktop.jpg"
          alt=""
          className="hidden brightness-[0.95] lg:block lg:h-full"
        />
      </div>
      {/* lower section  */}
      <div className="p-6 lg:h-full lg:w-1/2">
        <p className="font-Montserrat uppercase text-fmTextColor lg:text-[10px]">
          {"Perfume".split("").map((item, i) => (
            <span key={i} className="mr-1">
              {item}
            </span>
          ))}
        </p>
        <div className="mt-2">
          <h1 className="font-Fraunces text-[32px] font-bold leading-8 text-fmDarkBlue lg:text-[27px] lg:leading-[27px]">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="mt-3 font-Montserrat text-[12px] text-sm font-medium leading-6 text-fmTextColor lg:mt-5 lg:leading-5">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <p className="mt-4 flex items-center justify-start gap-5 lg:gap-4">
          <span className="font-Fraunces text-3xl font-bold text-fmLightGreen lg:text-[27px]">
            $149.99
          </span>
          <span className="font-Montserrat text-fmTextColor line-through lg:text-[12px]">
            $169.99
          </span>
        </p>
        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-fmLightGreen py-3 font-Montserrat font-bold text-white active:bg-fmDarkGreen lg:text-[12px]">
          <img src="/icon-cart.svg" alt="" className="lg:w-[12px]" />
          <p className="">Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductPreviewCard;

//  Gabrielle Essence Eau De Parfum A floral, solar and voluptuous
// interpretation composed by Olivier Polge, Perfumer-Creator for the House
// of CHANEL. $149.99 $169.99 Add to Cart
