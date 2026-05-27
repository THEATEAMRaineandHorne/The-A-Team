const soldProperties = [
  {
    label: "Sunnyvale family result",
    title: "18 Nirmal Place, Sunnyvale",
    details: "4 Bed · 2 Bath · 4 Car",
    status: "Sold",
    image: "COPY THE EXISTING IMAGE SRC HERE",
    alt: "18 Nirmal Place Sunnyvale sold property photo",
    summary: "A Sunnyvale family home result showing the importance of usable space, privacy, parking and clear buyer positioning.",
    url: "COPY THE EXISTING RAINE AND HORNE LINK HERE"
  },
  {
    label: "Modern family appeal",
    title: "19B Standage Lane, Kelston",
    details: "4 Bed · 3 Bath · 3 Car",
    status: "Sold",
    image: "COPY THE EXISTING IMAGE SRC HERE",
    alt: "19B Standage Lane Kelston sold property photo",
    summary: "A modern Kelston home result with strong lifestyle, privacy and family functionality appeal.",
    url: "COPY THE EXISTING RAINE AND HORNE LINK HERE"
  }
];

function createSoldCard(property) {
  return `
    <article class="property-card">
      <img class="property-image" src="${property.image}" alt="${property.alt}" loading="lazy" referrerpolicy="no-referrer">
      <div class="property-content">
        <span class="tag">${property.label}</span>
        <h3>${property.title}</h3>
        <div class="meta">${property.details}</div>
        <div class="price-line">${property.status}</div>
        <p>${property.summary}</p>
        <a class="btn btn-primary" href="${property.url}" target="_blank" rel="noopener">View on Raine &amp; Horne</a>
      </div>
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  const soldListings = document.getElementById("sold-listings");

  if (soldListings) {
    soldListings.innerHTML = soldProperties.map(createSoldCard).join("");
  }
});
