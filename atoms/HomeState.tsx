import { atom } from 'recoil';
import { v1 } from 'uuid'

export const mobileMenuState = atom({
    key: `mobileMenuState/${v1()}`,
    default: false, // default value (aka initial value)
});

export const listingToggleState = atom({
    key: `listingToggleState/${v1()}`,
    default: 0
})

export const tokenToggleState = atom({
    key: `tokenToggleState/${v1()}`,
    default: 0
})