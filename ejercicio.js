class ProductManager {
  constructor() {
      this.products = [];
  }
  
  addProduct = (title, description, price, thumbnail, code, stock) => {
  const productIndex = this.products.findIndex((product) => product.code === code)

      if (!title || !description || !price || !thumbnail || !code || !stock) {
          console.log('Error: Todos los campos son obligatorios');
          return;
      }
      if(productIndex === -1) {
          const product = {
              id: this.products.length +1,
              title,
              description,
              price,
              thumbnail,
              code,
              stock,
          };         
          this.products.push(product);
          console.log(`Producto con codigo: ${code} agregado con éxito`);
      } else {
          console.log(`Error: El producto con codigo: ${code} ya existe`);
      }
  };

  getProducts= () => {
      console.log(this.products);
      return this.products;
  };

  getProductsById = (productId) => {
      const productIdFound = this.products.findIndex((prod) => prod.id === productId);
      if (productIdFound === -1) {
          console.log(`Error: El producto con Id: ${productId} no fue encontrado`);
      } else {
          console.log(`Información sobre el producto con ID ${productId}:`);
          console.log(this.products[productIdFound]);
      }
  };
}


let products = new ProductManager();
products.getProducts();

products.addProduct('title');
// products.addProduct('title', 'description', 200, 'Sin imagen', 'code123');
// products.addProduct('description', 200, 'Sin imagen', 'code123', 25);
// products.addProduct(200, 'Sin imagen', 'abc123', 25);
// products.addProduct('title', 'description', 200, 'Sin imagen', 'code123', 25);
// products.addProduct('title', 'description', 200, 'Sin imagen', 'code123', 25);
// products.addProduct('title', 'description', 9552, 'Sin imagen', 'code123', 30);
products.addProduct('title', 'description', 3515, 'Sin imagen', 'code123', 35);

products.getProducts();

products.addProduct('producto prueba', 'este es un producto prueba', 200, 'Sin imagen', 'def456', 30 );

products.getProducts();

products.getProductsById(8);
products.getProductsById(1);
products.getProductsById(3);
products.getProductsById(17);