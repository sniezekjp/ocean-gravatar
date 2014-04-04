




/** 
 *    dependencies
 */
var crypto = require('crypto');





function gravatar(email, size, defaultImage){
	email.trim().toLowerCase();
	console.log(encodeURIComponent(defaultImage));

	var size = size || 50; 	
	var def  = defaultImage || 'blank'
	var hash = crypto.createHash('md5').update(email).digest('hex'); 
	var url  = 'http://gravatar.com/avatar/' + hash + '?s=' + size + '&d=' + def; 

	return url; 
}





/** 
 *    Expose gravatar fn
 */
module.exports = gravatar; 