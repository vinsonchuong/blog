export function* map(fn, iterable) {
  for (const value of iterable) {
    yield fn(value);
  }
}

export function* filter(fn, iterable) {
  for (const value of iterable) {
    if (fn(value)) {
      yield value;
    }
  }
}

export function* first(iterable) {
  for (const value of iterable) {
    yield value;
    break;
  }
}

// export function* rest(iterable) {
//   let iterator = iterable[Symbol.iterator]();
//   iterator.next();
//   yield* iterator;
// }
export function* rest(iterable) {
  let first = true;
  for (const value of iterable) {
    if (first) {
      first = false;
    } else {
      yield value;
    }
  }
}

export function* reduce(fn, iterable) {
  let accumulator;
  for (const value of first(iterable)) {
    accumulator = value;
  }
  for (const value of rest(iterable)) {
    yield accumulator = fn(accumulator, value);
  }
}

export function* all(iterable, fn) {
  yield* reduce(function*(accumulator, value) {
    yield accumulator && fn(value);
  }, iterable);
}
