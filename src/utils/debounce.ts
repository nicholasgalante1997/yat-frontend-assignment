/**
 * Simple debouncing function for throttling client event handling
 * @see https://www.freecodecamp.org/news/javascript-debounce-example/
 *
 * TLDR: this fn accepts another fn that we want to throttle our handling of, i.e. we only want to perform mutations over
 * token cards when the user finishes searching for their "search term", otherwise well be queueing a potentially expensive client side calculation
 * on every input keystroke, which we likely dont need to do.
 *
 * Likely could have just leaned on the lodash impl of debounce but
 * lodash (the non esm version) is unmodularized and therefore a huge dep to take on
 */

export function debounce(func: (...args: any[]) => any, timeout = 400) {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

// TS: typing `this` is hard here but `this` is bound in this context to the wrapping closure fn scope
