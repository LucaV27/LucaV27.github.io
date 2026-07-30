---
title: My Conferences Map (since 2025)
date: 2024-08-25
slug: my-travel-map
description: >
  My Travel Map
categories:
  - Maps
---
# My Travel Map

Below is an interactive map of the conferences I've attended (since 2025).

<div id="map-container" style="position: relative; width: 100%; height: 600px; overflow: hidden;">
   <div id="map" style="height: 100%; width: 100%;"></div>
</div>

<script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" />

<script>
    // Initialize the map and set its view
    var map = L.map('map').setView([20, 0], 2);  // Centered on the world with zoom level 2

    // Add a base layer (OpenStreetMap tiles)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers for places you've visited
    var places = [        
        { lat: 37.7841, lon: -122.4008, name: 'OFC 2025, <br> San Francisco, USA' },
        // { lat: 40.7128, lon: -74.0060, name: 'New York, USA' },        
        { lat: 41.3887, lon: 2.1122, name: 'ICTON 2025, <br> Barcelona, Spain' },
        { lat: 34.0404, lon: -118.2696, name: 'OFC 2026, <br> Los Angeles, USA' },
        { lat: 50.0998, lon: 14.3896, name: 'ICTON 2026, <br> Prague, Czech Republic' }
    ];

    places.forEach(function(place) {
        L.marker([place.lat, place.lon])
            .addTo(map)
            .bindPopup(place.name);
    });
</script>
