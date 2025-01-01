import ProductCard from "@/components/cards/ProductCard";
import Hero from "@/components/layout/Hero";
import products from "../../data/mockProducts";
import PromoSection from "@/components/home/PromoSection";


export default function Home() {
  return (
    <main className="p-0 space-y-12">
      <Hero />
      <div className="bg-custom-gainsboro w-full space-y-12 py-12 px-6">
        <h2 className="text-5xl font-bold text-center">WE HAVE THE BEST CATALOG FOR YOU</h2>
        <div className="flex flex-col items-center flex-wrap md:flex-row md:justify-around md:items-baseline space-y-12 space-x-4 p-2">
          {products.map((prod) => (
            <ProductCard
              key={prod.id}
              name={prod.name}
              description={prod.description}
              image={prod.image}
              price={prod.price}
            />
          ))}
        </div>
      </div>
      {/* Promo section */}
      <PromoSection />
    </main>
  );
}
