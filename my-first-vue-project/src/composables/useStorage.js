import {ref, watch} from "vue";

export const useStorage = (key) => {
    const storedValue = ref(JSON.parse(localStorage.getItem(key)));
    watch(storedValue, () => {
        localStorage.setItem(key, JSON.stringify(storedValue.value));
    })
    return storedValue
}