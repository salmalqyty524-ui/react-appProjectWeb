function Location() {
  return (
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
  );
}

export default Location;