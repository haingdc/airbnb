import { ReactInstance } from "react";

export default function scrollTo(params: {
  element: ReactInstance;
  to: number;
  duration: number;
  scrollDirection: string;
}) {
  const { element, to, duration, scrollDirection } = params;
  var start = element[scrollDirection],
    change = to - start,
    increment = 1000 / 60;

  var animateScroll = function(elapsedTime: number) {
    elapsedTime += increment;
    var position = easeInOut(elapsedTime, start, change, duration);
    element[scrollDirection] = position;

    if (elapsedTime < duration) {
      window.requestAnimationFrame(animateScroll.bind(null, elapsedTime));
    }
  };

  // animateScroll(0);
  window.requestAnimationFrame(animateScroll.bind(null, 0));
}

function easeInOut(
  currentTime: number,
  start: number,
  change: number,
  duration: number,
) {
  currentTime /= duration / 2;
  if (currentTime < 1) {
    return change / 2 * currentTime * currentTime + start;
  }
  currentTime -= 1;
  return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}
