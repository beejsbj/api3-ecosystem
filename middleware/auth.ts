//navigation guard to check if user is authenticated

const { isConnected } = useWeb3();

export default defineNuxtRouteMiddleware((to, from) => {
  // if not authenticated, redirect to home page
  console.log(to);
  if (!isConnected) {
    return navigateTo("/login");
  }
});
