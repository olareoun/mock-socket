/**
* The native websocket object will transform urls without a pathname to have just a /.
* As an example: ws://localhost:8080 would actually be ws://localhost:8080/. This function
* does this transformation to stay inline with the native websocket implementation.
*
* @param {url: string} The url to transform.
*/
function urlTransform(url) {
  var a = document.createElement('a');
  a.href = url;

  if(a.pathname === '/' && url.slice(-1) !== '/') {
    url += '/';
  }

  return url;
}

module.exports = urlTransform;
