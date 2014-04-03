




/** 
 *    dependencies
 */
var crypto = require('crypto');





function gravatar(email, size){
	email.trim().toLowerCase();

	var size = size || 50; 	
	var hash = crypto.createHash('md5').update(email).digest('hex'); 
	var url  = 'http://gravatar.com/avatar/' + hash + '?s=' + size; 

	return url; 
}





/** 
 *    Expose gravatar fn
 */
module.exports = gravatar; 