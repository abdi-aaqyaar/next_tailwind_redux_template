import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

export default function Products() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-[100%] lg:px-8">
        <h2 className="text-2xl font-space font-extrabold tracking-tight text-indigo-600">
          Latest Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <>
              <Product key={product.id} product={product} />
              <Product key={product.id} product={product} />
              <Product key={product.id} product={product} />
              <Product key={product.id} product={product} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
