
module.exports = function (client, stanzas) {
    var NS = 'urn:xmpp:chat-markers:0';

    var markableAttribute = stanzas.define({
        name: 'markable',
        element: 'markable',
        namespace: NS
    });

    stanzas.withMessage(function (Message) {
        stanzas.extend(Message, markableAttribute);
    });

    var receivedAttribute = stanzas.define({
        name: 'marker_received',
        element: 'received',
        namespace: NS,
        fields: {
            id: stanzas.utils.attribute('id')
        },
    });

    stanzas.withMessage(function(Message) {
        stanzas.extend(Message, receivedAttribute);
    });

    var displayedAttribute = stanzas.define({
        name: 'marker_displayed',
        element: 'displayed',
        namespace: NS,
        fields: {
            id: stanzas.utils.attribute('id')
        },
    });

    stanzas.withMessage(function(Message) {
        stanzas.extend(Message, displayedAttribute);
    });

    var acknowledgedAttribute = stanzas.define({
        name: 'marker_acknowledged',
        element: 'acknowledged',
        namespace: NS,
        fields: {
            id: stanzas.utils.attribute('id')
        },
    });

    stanzas.withMessage(function(Message) {
        stanzas.extend(Message, acknowledgedAttribute);
    });

    client.sendReceived = function(messageId, to) {
        client.sendMessage({
            to: to,
            id: null,
            marker_received: {
                id: messageId
            },
        });
    };

    client.sendDisplayed = function(messageId, to) {
        client.sendMessage({
            to: to,
            id: null,
            marker_displayed: {
                id: messageId
            },
        });
    };

    client.sendAcknowledged = function(messageId, to) {
        client.sendMessage({
            to: to,
            id: null,
            marker_acknowledged: {
                id: messageId
            },
        });
    };
};
