// Permanent redirect from www.postfork.org to the apex, keeping path and query.
export default {
  fetch(request) {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.hostname = "postfork.org";
    url.port = "";
    return Response.redirect(url.toString(), 301);
  },
};
