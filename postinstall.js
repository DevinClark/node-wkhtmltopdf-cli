var spawn = require('child_process').exec;
// var process = require('process');

spawn('which npm', function(err, stdout, stderr) {
  var global_bin = stdout.replace('\n', '');
  var ld = process.env['LD_LIBRARY_PATH'];
  // console.log(global_bin);

  console.log(ld);

  if ((ld && ld.indexOf(global_bin) === -1) || !ld) {
    if (!ld || ld.length > 0) {
      console.log('export LD_LIBRARY_PATH=' + (ld ? ('"' + ld + ':') : '"') + global_bin + '"');
      spawn('export LD_LIBRARY_PATH=' + (ld ? ('"' + ld + ':') : '"') + global_bin + '"', function (a, b, c) {
        console.log(process.env['LD_LIBRARY_PATH']);
        console.log(arguments);
      });
    } else {
      console.log('export LD_LIBRARY_PATH=' + '"' + global_bin + '"');
      spawn('export LD_LIBRARY_PATH=' + '"' + global_bin + '"', function (a, b, c) {
        console.log(process.env['LD_LIBRARY_PATH']);
        console.log(arguments);
      });
    }
  }
});
