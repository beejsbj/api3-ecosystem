//navigation guard to check if user is authenticated
import { getAccount } from "@wagmi/core";

const isAuthenticated = ref(getAccount().isConnected);

export default defineNuxtRouteMiddleware((to, from) => {
  // if not authenticated, redirect to home page
  console.log(to);
  if (!isAuthenticated.value) {
    return navigateTo("/login");
  }
});
