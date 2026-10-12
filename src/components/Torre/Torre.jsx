import { cx } from '../../shared/utils';

import './Torre.scss';

// Torre Velasca, Milan: an 18-storey shaft and an 8-storey block cantilevered on diagonal ribs.
const OUTLINE = 'M56 530V250L34 196V70h6V60h12V40h32v20h32V46h34v14h10v10h6v126l-22 54v280z';
const RIBS =
  'M78 250v280M100 250v280M122 250v280M56 70v126M78 70v180M100 70v180M122 70v180M144 70v126';

const SHAFT = { floors: 18, top: 250, bottom: 530, columns: [56, 78, 100, 122, 144] };
const BLOCK = { floors: 8, top: 70, bottom: 196, columns: [34, 56, 78, 100, 122, 144, 166] };

function windows({ floors, top, bottom, columns }, firstFloor) {
  const height = (bottom - top) / floors;
  return Array.from({ length: floors }, (_, row) =>
    columns.slice(0, -1).map((left, column) => ({
      floor: firstFloor + row,
      x: left + 4,
      y: bottom - height * (row + 1) + 3,
      width: columns[column + 1] - left - 8,
      height: height - 6,
    })),
  ).flat();
}

const WINDOWS = [...windows(SHAFT, 1), ...windows(BLOCK, SHAFT.floors + 1)];

/**
 * Line drawing of the tower. `lit` floors glow red, from the ground up.
 */
const Torre = ({ className, lit = 0, isPlaying = true }) => (
  <svg
    className={cx('Torre', isPlaying && 'Torre_playing', className)}
    viewBox="0 0 200 540"
    aria-hidden="true"
  >
    <g className="Torre__windows">
      {WINDOWS.map(({ floor, ...rect }) => (
        <rect
          key={`${floor}-${rect.x}`}
          className={cx('Torre__window', floor <= lit && 'Torre__window_lit')}
          style={{ '--floor': floor }}
          {...rect}
        />
      ))}
    </g>
    <path className="Torre__ribs" d={RIBS} pathLength="1" />
    <path className="Torre__outline" d={OUTLINE} pathLength="1" />
    <path className="Torre__ground" d="M0 530h200" pathLength="1" />
  </svg>
);

export default Torre;
