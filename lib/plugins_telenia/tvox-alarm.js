
// libreria di crezione XML
// https://yarnpkg.com/en/package/jxt
//

module.exports = function(client, stanzas) {
  var NS = "http://teleniasoftware.it/tvox/xmpp";

  var TVoxAlarmAttribute = stanzas.define({
    name: "tvoxAlarm",
    element: "x-tvox-alarm",
    namespace: NS,
    fields: {
      //uniqueIdAlarm: stanzas.utils.attribute("uniqueIdAlarm"),
      uniqueIdAlarm: stanzas.utils.textSub(NS, "uniqueIdAlarm"),
      idAlarm: stanzas.utils.textSub(NS, "idAlarm"),
      codeAlarm: stanzas.utils.textSub(NS, "codeAlarm"),
      priority: stanzas.utils.numberSub(NS, "priority"),
      classType: stanzas.utils.textSub(NS, "classType")
    }
  });

  stanzas.withMessage(function(message) {
    stanzas.extend(message, TVoxAlarmAttribute);
  });
};
