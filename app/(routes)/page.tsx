"use client"
import Billboard from '@/components/Billboard'
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container'
import { Billboard as BillboardTypes} from '@/types'
import {useProducts}  from "medusa-react"
import { Product } from '@medusajs/medusa';
import useProductStore from '@/hooks/use-product-list';


const dummyBillboardData: BillboardTypes = {
  id: "1",
  label: "Explore the Special Collection",
  imageUrl: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=600"
};


export default function HomePage() {
  const { products } = useProducts();
  
  const {setAllProductList, allProductList} = useProductStore();

  if (allProductList !== products) {
    setAllProductList(products);
  }
  

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={dummyBillboardData} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
