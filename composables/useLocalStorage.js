// useLocalStorage.js
import { ref, watch, onMounted } from "vue";

export default function useLocalStorage(key, defaultValue) {
  const storedValue = ref(defaultValue);
  console.log("hi");
  onMounted(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      console.log(stored, "if passed");
      storedValue.value = JSON.parse(stored);
    } else {
      console.log("else passed");
      storedValue.value = defaultValue;
    }
  });

  watch(storedValue, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
  });

  return storedValue;
}
