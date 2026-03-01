const Home = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <h2 className="logo">☀ Weather Now</h2>
          <button className="units-button">Units ▼</button>
        </div>
      </header>

      <main className="main">
        {/* Search Section */}
        <section className="search-section">
          <h1 className="main-title">How’s the sky looking today?</h1>

          <div className="search-box">
            <input
              className="search-input"
              type="text"
              placeholder="Search for a place..."
            />
            <button className="search-button">Search</button>
          </div>
        </section>

        {/* GRID WRAPPER */}
        <div className="content-grid">
          {/* LEFT COLUMN */}
          <div className="left-column">
            <section className="current-weather">
              <div className="weather-main">
                <h2 className="city-name">Berlin, Germany</h2>
                <p className="date">Tuesday, Aug 5, 2025</p>
                <h1 className="temperature">20° ☀</h1>
              </div>

              <div className="weather-details">
                <div className="detail-card">
                  <p className="detail-title">Feels Like</p>
                  <h3 className="detail-value">18°</h3>
                </div>

                <div className="detail-card">
                  <p className="detail-title">Humidity</p>
                  <h3 className="detail-value">46%</h3>
                </div>

                <div className="detail-card">
                  <p className="detail-title">Wind</p>
                  <h3 className="detail-value">14 km/h</h3>
                </div>

                <div className="detail-card">
                  <p className="detail-title">Precipitation</p>
                  <h3 className="detail-value">0 mm</h3>
                </div>
              </div>
            </section>

            <section className="daily-forecast">
              <h3 className="section-title">Daily forecast</h3>

              <div className="daily-cards">
                {[
                  ["Tue", "🌧", "20° / 14°"],
                  ["Wed", "🌧", "21° / 15°"],
                  ["Thu", "☀", "24° / 14°"],
                  ["Fri", "⛅", "25° / 13°"],
                  ["Sat", "⛈", "21° / 15°"],
                  ["Sun", "🌧", "25° / 16°"],
                  ["Mon", "🌫", "24° / 15°"],
                ].map(([day, icon, temp]) => (
                  <div key={day} className="daily-card">
                    <p className="day">{day}</p>
                    <p className="weather-icon">{icon}</p>
                    <p className="day-temp">{temp}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <section className="hourly-forecast">
            <h3 className="section-title">Hourly forecast (Tuesday)</h3>

            <div className="hourly-list">
              {[
                ["3 PM", "☁ 20°"],
                ["4 PM", "⛅ 20°"],
                ["5 PM", "☀ 20°"],
                ["6 PM", "☁ 19°"],
                ["7 PM", "🌧 18°"],
                ["8 PM", "🌫 18°"],
                ["9 PM", "🌧 17°"],
                ["10 PM", "☁ 17°"],
              ].map(([time, temp]) => (
                <div key={time} className="hour-item">
                  <p className="hour-time">{time}</p>
                  <p className="hour-temp">{temp}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
