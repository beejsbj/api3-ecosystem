export default defineEventHandler((event) => {
  console.log("middleware running");
  event.context.auth = { user: 123 };
});
