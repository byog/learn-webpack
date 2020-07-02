/**
 @description page scroll to specify height with smooth
*/
let scrollSmoothTo = target => {
    // target ie <= 9
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback) {
            return setTimeout(callback, 17)
        }
    }

    // current scroll height
    let currentPosition =
        document.documentElement.scrollTop || document.body.scrollTop

    //target position
    let targetPosition = document.getElementById(target).offsetTop

    let step = function() {
        // distance from target
        let distance = targetPosition - currentPosition

        // target position each step
        currentPosition = currentPosition + distance / 1

        if (Math.abs(distance) < 10) {
            window.scrollTo(0, targetPosition)
        } else {
            window.scrollTo(0, currentPosition)
            requestAnimationFrame(step)
        }
    }
    step()
}

export default scrollSmoothTo
