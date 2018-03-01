function scrollTo(
  element: HTMLElement,
  to: number,
  duration: number,
  scrollDirection: number,
) {
  var start = element[scrollDirection],
    change = to - start,
    increment = 20;

  var animateScroll = function(elapsedTime: number) {
    elapsedTime += increment;
    var position = easeInOut(elapsedTime, start, change, duration);
    element[scrollDirection] = position;

    if (elapsedTime < duration) {
      setTimeout(function() {
        animateScroll(elapsedTime);
      }, increment);
    }
  };

  animateScroll(0);
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

export default scrollTo;
