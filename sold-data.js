const soldProperties = [
  {
    label: "Sunnyvale family result",
    title: "18 Nirmal Place, Sunnyvale",
    details: "4 Bed · 2 Bath · 4 Car",
    status: "Sold",
    image: "https://d3g1fm0n641hm7.cloudfront.net/properties/6650/194477879__1774819069-22106-SOLD-18NirmalPlaceSunnyvale.jpg",
    alt: "18 Nirmal Place Sunnyvale sold property photo",
    summary: "A Sunnyvale family home result showing the importance of usable space, privacy, parking and clear buyer positioning.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/18-nirmal-place-sunnyvale-0612-auckland"
  },
  {
    label: "Modern family appeal",
    title: "19B Standage Lane, Kelston",
    details: "4 Bed · 3.5 Bath · 3 Car",
    status: "Sold",
    image: "https://d3g1fm0n641hm7.cloudfront.net/properties/6650/185910406__1770532460-185910406__1770415632-12318-19B-standage-lane-kelston10.jpg",
    alt: "19B Standage Lane Kelston sold property photo",
    summary: "A modern Kelston home result with strong lifestyle, privacy and family functionality appeal.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/19b-standage-lane-kelston-0602-auckland"
  },
  {
    label: "Downsizer result",
    title: "15/127 Boundary Road, Blockhouse Bay",
    details: "2 Bed",
    status: "Sold",
    image: "https://d3g1fm0n641hm7.cloudfront.net/properties/6650/182287238__1768271317-68166-SOLD-15-127BoundaryRoad.jpg",
    alt: "15/127 Boundary Road Blockhouse Bay sold property photo",
    summary: "A successful Blockhouse Bay downsizer result in Royalle Sunset Villas, highlighting security, comfort and low-maintenance living.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/15-127-boundary-road-blockhouse-bay-1041-auckland"
  },
  {
    label: "Lynfield family result",
    title: "25 Marco Polo Avenue, Lynfield",
    details: "4 Bed · 2 Bath · 6 Car",
    status: "Sold",
    image: "https://d3g1fm0n641hm7.cloudfront.net/properties/6650/178034209__1764733654-81558-SOLD-25MarcoPoloAvenue.jpg",
    alt: "25 Marco Polo Avenue Lynfield sold property photo",
    summary: "A strong Lynfield family-home result with space, privacy, parking and a sought-after local address.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/25-marco-polo-avenue-lynfield-1041-auckland"
  },
  {
    label: "Glendene result",
    title: "1/7 Hillary Heights Avenue, Glendene",
    details: "3 Bed · 1 Bath · 2 Car",
    status: "Sold",
    image: "https://d3g1fm0n641hm7.cloudfront.net/properties/6650/176273918__1763935240-14313-QuietListing.jpg",
    alt: "1/7 Hillary Heights Avenue Glendene sold property photo",
    summary: "A Glendene result showing how practical layout, location and smart buyer positioning can create strong local interest.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/1-7-hillary-heights-avenue-glendene-0602-auckland"
  },
  {
    label: "55+ living result",
    title: "29/127 Boundary Road, Blockhouse Bay",
    details: "2 Bed · 1 Bath · 1 Car",
    status: "Sold",
    image: "https://d3g1fm0n641hm7.cloudfront.net/properties/6650/173087708__1762295469-31470-SOLD-29-127BoundaryRoad.jpg",
    alt: "29/127 Boundary Road Blockhouse Bay sold property photo",
    summary: "Another Royalle Sunset Villas result, connecting with buyers looking for easier living, security and a peaceful Blockhouse Bay setting.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/29-127-boundary-road-blockhouse-bay-1041-auckland"
  },
  {
    label: "Glen Eden space result",
    title: "2/90 Rosier Road, Glen Eden",
    details: "4 Bed · 2 Bath · 5 Car",
    status: "Sold",
    image: "https://d3g1fm0n641hm7.cloudfront.net/properties/6650/173091019__1762295827-32335-SOLD-2-90RosierRoad.jpg",
    alt: "2/90 Rosier Road Glen Eden sold property photo",
    summary: "A Glen Eden result with generous space, flexibility and opportunity appeal for families and practical buyers.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/2-90-rosier-road-glen-eden-0602-auckland"
  },
  {
    label: "Sunnyvale first-home result",
    title: "1/55 Sungrove Rise, Sunnyvale",
    details: "3 Bed · 1 Bath · 2 Car",
    status: "Sold",
    image: "https://d3g1fm0n641hm7.cloudfront.net/properties/6650/155828016__1752722499-61929-SOLD-1-55SungroveRiseSunnyvale.jpg",
    alt: "1/55 Sungrove Rise Sunnyvale sold property photo",
    summary: "A Sunnyvale result with strong first-home buyer appeal, offering space, value and a convenient local position.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/1-55-sungrove-rise-sunnyvale-0612-auckland"
  },
  {
    label: "City-fringe result",
    title: "3/40 Arabi Street, Sandringham",
    details: "2 Bed · 1 Bath · 1 Car",
    status: "Sold",
    image: "https://d3g1fm0n641hm7.cloudfront.net/properties/6650/140506955__1742503853-140506955__1742503122-100115-340arabistreetsandringham3.jpg",
    alt: "3/40 Arabi Street Sandringham sold property photo",
    summary: "A Sandringham city-fringe result with low-maintenance living, location appeal and strong first-home or lifestyle buyer interest.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/3-40-arabi-street-sandringham-1041-auckland"
  }
];

function createSoldCard(property) {
  return `
    <article class="property-card">
      <img class="property-image" src="${property.image}" alt="${property.alt}" loading="lazy" referrerpolicy="no-referrer">
      <div class="property-content">
        <span class="tag sold-tag">${property.label}</span>
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
