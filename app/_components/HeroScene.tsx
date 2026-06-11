"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const NODE_COUNT = 360;
const DUST_COUNT = 240;
const LINK_DISTANCE = 1.35;
const MAX_LINKS = 900;

function buildField() {
  const nodes = new Float32Array(NODE_COUNT * 3);
  for (let i = 0; i < NODE_COUNT; i++) {
    // Flattened ellipsoid cloud — wide, shallow, slightly deep
    const r = Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    nodes[i * 3] = r * Math.sin(phi) * Math.cos(theta) * 6.5;
    nodes[i * 3 + 1] = r * Math.cos(phi) * 2.4;
    nodes[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta) * 3.2;
  }

  // Connect close neighbours into a neural-web of line segments
  const links: number[] = [];
  for (let i = 0; i < NODE_COUNT && links.length / 6 < MAX_LINKS; i++) {
    for (let j = i + 1; j < NODE_COUNT; j++) {
      const dx = nodes[i * 3] - nodes[j * 3];
      const dy = nodes[i * 3 + 1] - nodes[j * 3 + 1];
      const dz = nodes[i * 3 + 2] - nodes[j * 3 + 2];
      if (dx * dx + dy * dy + dz * dz < LINK_DISTANCE * LINK_DISTANCE) {
        links.push(
          nodes[i * 3], nodes[i * 3 + 1], nodes[i * 3 + 2],
          nodes[j * 3], nodes[j * 3 + 1], nodes[j * 3 + 2],
        );
        if (links.length / 6 >= MAX_LINKS) break;
      }
    }
  }

  const dust = new Float32Array(DUST_COUNT * 3);
  for (let i = 0; i < DUST_COUNT; i++) {
    dust[i * 3] = (Math.random() - 0.5) * 18;
    dust[i * 3 + 1] = (Math.random() - 0.5) * 10;
    dust[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
  }

  return { nodes, links: new Float32Array(links), dust };
}

function NeuralField({ animate }: { animate: boolean }) {
  const group = useRef<THREE.Group>(null);
  const dustRef = useRef<THREE.Points>(null);
  const nodeMat = useRef<THREE.PointsMaterial>(null);
  const { nodes, links, dust } = useMemo(() => buildField(), []);

  useFrame((state, delta) => {
    if (!animate || !group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y += delta * 0.045;
    // Pointer parallax — ease the whole web toward the cursor
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x, state.pointer.y * 0.18, 0.04);
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z, state.pointer.x * 0.08, 0.04);
    group.current.position.y = Math.sin(t * 0.4) * 0.18;
    if (dustRef.current) dustRef.current.rotation.y -= delta * 0.012;
    if (nodeMat.current) nodeMat.current.size = 0.055 + Math.sin(t * 1.4) * 0.012;
  });

  return (
    <>
      <group ref={group} rotation={[0.32, 0, 0]}>
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[nodes, 3]} />
          </bufferGeometry>
          <pointsMaterial
            ref={nodeMat}
            color="#D4AF37"
            size={0.055}
            sizeAttenuation
            transparent
            opacity={0.9}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </points>
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[links, 3]} />
          </bufferGeometry>
          <lineBasicMaterial
            color="#B8921A"
            transparent
            opacity={0.14}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </lineSegments>
      </group>
      <points ref={dustRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dust, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#F0D060"
          size={0.025}
          sizeAttenuation
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  );
}

export default function HeroScene() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  // ssr:false — window exists on first render, so the media query can seed state
  const [reducedMotion] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animate = inView && !reducedMotion;

  return (
    <div ref={wrapper} aria-hidden className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        dpr={[1, 1.75]}
        frameloop={animate ? "always" : "demand"}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        eventSource={typeof document !== "undefined" ? document.body : undefined}
        style={{ pointerEvents: "none" }}
      >
        <NeuralField animate={animate} />
      </Canvas>
      {/* Fade the web into the page edges so it reads as atmosphere, not a box */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 75% 65% at 50% 45%, transparent 40%, var(--background) 100%)" }} />
    </div>
  );
}
