

function Boop() {
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

  const companies = [
    "/imge7.jpg",
    "/imge8.jpg",
    "/imge9.jpg",
    "/imge10.jpg"
  ];

  return (
    <div className="app">

      
      <nav className="navbar">
        <div className="logo">الأغبري أحلى من الحلوى</div>

        <div className="nav-links">
          <a href="#home">الرئيسية</a>
          <a href="#about">من نحن</a>
          <a href="#products">منتجاتنا</a>
          <a href="#companies">شركاؤنا</a>
          <a href="#location">موقعنا</a>
          <a href="#contact">تواصل معنا</a>
        </div>
      </nav>

      
      <section id="home" className="hero">
        <img
          src="/imge1.jpg"
          alt="الأغبري أحلى من الحلوى"
          className="hero-image"
        />

        <div className="hero-overlay">
          <p>مرحبًا بكم في</p>
          <br />

          <h1>الأغبري أحلى من الحلوى</h1>
          <br />

          <span>طعم يجمعنا... وحلاوة لا تُنسى</span>

          <a href="#products" className="hero-button">
            اكتشف منتجاتنا
          </a>
        </div>
      </section>

      
      <section id="about" className="about section">
        <div className="section-title">
          <span>تعرف علينا</span>
          <h2>من نحن</h2>
        </div>

        <p>
          في <strong>الأغبري أحلى من الحلوى</strong> نهتم بتقديم
          منتجات حلويات ذات جودة عالية، بطعم مميز يناسب مختلف
          المناسبات والأذواق.
        </p>
      </section>

     
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

      
      <section id="companies" className="companies section">
        <div className="section-title">
          <span>شركاؤنا</span>

          <h2>
            الشركات والعلامات التجارية المتعاملة معنا
          </h2>
        </div>

        <p className="companies-text">
          نفخر بتعاوننا مع مجموعة من الشركات والعلامات التجارية.
        </p>

        <div className="companies-grid">
          {companies.map((image, index) => (
            <div className="company-card" key={index}>

              <img
                src={image}
                alt={`الشركة المتعاملة معنا ${index + 1}`}
              />

            </div>
          ))}
        </div>
      </section>

      
      <section id="location" className="location section">

        <div className="section-title">
          <span>زورونا</span>
          <h2>موقعنا</h2>
        </div>

        <div className="location-content">

          <div className="location-info">

            <h3>الأغبري للحلويات</h3>

            <p>
              📍 متجر حلويات
            </p>

            <p>
              عدن، الجمهورية اليمنية 🇾🇪
            </p>

            <a
              href="https://maps.app.goo.gl/2Hqvou8CusbEkHc86"
              target="_blank"
              rel="noopener noreferrer"
              className="map-button"
            >
              فتح موقعنا في Google Maps
            </a>

          </div>

          <div className="map-box">

            <iframe
              title="موقع الأغبري للحلويات في عدن"
              src="https://www.google.com/maps?q=الأغبري+للحلويات+عدن+اليمن&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>
      </section>

      
      <section id="contact" className="contact section">

        <div className="section-title">
          <span>يسعدنا تواصلكم</span>
          <h2>تواصل معنا</h2>
        </div>

        <p>
          للاستفسار أو طلب منتجاتنا، يمكنكم التواصل معنا عبر واتساب.
        </p>

        <a
          href="https://wa.me/967736743542"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          تواصل معنا عبر واتساب
        </a>

      </section>

      
      <footer>

        <h3>الأغبري أحلى من الحلوى</h3>

        <p>
          جودة في المنتج... وحلاوة في كل لحظة ❤️
        </p>

        
        <div className="developer-info">

          <p>
            عمل المهندس محمد صالح النجدي
          </p>

          <p>
            للتواصل: +967736743542
          </p>

        </div>

        <p className="copyright">
          © 2026 الأغبري أحلى من الحلوى - جميع الحقوق محفوظة
        </p>

      </footer>

    </div>
  );
}

export default Boop;