const RatingsReviews = () => {
  const ratingDistribution = [
    { stars: 5, percent: 59 },
    { stars: 4, percent: 16 },
    { stars: 3, percent: 8 },
    { stars: 2, percent: 4 },
    { stars: 1, percent: 13 },
  ];

  const satisfactionMetrics = [
    { label: "Response", percent: 78 },
    { label: "Quality", percent: 92 },
    { label: "Delivery", percent: 81 },
  ];

  const reviews = [
    {
      name: "TruNurture",
      location: "Batlagundu, Tamil Nadu",
      date: "15-March-25",
      rating: 4,
      product: "Casting Powder",
      tags: ["Response"],
    },
    {
      name: "Pratik",
      location: "Patiala, Punjab",
      date: "02-June-25",
      rating: 5,
      product: "Casting Powder",
      tags: [],
    },
    {
      name: "SOURABH KUMAR",
      location: "Patna, Bihar",
      date: "03-April-25",
      rating: 5,
      product: "Flexible Shaft Motor",
      tags: [],
    },
  ];

  const renderStars = (count) => (
    [...Array(5)].map((_, i) => (
      <span key={i} style={{ color: i < count ? 'var(--color-accent)' : 'var(--color-gray)' }}>
        ★
      </span>
    ))
  );

  return (
    <div className="px-6 py-12" style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-text)' }}>
      <h2 className="text-2xl font-bold text-center mb-8 underline decoration-[var(--color-accent)]">
        Ratings & Reviews
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Average Rating */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="text-4xl font-bold">{4.5}<span className="text-xl">/5</span></div>
          <div className="text-2xl mb-2">{renderStars(4)}</div>
          <p>Reviewed by 98 Users</p>
        </div>

        {/* Rating Distribution */}
        <div>
          {ratingDistribution.map((r) => (
            <div key={r.stars} className="flex items-center gap-2 mb-2">
              <span className="w-6">{r.stars}★</span>
              <div className="flex-1 bg-[var(--color-gray)] h-2 rounded-full">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${r.percent}%`,
                    backgroundColor: 'var(--color-primary)',
                  }}
                />
              </div>
              <span className="w-10 text-right text-sm">{r.percent}%</span>
            </div>
          ))}
        </div>

        {/* Satisfaction */}
        <div>
          <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
            👍 User Satisfaction
          </h4>
          {satisfactionMetrics.map((s) => (
            <div key={s.label} className="flex items-center gap-2 mb-3">
              <span className="w-20 text-sm">{s.label}</span>
              <div className="flex-1 bg-[var(--color-gray)] h-2 rounded-full">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${s.percent}%`,
                    backgroundColor: 'var(--color-primary)',
                  }}
                />
              </div>
              <span className="w-10 text-right text-sm">{s.percent}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">Most Relevant Reviews</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="border rounded-lg p-4 shadow-sm bg-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[var(--color-gray)] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
                  {review.name[0]}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-2">{review.date}</p>
              <p className="text-sm mb-1">
                <strong>Product Name:</strong> {review.product}
              </p>
              {review.tags.length > 0 && (
                <p className="text-sm text-green-600">Response 👍</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-2 border rounded-md transition"
            style={{
              color: 'var(--color-primary)',
              borderColor: 'var(--color-primary)',
            }}
            onMouseOver={(e) => {
              (e.currentTarget.style.backgroundColor = 'var(--color-primary)');
              (e.currentTarget.style.color = 'var(--color-white)');
            }}
            onMouseOut={(e) => {
              (e.currentTarget.style.backgroundColor = 'transparent');
              (e.currentTarget.style.color = 'var(--color-primary)');
            }}
          >
            View More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingsReviews;
