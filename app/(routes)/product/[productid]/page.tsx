"use client"
import ProductList from "@/components/ProductList"
import Gallery from "@/components/gallery"
import Info from "@/components/info"
import Container from "@/components/ui/Container"
import useProductStore from "@/hooks/use-product-list"
import { Image, Product } from "@/types"
import { useProducts } from "medusa-react"
import { cookies } from 'next/headers';

export const runtime = 'edge';

interface ProductpageProps {
    params: {
        productid: string
    }
}


export interface ProductWithPricing extends Product {
  // Add pricing-related properties here
  id:            string;
  created_at:    string;
  updated_at:    string;
  deleted_at:    null;
  currency_code: string;
  amount:        number;
  min_quantity:  null;
  max_quantity:  null;
  price_list_id: null;
  variant_id:    string;
  region_id:     null;
  price_list:    null;
}

const Productpage: React.FC<ProductpageProps> = ({ params }) => {
  const productId = params?.productid;

  const { products } = useProducts();
  console.log(products, "products")

  // Find the product based on productId
  const product: ProductWithPricing | any = products?.find((product: any) => product.id === productId);

  console.log(product, "prdct");

  // Check if product exists before accessing its images
  const productImages: Image[] = product?.images || [] ;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={productImages} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={products} />
        </div>
      </Container>
    </div>
  );
};

export default Productpage;