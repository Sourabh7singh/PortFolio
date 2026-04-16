"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState, useCallback } from "react";
import * as THREE from "three";

function Robot({ isMobile }) {
  const { scene } = useGLTF("/robot.glb");
  const ref = useRef();
  const [wave, setWave] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [randomAction, setRandomAction] = useState(null);

  // Random Idle Animations
  useEffect(() => {
    if (!isActive) {
      setRandomAction(null);
      return;
    }

    let timeoutId;
    const scheduleNextAction = () => {
      const delay = Math.random() * 5000 + 10000; // 10 to 15 seconds
      timeoutId = setTimeout(() => {
        const actions = ["nod", "jump", "wave", "lookAround"];
        const nextAction = actions[Math.floor(Math.random() * actions.length)];
        setRandomAction(nextAction);

        // Reset action after a set duration
        timeoutId = setTimeout(() => {
          setRandomAction(null);
          scheduleNextAction();
        }, 2500); // Action plays for 2.5 seconds
      }, delay);
    };

    scheduleNextAction();

    return () => clearTimeout(timeoutId);
  }, [isActive]);

  // stop wave after 2s
  useEffect(() => {
    const t = setTimeout(() => setWave(false), 2000);

    // Window focus/blur listeners to reset robot tracking
    const handleBlur = () => setIsActive(false);
    const handleFocus = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);
    const handleMouseEnter = () => setIsActive(true);

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      clearTimeout(t);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    const { mouse, clock } = state;

    // cursor follow — smoother and less aggressive
    // Invert the mouse.y for targetX to fix the reversed upward and downward motion
    let targetY = isActive ? mouse.x * Math.PI * 0.3 : 0;
    let targetX = isActive ? -(mouse.y * Math.PI * 0.15) : 0;

    // Override look targets if doing random action
    if (randomAction === "lookAround") {
      targetY = Math.sin(clock.elapsedTime * 6) * 0.6;
    } else if (randomAction === "nod") {
      targetX = Math.sin(clock.elapsedTime * 12) * 0.4;
      targetY = 0;
    }

    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      targetY,
      0.06
    );

    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      targetX,
      0.06
    );

    // floating animation — stays centered and shifted down so head isn't unclipped
    let baseY = isMobile ? -0.8 : -1.5;
    if (randomAction === "jump") {
      baseY += Math.abs(Math.sin(clock.elapsedTime * 10)) * 0.4; // Bounce up
    }
    ref.current.position.y = baseY + Math.sin(clock.elapsedTime) * 0.12;

    // 👋 wave animation (initial or hover)
    if (wave || isHovered || randomAction === "wave") {
      const targetZ = Math.sin(clock.elapsedTime * 8) * 0.15;
      ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, targetZ, 0.2);
    } else {
      // Smoothly return rotation.z to 0
      ref.current.rotation.z = THREE.MathUtils.lerp(
        ref.current.rotation.z,
        0,
        0.1
      );
    }

    // Hover scale pulse
    const baseScale = isMobile ? 2.0 : 2.6;
    if (isHovered) {
      const pulseScale = baseScale + Math.sin(clock.elapsedTime * 4) * 0.04;
      ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, pulseScale, 0.1));
    } else {
      ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, baseScale, 0.1));
    }
  });

  const handleClick = useCallback(() => {
    window.location.href = "/projects";
  }, []);

  const robotScale = isMobile ? 2.0 : 2.6;

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={robotScale}
      onClick={handleClick}
      onPointerOver={() => {
        setIsHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setIsHovered(false);
        document.body.style.cursor = "auto";
      }}
    />
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color="#a855f7" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

export default function RobotScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="w-full relative"
      style={{ height: "520px" }}
    >
      {/* 💬 Speech Bubble */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm text-white border border-white/20 animate-bounce z-20 whitespace-nowrap">
        Show Projects?
      </div>

      {/* Click hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-gray-500 text-xs z-20 opacity-60 hidden md:block">
        Click the robot to view projects
      </div>

      <Canvas
        camera={{
          position: [0, 0, 4.5],
          fov: 45,
        }}
        style={{ touchAction: "pan-y" }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight position={[2, 3, 2]} intensity={0.8} />
        <directionalLight position={[-2, 1, -1]} intensity={0.9} color="#a855f7" />

        <Suspense fallback={<LoadingFallback />}>
          <Robot isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}