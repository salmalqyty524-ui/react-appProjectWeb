function Products() {
  const products = [
    {
      image: "/imge2.jpg",
      name: "ضيافة حلويات متنوعة",
      description: "حلويات مميزة بطعم لذيذ وجودة عالية."
    },
    {
      image: "/imge3.jpg",
      name: "معمول مشكل",
      description: "اختيار رائع لمحبي الحلويات."
    },
    {
      image: "/imge4.jpg",
      name: "بوكس ضيافة فخمة",
      description: "مذاق مميز مناسب لجميع المناسبات."
    },
    {
      image: "/imge5.jpg",
      name: "جاتوه وتورتات",
      description: "جودة وطعم يجعلان كل مناسبة أجمل."
    },
    {
      image: "/imge6.jpg",
      name: "معمول وبسكويت شاي",
      description: "حلويات مختارة بعناية وبمذاق رائع."
    },
    {
      image: "/imge11.jpg",
      name: "بقلاوة مشكلة",
      description: "جربنا مرة تزورنا كل مرة."
    }
  ];

  return (
    <section id="products" className="products section">
      <div className="section-title">
        <span>اختياراتنا</span>
        <h2>منتجاتنا</h2>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>

            <div className="product-image-box">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;