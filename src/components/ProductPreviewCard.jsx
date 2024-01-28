import React from "react";

const ProductPreviewCard = () => {
  return (
    <div className="flex w-full max-w-[430px] flex-col items-center justify-center overflow-hidden rounded-xl border border-black bg-white text-sm lg:h-[515px] lg:w-[685px] lg:flex-row">
      {/* image section  */}
      <div className="w-full">
        <img src="/image-product-mobile.jpg" alt="" className="lg:hidden" />
        <img
          src="/image-product-desktop.jpg"
          alt=""
          className="hidden lg:block lg:h-full"
        />
      </div>
      {/* lower section  */}
      <div className="border border-red-500 p-6">
        <p className="font-Montserrat font-bold uppercase text-fmTextColor">
          {"Perfume".split("").map((item, i) => (
            <span key={i} className="mr-1">
              {item}
            </span>
          ))}
        </p>
        <div className="mt-2">
          <h1 className="font-Fraunces text-3xl font-bold text-fmDarkBlue">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="mt-3 font-Montserrat text-sm font-medium text-fmTextColor">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <p className="mt-4 flex items-center justify-start gap-5">
          <span className="font-Fraunces text-3xl font-bold text-fmLightGreen">
            $149.99
          </span>
          <span className="font-Montserrat text-fmTextColor line-through">
            $169.99
          </span>
        </p>
        <button className=" flex w-full items-center justify-center gap-2 rounded-lg border border-purple-600 bg-fmLightGreen py-3 font-Montserrat font-bold text-white active:bg-fmDarkGreen">
          <img src="/icon-cart.svg" alt="" />
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
