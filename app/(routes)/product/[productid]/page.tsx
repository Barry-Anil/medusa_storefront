"use client"
import ProductList from "@/components/ProductList"
import Gallery from "@/components/gallery"
import Info from "@/components/info"
import Container from "@/components/ui/Container"
import useProductStore from "@/hooks/use-product-list"
import { useProducts } from "medusa-react"


interface ProductpageProps {
    params: {
        productid: string
    }
}

const Productpage:React.FC<ProductpageProps> = ({params}) => {

    const productId = params?.productid;

    const {products} = useProducts();

    console.log(products, "products query")

    const product = products?.filter((product :any) => product.id === productId)[0].images;
    console.log(product, "prdct")

  return (
    <div className="bg-white">
    <Container>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Gallery images={product} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info data={product} />
          </div>
        </div>
        <hr className="my-10" />
        <ProductList title="Related Items" items={products} />
      </div>
    </Container>
  </div>  
  )
}

export default Productpage