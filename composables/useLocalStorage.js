// useLocalStorage.js
import { ref, watch, onMounted } from "vue";

export default function useLocalStorage(key, defaultValue) {
  const storedValue = ref(defaultValue);

  onMounted(() => {
    const stored = localStorage.getItem(key);
    storedValue.value = stored ? JSON.parse(stored) : defaultValue;
  });

  watch(storedValue, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
  });

  return storedValue;
}
