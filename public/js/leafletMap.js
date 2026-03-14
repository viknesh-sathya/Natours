export const displayMap = (locations) => {
  let map = L.map('map', { zoomControl: true, scrollWheelZoom: false });

  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 10,
    },
  ).addTo(map);

  // Custom marker icon
  const greenIcon = new L.Icon({
    iconUrl: '/img/pin.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 35],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const points = [];
  locations.forEach((loc) => {
    const coords = [loc.coordinates[1], loc.coordinates[0]];
    points.push(coords);

    const marker = L.marker(coords, { icon: greenIcon }).addTo(map);

    marker.bindPopup(
      `<p class="custom-popup">Day ${loc.day}: ${loc.description}</p>`,
      {
        autoClose: false,
      },
    );

    marker.on('click', () => {
      map.setView(coords, 14, { animate: true });
    });

    map.on('click', () => {
      map.fitBounds(bounds, { animate: true });
    });
  });

  const bounds = L.latLngBounds(points).pad(0.1);
  map.fitBounds(bounds);
};
