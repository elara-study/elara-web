'use client';

import Waves from '@/components/Waves';

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Waves
        lineColor="#4d6a8a"
        backgroundColor="transparent"
        waveSpeedX={0.015}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
    </div>
  );
}


