const currentProperties = [
  {
    label: "Serious value in a special setting",
    title: "3/17 Cape Horn Road, Mount Roskill",
    details: "3 Bed · 1 Bath · 3 Car",
    status: "For Sale · Negotiation",
    image: "https://d3g1fm0n641hm7.cloudfront.net/properties/6650/205639767__1781427498-198540-1.png.jpg",
    alt: "3/17 Cape Horn Road Mount Roskill property photo",
    summary: "A private, bush-surrounded pole home set well back from the road, with light-filled open-plan living, a deck looking across Lynfield, three double bedrooms and excellent under-house storage — close to walkways, parks and good schools.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/3-17-cape-horn-road-mount-roskill-1041-auckland"
  },
  {
    label: "Dual property opportunity",
    title: "89 Taylor Street, Blockhouse Bay",
    details: "4 Bed · 2 Bath · 2 Car",
    status: "For Sale · Negotiation",
    image: "https://d3g1fm0n641hm7.cloudfront.net/properties/6650/192563317__1773809490-192563317__1773727711-108341-89-Taylor-Street-BlockhouseBay-Auckland-0600-7.jpg",
    alt: "89 Taylor Street Blockhouse Bay property photo",
    summary: "A front-positioned Blockhouse Bay property offered with the option of a wider combined Taylor Street opportunity.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/89-taylor-street-blockhouse-bay-1041-auckland"
  },
  {
    label: "Sold together with 89 Taylor",
    title: "89A Taylor Street, Blockhouse Bay",
    details: "3 Bed · 1 Bath · 4 Car",
    status: "For Sale · $1,799,000",
    image: "https://d3g1fm0n641hm7.cloudfront.net/properties/6650/197283150__1776463795-197283150__1776463649-11975-89-Taylor-Street-BlockhouseBay-Auckland-0600-6.jpg",
    alt: "89A Taylor Street Blockhouse Bay property photo",
    summary: "A rear property offered with 89 Taylor Street, appealing to buyers who can see scale, land value and future potential.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/89a-taylor-street-blockhouse-bay-0600-auckland"
  },
  {
    label: "Low-maintenance 55+ living",
    title: "17/127 Boundary Road, Blockhouse Bay",
    details: "2 Bed · 1 Bath · 2 Car",
    status: "For Sale · Enquiries Over $760,000",
    image: "https://d3g1fm0n641hm7.cloudfront.net/properties/6650/190031715__1772574768-190031715__1772573635-190031715__1772569746-15562-17127boundaryroadblockhousebay5.jpg",
    alt: "17/127 Boundary Road Blockhouse Bay property photo",
    summary: "A peaceful, low-maintenance Blockhouse Bay home in Royalle Sunset Villas, ideal for downsizers wanting comfort, security and easier living.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/17-127-boundary-road-blockhouse-bay-1041-auckland"
  },
  {
    label: "Land and development appeal",
    title: "32 Bentleigh Avenue, New Windsor",
    details: "4 Bed · 1 Bath · 2 Car",
    status: "For Sale · Negotiation",
    image: "https://d3g1fm0n641hm7.cloudfront.net/properties/6650/145237770__1745726567-145237770__1745726476-145237770__1745726180-49412-32bentleighstreetnewwindsor2.jpg",
    alt: "32 Bentleigh Avenue New Windsor property photo",
    summary: "A land-rich New Windsor opportunity with renovation, development and long-term holding appeal.",
    url: "https://www.raineandhorne.co.nz/blockhousebay/properties/32-bentleigh-avenue-new-windsor-0600-auckland"
  }
];

function createPropertyCard(property) {
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
  const currentListings = document.getElementById("current-listings");

  if (currentListings) {
    currentListings.innerHTML = currentProperties.map(createPropertyCard).join("");
  }
});
