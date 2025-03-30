import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, PerformanceMonitor, OrbitControls } from '@react-three/drei';
import { Color } from 'three';

const SpaceBackground: React.FC = () => {
  return (
    <Canvas
      style={{
        position: 'absolute', //fixed
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 1] }}
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

      {/* 3D星空核心组件 */}
      <Stars
        radius={150}      // 星云半径
        depth={60}        // 空间深度
        count={1000}      // 星星总数
        factor={8}        // 大小差异系数
        fade              // 淡出效果
        speed={1.5}      // 旋转速度
        saturation={0}   // 颜色饱和度 (0为纯白)
      />

      {/* 添加调试控件 */}
      <OrbitControls enableZoom={false} />

      {/* 环境光 */}
      <ambientLight intensity={0.8} />
    </Canvas>
  );
};

export default SpaceBackground;