self.addEventListener("install", (event) => {
  console.log(event);
});
self.addEventListener("active", (event) => {
  console.log(event);
  return self.clients.claim();
});
