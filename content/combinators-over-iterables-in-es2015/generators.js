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

export function* head(iterable) {
  for (const value of iterable) {
    yield value;
    break;
  }
}

export function* last(iterable) {
  let previousValue;
  for (const value of iterable) {
    previousValue = value;
  }
  yield value;
}

// export function* tail(iterable) {
//   let iterator = iterable[Symbol.iterator]();
//   iterator.next();
//   yield* iterator;
// }
export function* tail(iterable) {
  let first = true;
  for (const value of iterable) {
    if (first) {
      first = false;
    } else {
      yield value;
    }
  }
}

export function* init(iterable) {
  let previousValue;
  for (const value of first(iterable)) {
    previousValue = value;
  }
  for (const value of iterable) {
    yield previousValue
    previousValue = value;
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
