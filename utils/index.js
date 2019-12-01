export const NOOP = () => {};

export function setImmediate(fn, ms) {
    fn();
    return setInterval(fn, ms);
}

export function clearImmediate(fn) {
    clearInterval(fn);
}

export const KEY_PRESS_MODE = {
    KeyPress: 1,
    KeyPressIn: 2,
    KeyPressOut: 3,
};

export const CONSOLE = {
    GBA: 'gba',
    NES: 'nes',
    SNES: 'snes',
    N64: 'n64'
};
