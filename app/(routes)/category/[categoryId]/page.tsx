"use client"

import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import NoResult from "@/components/ui/NoResult";
import ProductCard from "@/components/ui/ProductCard";
import { usePathname } from "next/navigation";
import MobileFilters from "./components/mobile-filters";
import Filter from "./components/filter";
import {  useProducts } from "medusa-react";



export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  },
  searchParams: {
    colorId: string;
    sizeId: string;
  }
}


const dummyBillboardData: any = {
  id: "1",
  label: "Explore the Special Collection",
  imageUrl: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=600"
};


const CategoryPage: React.FC<CategoryPageProps> =  ({params}) => {

    const categoryId = params.categoryId;
    const { products } = useProducts();

    if (!products) {
      return null; // or return a loading indicator, error message, etc.
    }
    const category = products.filter(category =>  category.collection && category?.collection.title === categoryId);



    const sizes: any = products?.map(category => category?.metadata?.size);
    const colors: any = products?.map(category => category?.metadata?.color);


  return (
    <div className="bg-white">
      <Container>
        <Billboard 
          data={dummyBillboardData}
        />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter
                valueKey="sizeId" 
                name="Sizes" 
                data={sizes}
              />
              <Filter 
                valueKey="colorId" 
                name="Colors" 
                data={colors}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {category.length === 0 && <NoResult />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {category.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;