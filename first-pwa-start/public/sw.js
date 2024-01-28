self.addEventListener("install", (event) => {
  console.log("Install event", event);
});
self.addEventListener("active", (event) => {
  console.log("Active event", event);
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  console.log("Fetching event", event);
  event.repsondWith(fetch(event.request));
});
