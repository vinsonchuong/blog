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

export function* reduce(iterable, fn, initial) {
  let accumulator = initial;
  for (const value of iterable) {
    if (Object.is(accumulator, undefined)) {
      accumulator = value
    } else {
      yield accumulator = fn(accumulator, value);
    }
  }
}

export function* all(iterable, fn) {
  yield* reduce(iterable, function*(accumulator, value) {
    yield accumulator && fn(value);
  }, true);
}

export function* all(iterable, fn) {
  let accumulator = true;
  for (const value of iterable) {
    yield accumulator = accumulator && fn(value);
  }
}
