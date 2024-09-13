export const Constant = {
    API_END_POINT: "https://freeapi.miniprojectideas.com/api/BigBasket/",
    METHODS: {
        GET_ALL_PRODUCT: 'GetAllProducts',
        GET_ALL_PRODUCT_BY_CATEGORY : '/GetAllProductsByCategoryId?id=',
        GET_ALL_CATEGORY: 'GetAllCategory',
        CREATE_PRODUCT: 'CreateProduct',
        UPDATE_PRODUCT : 'UpdateProduct',
        ADD_TO_CART : 'ADDTOCART',
       GET_CART_PRODUCTS_BY_CUSTOMER_ID : 'GetCartProductsByCustomerId?id=',
       REMOVE_CART: '/DeleteProductFromCartById?id=',
       LOGIN: 'Login',
       CUSTOMER_REGISTER : 'RegisterCustomer'
    }
};
