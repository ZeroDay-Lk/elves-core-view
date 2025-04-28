
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface GlobeProps {
  coordinates?: { lat: number; lng: number };
}

const Globe: React.FC<GlobeProps> = ({ coordinates }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 2;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(100, 100);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create globe
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshPhongMaterial({
      color: '#10B9B0',
      opacity: 0.8,
      transparent: true,
      wireframe: true,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    // Add marker if coordinates are provided
    if (coordinates) {
      const markerGeometry = new THREE.SphereGeometry(0.05, 16, 16);
      const markerMaterial = new THREE.MeshBasicMaterial({ color: '#FF4444' });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      
      // Convert lat/lng to 3D coordinates
      const phi = (90 - coordinates.lat) * (Math.PI / 180);
      const theta = (coordinates.lng + 180) * (Math.PI / 180);
      marker.position.x = Math.sin(phi) * Math.cos(theta);
      marker.position.y = Math.cos(phi);
      marker.position.z = -Math.sin(phi) * Math.sin(theta);
      
      scene.add(marker);
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      if (rendererRef.current) {
        rendererRef.current.dispose();
        containerRef.current?.removeChild(rendererRef.current.domElement);
      }
    };
  }, [coordinates]);

  return (
    <div 
      ref={containerRef} 
      className="inline-block align-middle ml-2"
      style={{ width: '24px', height: '24px' }}
    />
  );
};

export default Globe;
