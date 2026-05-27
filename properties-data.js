const currentProperties = [
  {
    label: "Dual property opportunity",
    title: "89 Taylor Street, Blockhouse Bay",
    details: "4 Bed · 2 Bath · 2 Car",
    status: "For Sale · Negotiation",
    image: "images/89-taylor-street-blockhouse-bay.webp",
    alt: "89 Taylor Street Blockhouse Bay property photo",
    summary: "A front-positioned Blockhouse Bay property offered with the option of a wider combined Taylor Street opportunity.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/89-taylor-street-blockhouse-bay-0600-auckland"
  },
  {
    label: "Sold together with 89 Taylor",
    title: "89A Taylor Street, Blockhouse Bay",
    details: "3 Bed · 1 Bath · 4 Car",
    status: "For Sale · $1,799,000",
    image: "images/89a-taylor-street-blockhouse-bay.webp",
    alt: "89A Taylor Street Blockhouse Bay property photo",
    summary: "A rear property offered with 89 Taylor Street, appealing to buyers who can see scale, land value and future potential.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/89a-taylor-street-blockhouse-bay-0600-auckland"
  },
  {
    label: "Low-maintenance 55+ living",
    title: "17/127 Boundary Road, Blockhouse Bay",
    details: "2 Bed · 1 Bath · 2 Car",
    status: "For Sale · Enquiries Over $760,000",
    image: "images/17-127-boundary-road-blockhouse-bay.webp",
    alt: "17/127 Boundary Road Blockhouse Bay property photo",
    summary: "A peaceful, low-maintenance Blockhouse Bay home in Royalle Sunset Villas, ideal for downsizers wanting comfort, security and easier living.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/17-127-boundary-road-blockhouse-bay-1041-auckland"
  },
  {
    label: "Land and development appeal",
    title: "32 Bentleigh Avenue, New Windsor",
    details: "4 Bed · 1 Bath · 2 Car",
    status: "For Sale · Negotiation",
    image: "images/32-bentleigh-avenue-new-windsor.webp",
    alt: "32 Bentleigh Avenue New Windsor property photo",
    summary: "A land-rich New Windsor opportunity with renovation, development and long-term holding appeal.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/32-bentleigh-avenue-new-windsor-0600-auckland"
  }
];

function createPropertyCard(property) {
  return `
    <article class="property-card">
      <a href="${property.url}" target="_blank" rel="noopener">
        <img src="${property.image}" alt="${property.alt}" loading="lazy">
      </a>

      <div class="property-card-content">
        <p class="property-label">${property.label}</p>
        <h3>${property.title}</h3>
        <p class="property-details">${property.details}</p>
        <p class="property-status">${property.status}</p>
        <p>${property.summary}</p>
        <a class="property-button" href="${property.url}" target="_blank" rel="noopener">
          View on Raine & Horne
        </a>
      </div>
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  const currentListings = document.getElementById("current-listings");

  if (currentListings) {
    currentListings.innerHTML = currentProperties.map(createPropertyCard).join("");
  }
});
