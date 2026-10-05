import { useMemo, useState } from 'preact/hooks';

const R = 100;
const SIZE = 260;
const C = SIZE / 2;
const SCALE = (SIZE / 2 - 24) / 100;

export default function FrictionCircle() {
  const [fx, setFx] = useState(0);
  const [fy, setFy] = useState(0);

  const { magnitude, over } = useMemo(() => {
    const m = Math.sqrt(fx * fx + fy * fy);
    return { magnitude: m, over: m > R };
  }, [fx, fy]);

  const vx = C + fx * SCALE;
  const vy = C - fy * SCALE;
  const statusId = 'friction-circle-status';

  return (
    <div>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          role="img"
          aria-describedby={statusId}
          aria-label="摩擦円の図。前後力と横力の合力ベクトルと、タイヤのグリップ限界を示す円"
        >
          <circle
            cx={C}
            cy={C}
            r={R * SCALE}
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-dasharray={over ? '6 4' : 'none'}
          />
          <line x1={C - R * SCALE} y1={C} x2={C + R * SCALE} y2={C} stroke="currentColor" stroke-width="1" opacity="0.4" />
          <line x1={C} y1={C - R * SCALE} x2={C} y2={C + R * SCALE} stroke="currentColor" stroke-width="1" opacity="0.4" />
          <text x={C + R * SCALE + 4} y={C + 4} font-size="11">駆動＋</text>
          <text x={C - R * SCALE - 34} y={C + 4} font-size="11">制動＋</text>
          <text x={C + 6} y={C - R * SCALE - 4} font-size="11">旋回＋</text>
          <circle cx={C} cy={C} r={R * SCALE * (Math.min(magnitude, 160) / 100)} fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2 4" opacity="0.6" />
          <line
            x1={C}
            y1={C}
            x2={vx}
            y2={vy}
            stroke="currentColor"
            stroke-width="3"
            stroke-dasharray={over ? '6 3' : 'none'}
            marker-end="url(#friction-arrow)"
          />
          <defs>
            <marker id="friction-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
            </marker>
          </defs>
          <circle cx={vx} cy={vy} r="5" fill="none" stroke="currentColor" stroke-width="2" />
          <text x={C - 52} y={C + R * SCALE + 18} font-size="11">
            {over ? '× 限界超過（破線）' : '○ グリップ域（実線）'}
          </text>
        </svg>
        <div style={{ minWidth: '220px', flex: '1' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label for="friction-fx">
              前後力（制動 − ／ 駆動 ＋）: {fx}
            </label>
            <input
              id="friction-fx"
              type="range"
              min={-120}
              max={120}
              value={fx}
              onInput={(e) => setFx(Number((e.target as HTMLInputElement).value))}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label for="friction-fy">
              横力（旋回力）: {fy}
            </label>
            <input
              id="friction-fy"
              type="range"
              min={-120}
              max={120}
              value={fy}
              onInput={(e) => setFy(Number((e.target as HTMLInputElement).value))}
              style={{ width: '100%' }}
            />
          </div>
          <p id={statusId} aria-live="polite">
            合力 {Math.round(magnitude)} ／ 限界 {R} —
            {over
              ? '× 限界を超えています。ブレーキ・アクセル・ハンドルのどれかを緩める必要があります。'
              : '○ グリップの範囲内です。まだ余裕があります。'}
          </p>
        </div>
      </div>
    </div>
  );
}
