"use client";

import { useEffect, useRef, useCallback } from "react";
import styles from "./HyperScrollScene.module.css";

const TEXTS = [
  "PAULSEN",
  "VELOCITY",
  "BRUTAL",
  "SYSTEM",
  "FUTURE",
  "DESIGN",
  "PIXEL",
  "HYPER",
  "NEON",
  "VOID",
];

const CONFIG = {
  itemCount: 20,
  starCount: 150,
  zGap: 800,
  camSpeed: 2.5,
};

const LOOP_SIZE = CONFIG.itemCount * CONFIG.zGap;

interface SceneItem {
  el: HTMLDivElement;
  type: "card" | "text" | "star";
  x: number;
  y: number;
  rot: number;
  baseZ: number;
}

export function HyperScrollScene() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<SceneItem[]>([]);
  const animFrameRef = useRef<number>(0);

  // Scroll state
  const scrollPosRef = useRef(0);
  const prevScrollRef = useRef(0);
  const velocityRef = useRef(0);

  const mouseRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(0);
  const fpsRef = useRef<HTMLSpanElement>(null);
  const velRef = useRef<HTMLSpanElement>(null);
  const coordRef = useRef<HTMLSpanElement>(null);

  const buildScene = useCallback(() => {
    const world = worldRef.current;
    const sticky = stickyRef.current;
    if (!world || !sticky) return;

    const items: SceneItem[] = [];
    const containerWidth = sticky.clientWidth;
    const containerHeight = sticky.clientHeight;

    for (let i = 0; i < CONFIG.itemCount; i++) {
      const el = document.createElement("div");
      el.className = styles.item;

      const isHeading = i % 4 === 0;

      if (isHeading) {
        const txt = document.createElement("div");
        txt.className = styles.bigText;
        txt.innerText = TEXTS[i % TEXTS.length];
        el.appendChild(txt);
        items.push({
          el,
          type: "text",
          x: 0,
          y: 0,
          rot: 0,
          baseZ: -i * CONFIG.zGap,
        });
      } else {
        const card = document.createElement("div");
        card.className = styles.card;
        const randId = Math.floor(Math.random() * 9999);

        const header = document.createElement("div");
        header.className = styles.cardHeader;
        header.innerHTML = `<span class="${styles.cardId}">ID-${randId}</span><div class="${styles.accentDot}"></div>`;

        const title = document.createElement("h2");
        title.className = styles.cardTitle;
        title.textContent = TEXTS[i % TEXTS.length];

        const footer = document.createElement("div");
        footer.className = styles.cardFooter;
        footer.innerHTML = `<span>GRID: ${Math.floor(Math.random() * 10)}x${Math.floor(Math.random() * 10)}</span><span>DATA: ${(Math.random() * 100).toFixed(1)}MB</span>`;

        const idx = document.createElement("div");
        idx.className = styles.cardIndex;
        idx.textContent = `0${i}`;

        card.appendChild(header);
        card.appendChild(title);
        card.appendChild(footer);
        card.appendChild(idx);
        el.appendChild(card);

        const angle = (i / CONFIG.itemCount) * Math.PI * 6;
        const x = Math.cos(angle) * (containerWidth * 0.3);
        const y = Math.sin(angle) * (containerHeight * 0.3);
        const rot = (Math.random() - 0.5) * 30;

        items.push({
          el,
          type: "card",
          x,
          y,
          rot,
          baseZ: -i * CONFIG.zGap,
        });
      }

      world.appendChild(el);
    }

    // Stars
    const starCount =
      typeof window !== "undefined" && window.innerWidth < 768
        ? 80
        : CONFIG.starCount;

    for (let i = 0; i < starCount; i++) {
      const el = document.createElement("div");
      el.className = styles.star;
      world.appendChild(el);
      items.push({
        el,
        type: "star",
        x: (Math.random() - 0.5) * 3000,
        y: (Math.random() - 0.5) * 3000,
        rot: 0,
        baseZ: -Math.random() * LOOP_SIZE,
      });
    }

    itemsRef.current = items;
  }, []);

  const animate = useCallback(function animateFrame(time: number) {
    const delta = time - lastTimeRef.current;
    lastTimeRef.current = time;

    // FPS update (throttled)
    if (fpsRef.current && Math.floor(time) % 10 < 2) {
      fpsRef.current.textContent = String(Math.round(1000 / delta));
    }

    // Derive velocity from scroll delta
    const scrollDelta = scrollPosRef.current - prevScrollRef.current;
    prevScrollRef.current = scrollPosRef.current;
    // Smooth velocity
    velocityRef.current += (scrollDelta - velocityRef.current) * 0.15;

    // HUD updates
    if (velRef.current) {
      velRef.current.textContent = Math.abs(velocityRef.current).toFixed(2);
    }
    if (coordRef.current) {
      coordRef.current.textContent = String(
        Math.floor(scrollPosRef.current)
      );
    }

    // Camera tilt from mouse + velocity
    const tiltX = mouseRef.current.y * 5 - velocityRef.current * 0.5;
    const tiltY = mouseRef.current.x * 5;

    if (worldRef.current) {
      worldRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    }

    // Dynamic perspective (warp with speed)
    if (viewportRef.current) {
      const baseFov = 1000;
      const fov =
        baseFov - Math.min(Math.abs(velocityRef.current) * 10, 600);
      viewportRef.current.style.perspective = `${fov}px`;
    }

    // Camera Z from scroll position
    const cameraZ = scrollPosRef.current * CONFIG.camSpeed;

    itemsRef.current.forEach((item) => {
      const relZ = item.baseZ + cameraZ;

      let vizZ = ((relZ % LOOP_SIZE) + LOOP_SIZE) % LOOP_SIZE;
      if (vizZ > 500) vizZ -= LOOP_SIZE;

      // Opacity — fade in/out by distance
      let alpha = 1;
      if (vizZ < -3000) alpha = 0;
      else if (vizZ < -2000) alpha = (vizZ + 3000) / 1000;
      if (vizZ > 100 && item.type !== "star")
        alpha = 1 - (vizZ - 100) / 400;
      if (alpha < 0) alpha = 0;

      item.el.style.opacity = String(alpha);

      if (alpha > 0) {
        let trans = `translate3d(${item.x}px, ${item.y}px, ${vizZ}px)`;

        if (item.type === "star") {
          const stretch = Math.max(
            1,
            Math.min(1 + Math.abs(velocityRef.current) * 0.1, 10)
          );
          trans += ` scale3d(1, 1, ${stretch})`;
        } else if (item.type === "text") {
          trans += ` rotateZ(${item.rot}deg)`;
          if (Math.abs(velocityRef.current) > 1) {
            const offset = velocityRef.current * 2;
            item.el.style.textShadow = `${offset}px 0 #4ade80, ${-offset}px 0 #15803d`;
          } else {
            item.el.style.textShadow = "none";
          }
        } else {
          const t = time * 0.001;
          const float = Math.sin(t + item.x) * 10;
          trans += ` rotateZ(${item.rot}deg) rotateY(${float}deg)`;
        }

        item.el.style.transform = trans;
      }
    });

    animFrameRef.current = requestAnimationFrame(animateFrame);
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      scrollPosRef.current = scrollRef.current.scrollTop;
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = stickyRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: 0, y: 0 };
  }, []);

  useEffect(() => {
    buildScene();
    lastTimeRef.current = performance.now();
    animFrameRef.current = requestAnimationFrame(animate);

    const world = worldRef.current;
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      if (world) {
        world.innerHTML = "";
      }
      itemsRef.current = [];
    };
  }, [buildScene, animate]);

  return (
    <div
      ref={scrollRef}
      className={styles.sceneRoot}
      onScroll={handleScroll}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Sticky layer — visible scene */}
      <div ref={stickyRef} className={styles.sceneSticky}>
        {/* 3D viewport */}
        <div ref={viewportRef} className={styles.viewport}>
          <div ref={worldRef} className={styles.world} />
        </div>

        {/* Overlays */}
        <div className={styles.scanlines} />
        <div className={styles.vignette} />
        <div className={styles.noise} />

        {/* HUD */}
        <div className={styles.hud}>
          <div className={styles.hudRow}>
            <span>SYS.READY</span>
            <div className={styles.hudLine} />
            <span>
              FPS: <span className={styles.hudAccent} ref={fpsRef}>60</span>
            </span>
          </div>
          <div className={styles.hudSide}>
            SCROLL VELOCITY //{" "}
            <span className={styles.hudAccent} ref={velRef}>
              0.00
            </span>
          </div>
          <div className={styles.hudRow}>
            <span>
              COORD:{" "}
              <span className={styles.hudAccent} ref={coordRef}>
                000
              </span>
            </span>
            <div className={styles.hudLine} />
            <span>VER 2.0.4 [BETA]</span>
          </div>
        </div>
      </div>

      {/* Scroll proxy — creates scroll depth */}
      <div className={styles.scrollProxy} />
    </div>
  );
}
