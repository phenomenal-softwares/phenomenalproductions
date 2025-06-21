"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";

export default function ThreeScene() {
  const mountRef = useRef();

  useEffect(() => {
    let scene, camera, renderer, composer, controls;
    let coreSphere, colorfulGroup;
    const uniforms = { iTime: { value: 0.0 } };

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // === Scene Setup ===
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 8;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.5;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    const directionalLight = new THREE.DirectionalLight(0x00ff00, 0.8); // Green brand light
    directionalLight.position.set(10, 10, 10);
    scene.add(ambientLight, directionalLight);

    // === Core Glowing Sphere ===
    coreSphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 128, 128),
      new THREE.MeshPhongMaterial({
        color: 0xffd700, // gold tone
        shininess: 50,
        specular: 0xffffff,
        transparent: true,
        opacity: 1,
        side: THREE.BackSide,
      })
    );
    scene.add(coreSphere);

    // === Colorful Grouped Particles ===
    colorfulGroup = new THREE.Group();
    scene.add(colorfulGroup);

    const colors = [0xffd700, 0x00ff00, 0xffffff, 0xE5E5E5]; // gold, green, white, black

    for (let i = 0; i < 20; i++) {
      const geometry = new THREE.SphereGeometry(
        Math.random() * 0.5 + 0.3,
        32,
        32
      );
      const material = new THREE.MeshPhongMaterial({
        color: colors[i % colors.length],
        shininess: 100,
        specular: 0xffffff,
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12
      );
      colorfulGroup.add(sphere);
    }

    // === Post Processing Composer ===
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      1,
      0.5,
      0.5
    );
    composer.addPass(bloomPass);

    // === Scanline Effect ===
    const scanLineShader = {
      uniforms: {
        tDiffuse: { value: null },
        time: { value: 0.0 },
        lineHeight: { value: 4.0 },
        lineSpacing: { value: 2.0 },
        opacity: { value: 0.15 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float time;
        uniform float lineHeight;
        uniform float lineSpacing;
        uniform float opacity;
        varying vec2 vUv;

        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          float scanline = step(lineSpacing, mod(gl_FragCoord.y, lineHeight)) * opacity;
          color.rgb += scanline;
          gl_FragColor = color;
        }`,
    };

    const scanLinePass = new ShaderPass(scanLineShader);
    composer.addPass(scanLinePass);

    // === Grain Shader ===
    const grainShader = {
      uniforms: {
        tDiffuse: { value: null },
        time: { value: 0.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float time;
        varying vec2 vUv;

        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          float grain = fract(sin(dot(vUv.xy, vec2(12.9898, 78.233))) * 43758.5453 + time);
          color.rgb += (grain - 0.5) * 0.05;
          gl_FragColor = color;
        }`,
    };

    const grainPass = new ShaderPass(grainShader);
    composer.addPass(grainPass);

    // === Resize Handling ===
    const onResize = () => {
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      composer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", onResize);

    // === Animate ===
    const animate = () => {
      requestAnimationFrame(animate);
      uniforms.iTime.value += 0.02;
      colorfulGroup.rotation.y += 0.005;
      controls.update();
      composer.render();
    };

    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      if (controls) controls.dispose();
      if (renderer) {
        renderer.dispose();
        if (
          renderer.domElement &&
          mountRef.current?.contains(renderer.domElement)
        ) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
      composer?.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
}
