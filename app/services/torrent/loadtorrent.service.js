var torrentStream = require('torrent-stream');
var readTorrent   = require('read-torrent');

var loadtorrent = function() {

    this.getTorrent = function(hash, res) {
        
        var torrentLink = 'http://torcache.net/torrent/'+hash+'.torrent';
        var tmpfolder   = __dirname+'/../../public/tmp/';
        
        readTorrent(torrentLink, {}, function(err, torrent) {
            if(typeof torrent !== 'undefined'){

                //Création d'un stream torrent
                var engine = torrentStream(torrent, {tmp: tmpfolder, path:tmpfolder+'/myfile'});

                engine.on('ready', function() {
                    engine.files.forEach(function(file) {
                        console.log('filename:', file.name);
                        var stream = file.createReadStream();
                    });
                });
            }
        });

        res.render('kickass/watch', {uri:torrentLink});
    }

};


module.exports = new loadtorrent();