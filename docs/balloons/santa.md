# Santa Balloon

The Santa Balloon uses the complete artwork in `resources/balloons/santa/balloon.svg` and inherits the regular balloon's movement and pop behavior. The hat is part of that SVG, so there is no separate hat overlay or mask. It plays its own pop sound and releases a short burst of drifting snow when popped.

Santa can spawn from November 15 through January 15, inclusive, using the Europe/Brussels calendar date. Its relative spawn weight is `0.08`.

## Assets

- Santa balloon SVG: `resources/balloons/santa/balloon.svg`
- Pop sound: `resources/balloons/santa/pop.mp3`

Adjust the overall artwork size through the inherited `size` option in `src/balloons/santa.ts` if needed. The snow animation is defined in `resources/balloons/santa/santa.css`.

Adjust the relative spawn weight in `src/balloons/santa.ts` with `Santa.spawn_chance`.

The pure date boundaries are covered in `tests/utils/christmas-season.test.ts`. Run them with `npm test -- --runInBand tests/utils/christmas-season.test.ts` or run the full Jest suite with `npm test`.
