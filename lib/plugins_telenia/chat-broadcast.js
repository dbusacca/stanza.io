module.exports = function(client, stanzas) {
    var NS = 'http://teleniasoftware.com/protocol/broadcast';

    var broadcastAttribute = stanzas.define({
        name: 'tvoxBroadcast',
        element: 'x-tvox-broadcast',
        namespace: NS
    });

    stanzas.withMessage(function(message) {
        stanzas.extend(message, broadcastAttribute);
    });
};
