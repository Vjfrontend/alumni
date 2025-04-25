"use client"
import React, { useEffect, useRef } from 'react';

// Extend the Window interface to include the google property
declare global {
  interface Window {
    google: any;
  }
}

interface GoogleMapProps {
  latitude: number;
  longitude: number;
  zoom: number;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ latitude, longitude, zoom }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadMap = () => {
      const map = new window.google.maps.Map(mapRef.current!, {
        center: { lat: latitude, lng: longitude },
        zoom: zoom,
      });

      new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
      });
    };

    if (window.google) {
      loadMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDyFZ1gGf3YcRLN0No2dQFcwJfNDskZeHU`;
      script.onload = loadMap;
      document.head.appendChild(script);
    }
  }, [latitude, longitude, zoom]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default GoogleMap;