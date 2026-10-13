self.addEventListener("push", event => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (_) {}
  const title = data.title || "RONALD E-LOADING";
  const options = { body: data.body || "Your order status has been updated.", icon: "./eloading.jpg", badge: "./eloading.jpg", data: { url: data.url || "https://ronaldeloadingbusinessstation.github.io/Online-Loading-Website/#track-order", orderNumber: data.orderNumber || "" } };
  event.waitUntil(self.registration.showNotification(title, options));
});
self.addEventListener("notificationclick", event => {
  event.notification.close();
  const url = event.notification.data && event.notification.data.url;
  event.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(list => {
    for (const client of list) if ("focus" in client) { client.navigate(url); return client.focus(); }
    return clients.openWindow ? clients.openWindow(url) : undefined;
  }));
});
