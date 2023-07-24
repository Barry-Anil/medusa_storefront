import React from "react";

import Link from "next/link";
import Container from "./ui/Container";
import MainNav from "./MainNav";
import { Category } from "@/types";
import NavbarActions from "./NavbarActions";
import Search from "./Search";
import { useProducts } from "medusa-react";

const Navbar = () => {
  const { products } = useProducts();

  console.log(products, "products for nav bar")

  if (!products) {
    return null; // or return a loading indicator, error message, etc.
  }


  const collectionTypes = new Set();

  for (const product of products) {
    if (product.collection && product.collection.title) {
      const collectionType = product.collection.title;
      collectionTypes.add(collectionType);
    }
  }
  
  
  // Convert the Set to an array
  const uniqueCollectionTypes = Array.from(collectionTypes);
  
  const categories = Array.from(uniqueCollectionTypes);


  console.log(categories, "categories")

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-0 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Store</p>
          </Link>
          <MainNav data={categories}/>
          <Search />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
