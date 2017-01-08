var exec = require('child_process').exec;
module.exports = {
    get: (successCallback, errorCallback) => {
        var command = "arp -a";
        exec(command, function(error, stdout, stderr) {
            if(error) {
                errorCallback(error);
                return;
            }
           var lines = stdout.split("\n");
           var output = [];
           var interface = "Unknown";
           for (x in lines) {
               var line = lines[x];
               if(line.indexOf('Interface:') !== -1) {
                  interface = line.trim().replace('Interface: ','');
               }
              else if(line.indexOf('Internet Address') === -1) {
                    var columns = line.trim().split(' ');
                    output.push({
                        'InternetAddress': columns[0],
                        'PhysicalAddress': columns[1],
                        'Type': columns[2],
                        'Interface': interface
                    });
              }
           }
           successCallback(output);
        });
    }
}