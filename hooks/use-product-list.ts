
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

const productStore = (set : any) => ({
  allProductList: [],
  setAllProductList: (state : any) => set({ allProductList: state }),

})

const useProductStore = create(
  devtools(
    persist(productStore, {
      name: "productStore",
    })
  )
)

export default useProductStore;