import { reactive, onBeforeUnmount } from 'vue'

function addUnits (value: string | number) {
  if (typeof value === 'string') {
    return value
  }
  return `${value}px`
}

/* enum CallbackTypen {
  'enter' = 1,
  'leave' = 2
} */

type MQValue = string | number | Array<string | number>

function getMediaQuery (param: MQValue) {
  let mediaQuery = 'screen and '

  if (Array.isArray(param)) {
    mediaQuery += `(min-width: ${addUnits(param[0])})`

    if (param.length === 2) {
      mediaQuery += ` and (max-width: ${addUnits(param[1])})`
    }

    return mediaQuery
  }

  if (typeof param === 'number' || typeof Number.parseInt(param) === 'number') {
    mediaQuery += `(max-width: ${addUnits(param)})`
    return mediaQuery
  }

  return String(param)
    .replace(/^@?media/i, '')
    .trim()
}

type Callback = (mq: MediaQueryList) => void

interface EnterLeaveCallbacks {
  enter: Callback[]
  leave: Callback[]
}

function addCallback (callbacks: EnterLeaveCallbacks, type: 'enter' | 'leave', callback: Callback) {
  if (!callbacks[type]) {
    throw new Error(`Event of type '${type}' is not available for registration`)
  }

  if (callbacks[type].indexOf(callback) === -1) {
    callbacks[type].push(callback)
  }
}

function removeCallback (callbacks: EnterLeaveCallbacks, type: 'enter' | 'leave', callback: Callback) {
  if (!callbacks[type]) {
    throw new Error(`Event of type '${type}' is not available for unregistration`)
  }

  if (callback === undefined) {
    callbacks[type] = []
  } else {
    const index = callbacks[type].indexOf(callback)

    if (index !== -1) {
      callbacks[type].splice(index, 1)
    }
  }
}

function runCallbacks (callbacks: Callback[], mq: MediaQueryList) {
  callbacks.forEach((callback) => callback(mq))
}

interface Breakpoint {
  matches: boolean
  on: (type: 'enter' | 'leave', callback: Callback) => void
  off: (type: 'enter' | 'leave', callback: Callback) => void
}

function registerMediaQuery (name: string, param: MQValue, breakpoints: Record<string, Breakpoint>) {
  const mq = window.matchMedia(getMediaQuery(param))

  const callbacks: EnterLeaveCallbacks = {
    enter: [],
    leave: []
  }

  breakpoints[name] = {
    matches: mq.matches,
    on (type, callback) {
      addCallback(callbacks, type, callback)
    },
    off (type, callback) {
      removeCallback(callbacks, type, callback)
    }
  }

  const setValue = (e: MediaQueryListEvent) => {
    breakpoints[name].matches = e.matches

    runCallbacks(e.matches ? callbacks.enter : callbacks.leave, mq)
  }

  mq.addListener(setValue)

  onBeforeUnmount(() => {
    mq.removeListener(setValue)
  })
}

export default function (config: Record<string, MQValue>) {
  const breakpoints = reactive({} as Record<string, Breakpoint>)

  Object.keys(config).forEach((key) => {
    registerMediaQuery(key, config[key], breakpoints)
  })

  return breakpoints
}
