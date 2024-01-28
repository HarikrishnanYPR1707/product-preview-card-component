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
        <div className="mt-2 border border-purple-500">
          <h1 className="font-Fraunces text-3xl text-fmDarkBlue">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="font-Montserrat text-sm text-fmTextColor">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <p className="">
          <span className="">$149.99 </span>
          <span className="">$169.99</span>
        </p>
        <button className="">
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
