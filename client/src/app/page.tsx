import ProductCard from "@/components/cards/ProductCard";
import Hero from "@/components/layout/Hero";
import products from "../../data/mockProducts";

export default function Home() {
  return (
    <main className="p-0 space-y-12">
      <Hero />
      <div className="bg-custom-gainsboro w-full space-y-12 py-12 px-6">
        <h2 className="text-4xl font-bold text-center">WE HAVE THE BEST CATALOG FOR YOU</h2>
        <div className="flex flex-col items-center justify-center flex-wrap md:flex-row md:justify-between gap-6 p-4">
          {products.map((prod) => (
            <ProductCard
              key={prod.id}
              name={prod.name}
              description={prod.description}
              image={prod.image}
              price={prod.price}
              stock={prod.stock}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
