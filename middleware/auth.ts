//navigation guard to check if user is authenticated

const { isConnected } = useWeb3();

export default defineNuxtRouteMiddleware((to, from) => {
  // if not authenticated, redirect to home page

  if (!isConnected.value) {
    return navigateTo({
      path: "/login",
      query: { to: to.path },
    });
  }
});
