import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, PerformanceMonitor, OrbitControls } from '@react-three/drei';
import { Color, Group } from 'three';

// 星空旋转组件
const RotatingStars: React.FC = () => {
  const starsRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (starsRef.current) {
      // 缓慢的X轴旋转，从下往上的太空遨游感觉
      starsRef.current.rotation.x += delta * 0.01;
      
      // 轻微的Y轴摆动，增加真实感
      starsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
      
      // Z轴保持静止，避免过度复杂
      // starsRef.current.rotation.z += delta * 0.01;
    }
  });

  return (
    <group ref={starsRef}>
      {/* 静态星空配置 - 无闪烁 */}
      <Stars
        radius={150}      // 原始半径
        depth={60}        // 原始深度
        count={1000}      // 原始数量
        factor={3}        // 较小的factor，减少大小差异
        fade={false}      // 禁用淡出效果，减少闪烁
        speed={0}         // 禁用内置旋转，使用自定义旋转
        saturation={0}    // 纯白星星
      />
    </group>
  );
};

const SpaceBackground: React.FC = () => {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
      camera={{ 
        position: [0, 0, 1],
        fov: 75,
        near: 0.1,
        far: 1000
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(new Color('#000000')); // 设置黑色背景
      }}>
        
      {/* 性能自适应调节 */}
      <PerformanceMonitor
        factor={1}
        onChange={({ factor }) => {
          // 根据设备性能自动调整画质
          console.debug(`Performance factor: ${factor.toFixed(2)}`);
        }}
      />

      {/* 旋转星空 */}
      <RotatingStars />

      {/* 添加调试控件 */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate={false}
        enableDamping={true}
        dampingFactor={0.05}
      />

      {/* 环境光 */}
      <ambientLight intensity={0.8} />
    </Canvas>
  );
};

export default SpaceBackground;