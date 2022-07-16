import React from "react";

interface ProductProps {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
}

type Props = {
  product: ProductProps;
};

export default function Product({ product }: Props) {
  return (
    <div className="group relative max-w-[100%]">
      {/* group-hover:opacity-75 */}
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden  lg:h-80 lg:aspect-none">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" />
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-indigo-600">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
      <div className="font-space flex items-center justify-center my-2 space-x-4">
        <button className="bg-indigo-600 hover:bg-indigo-100 hover:duration-500 hover:ease-in-out text-indigo-100 hover:text-indigo-500 font-semibold py-3 px-6 rounded-md ">
          Add to cart
        </button>
        <button className="bg-indigo-100 hover:bg-indigo-600 hover:duration-500 hover:ease-in-out text-indigo-500 hover:text-indigo-100 font-semibold py-3 px-6 rounded-md ">
          View More
        </button>
      </div>
    </div>
  );
}
