function Companies() {
  const companies = [
    "/imge7.jpg",
    "/imge8.jpg",
    "/imge9.jpg",
    "/imge10.jpg"
  ];

  return (
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
  );
}

export default Companies;