module.exports = function(client, stanzas) {
  var NS = "http://teleniasoftware.it/tvox/xmpp";

  var tvoxExpireTime = stanzas.define({
    name: "tvoxExpirationTime",
    element: "x-tvox-expiration-time",
    namespace: NS,
    fields: {
      value: stanzas.utils.text()
    }
  });

  stanzas.withMessage(function(message) {
    stanzas.extend(message, tvoxExpireTime);
  });
};
