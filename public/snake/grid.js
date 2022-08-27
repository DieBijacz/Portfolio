export const GRID_WIDTH = 53
export const GRID_HEIGHT = 7

export function outSideGrid(coords) {
  return (
    coords.x < 1 || coords.x > GRID_WIDTH || coords.y < 1 || coords.y > GRID_HEIGHT
  )

}