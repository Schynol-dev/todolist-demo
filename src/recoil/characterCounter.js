import { atom, selector } from "recoil";

export const textState = atom({
    key: 'textState',
    default: ''
});

export const textCharCountState = selector({
    key: 'textCharCountState',
    get: ({ get }) => {
        const text = get(textState);

        return text.length;
    }
});