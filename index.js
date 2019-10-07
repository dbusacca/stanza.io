'use strict';

exports.VERSION = '__STANZAIO_VERSION__';

exports.JID = require('xmpp-jid').JID;
exports.Client = require('./lib/client');


exports.createClient = function (opts) {
    var client = new exports.Client(opts);


// client.use(require('./lib/plugins'));

    // We always need this one first
    client.use(require('./lib/plugins/disco'));

    client.use(require('./lib/plugins/attention'));
    // client.use(require('./lib/plugins/avatar'));
    // client.use(require('./lib/plugins/blocking'));
    client.use(require('./lib/plugins/bob'));
    // client.use(require('./lib/plugins/bookmarks'));
    client.use(require('./lib/plugins/carbons'));
    client.use(require('./lib/plugins/chatstates'));
    client.use(require('./lib/plugins/command'));
    client.use(require('./lib/plugins/correction'));
    client.use(require('./lib/plugins/csi'));
    client.use(require('./lib/plugins/dataforms'));
    client.use(require('./lib/plugins/delayed'));
    client.use(require('./lib/plugins/escaping'));
    client.use(require('./lib/plugins/extdisco'));
    client.use(require('./lib/plugins/forwarding'));
    // client.use(require('./lib/plugins/geoloc'));
    client.use(require('./lib/plugins/hashes'));
    client.use(require('./lib/plugins/idle'));
    client.use(require('./lib/plugins/invisible'));
    client.use(require('./lib/plugins/jidprep'));
    // client.use(require('./lib/plugins/jingle'));
    client.use(require('./lib/plugins/json'));
    client.use(require('./lib/plugins/keepalive'));
    client.use(require('./lib/plugins/logging'));
    client.use(require('./lib/plugins/mam'));
    client.use(require('./lib/plugins/muc'));
    // client.use(require('./lib/plugins/mood'));
    client.use(require('./lib/plugins/nick'));
    client.use(require('./lib/plugins/oob'));
    client.use(require('./lib/plugins/ping'));
    client.use(require('./lib/plugins/private'));
    client.use(require('./lib/plugins/psa'));
    client.use(require('./lib/plugins/pubsub'));
    // client.use(require('./lib/plugins/reach'));
    client.use(require('./lib/plugins/receipts'));
    client.use(require('./lib/plugins/references'));
    // client.use(require('./lib/plugins/register'));
    client.use(require('./lib/plugins/roster'));
    client.use(require('./lib/plugins/rtt'));
    client.use(require('./lib/plugins/shim'));
    // client.use(require('./lib/plugins/time'));
    // client.use(require('./lib/plugins/vcard'));
    client.use(require('./lib/plugins/version'));

    // telenia extensions
    client.use(require('./lib/plugins_telenia/chat-markers'));
    client.use(require('./lib/plugins_telenia/chat-broadcast'));
    client.use(require('./lib/plugins_telenia/tvox-alarm'));
    client.use(require('./lib/plugins_telenia/expire-time'));

    return client;
};

