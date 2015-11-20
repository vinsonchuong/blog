export function* all(iterable, fn) {
  yield* reduce(function*(accumulator, value) {
    yield accumulator && fn(value);
  }, iterable);
}
