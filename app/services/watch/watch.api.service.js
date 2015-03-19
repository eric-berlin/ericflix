var torrentStream = require('torrent-stream');
var readTorrent   = require('read-torrent');

var watch = function() {

    this.getTorrent = function(res, hash, filename) {
        
        var torrentLink  = 'http://torcache.net/torrent/'+hash+'.torrent';
        var tmpfolder    = __dirname+'/../../../public/tmp/';
        var torrentfiles = [];
        
        readTorrent(torrentLink, {}, function(err, torrent) {
            if(typeof torrent !== 'undefined'){

                //Création d'un stream torrent
                var engine = torrentStream(torrent, {tmp: tmpfolder, path:tmpfolder+'/myfile'});

                engine.on('ready', function() {
                    engine.files.forEach(function(file) {

                        if(file.name == filename){
                            var stream = file.createReadStream();
                            res.json({tmp : tmpfolder, torrentname:filename, torrentpath:file.path});
                        }
                    });
                });

                engine.on('download', function(piece){
                    console.log(piece);
                });
            } else {
                res.json({status:'error'});
            }
        });
    }

    this.getTorrentFiles = function(res, hash) {
        
        var torrentLink  = 'http://torcache.net/torrent/'+hash+'.torrent';
        var tmpfolder    = __dirname+'/../../../public/tmp/';
        var torrentFiles = [];
        
        readTorrent(torrentLink, {}, function(err, torrent) {
            if(typeof torrent !== 'undefined'){

                //Création d'un stream torrent
                var engine = torrentStream(torrent, {tmp: tmpfolder, path:tmpfolder+'/myfile'});

                engine.on('ready', function() {
                    engine.files.forEach(function(file) {
                        torrentFiles.push(file.name);
                    });

                    res.json({name:torrent.name, files:torrentFiles});
                });
            }
        });
    }

    this.stopWatch = function(res, hash) {
        var torrentLink  = 'http://torcache.net/torrent/'+hash+'.torrent';
        
        readTorrent(torrentLink, {}, function(err, torrent) {
            if(typeof torrent !== 'undefined'){

                //Création d'un stream torrent
                var engine = torrentStream(torrent);
                engine.disconnect('127.0.0.1:6881')
                res.json({status:'success'});
            }
        });
    }

};


module.exports = new watch();