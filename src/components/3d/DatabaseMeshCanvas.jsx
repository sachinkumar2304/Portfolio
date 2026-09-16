import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function DatabaseMeshCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 85;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D database nodes and connections
    const dbNetworkGroup = new THREE.Group();
    scene.add(dbNetworkGroup);

    // Database Tables (Nodes)
    const nodeCount = 38;
    const nodes = [];
    const positions = [];

    // Geometries & Materials
    const tableGeometry = new THREE.BoxGeometry(2.4, 1.8, 1.2);
    const tableMaterial = new THREE.MeshBasicMaterial({
      color: 0x2E3542,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });

    const activeNodeMaterial = new THREE.MeshBasicMaterial({
      color: 0xE8395F,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });

    const amberNodeMaterial = new THREE.MeshBasicMaterial({
      color: 0xF87593,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });

    // Create 3D nodes (simulating database tables)
    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 110;
      const y = (Math.random() - 0.5) * 80;
      const z = (Math.random() - 0.5) * 45;

      const mat = i % 5 === 0 ? activeNodeMaterial : i % 8 === 0 ? amberNodeMaterial : tableMaterial;
      const mesh = new THREE.Mesh(tableGeometry, mat);
      mesh.position.set(x, y, z);
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      
      // Floating velocity
      mesh.userData = {
        vx: (Math.random() - 0.5) * 0.04,
        vy: (Math.random() - 0.5) * 0.04,
        vz: (Math.random() - 0.5) * 0.04,
        rx: (Math.random() - 0.5) * 0.008,
        ry: (Math.random() - 0.5) * 0.008,
      };

      dbNetworkGroup.add(mesh);
      nodes.push(mesh);
      positions.push(x, y, z);
    }

    // Connect nodes with foreign-key relationship lines (Sakura Crimson)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xE8395F,
      transparent: true,
      opacity: 0.12,
    });

    let linesMesh = null;
    const updateLines = () => {
      if (linesMesh) {
        dbNetworkGroup.remove(linesMesh);
        linesMesh.geometry.dispose();
      }

      const linePoints = [];
      const maxDistance = 32;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = nodes[i].position.distanceTo(nodes[j].position);
          if (dist < maxDistance) {
            linePoints.push(nodes[i].position.x, nodes[i].position.y, nodes[i].position.z);
            linePoints.push(nodes[j].position.x, nodes[j].position.y, nodes[j].position.z);
          }
        }
      }

      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePoints, 3)
      );
      linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      dbNetworkGroup.add(linesMesh);
    };

    updateLines();

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0006;
      mouseY = (event.clientY - windowHalfY) * 0.0006;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let tick = 0;

    const animate = () => {
      tick++;
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      dbNetworkGroup.rotation.y = targetX * 1.5 + tick * 0.001;
      dbNetworkGroup.rotation.x = targetY * 1.5;

      // Animate each node float
      nodes.forEach((node) => {
        node.position.x += node.userData.vx;
        node.position.y += node.userData.vy;
        node.position.z += node.userData.vz;
        node.rotation.x += node.userData.rx;
        node.rotation.y += node.userData.ry;

        // Soft boundary bounce
        if (Math.abs(node.position.x) > 55) node.userData.vx *= -1;
        if (Math.abs(node.position.y) > 40) node.userData.vy *= -1;
        if (Math.abs(node.position.z) > 25) node.userData.vz *= -1;
      });

      // Update lines every few frames for performance
      if (tick % 3 === 0) {
        updateLines();
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
