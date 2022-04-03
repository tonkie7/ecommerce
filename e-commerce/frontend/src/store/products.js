import axios from 'axios'

export default ({
   state: {
      products: [],
      product: null
   },
   getters: {
      products: state => state.products,
      product: state => state.product
   },
   mutations: {
      SET_PRODUCTS: (state, products) => {
         state.products = products
         // console.log(products)
      },
      SET_PRODUCT: (state, product) => {
         state.product = product
         // console.log(product)
      }
   },
   actions: {
      getProducts: async ({ commit }) => {
         const res = await axios.get('http://localhost:9999/api/webshop/')
         commit('SET_PRODUCTS', res.data)
      },
      getProduct: async ({ commit }, id) => {
         console.log('id: ' + id)
         const res = await axios.get('http://localhost:9999/api/webshop/' + id)
         console.log('res data: ' + res.data)
         commit('SET_PRODUCT', res.data)
         console.log('res img:' + res.data.img)
      }
   }
 })