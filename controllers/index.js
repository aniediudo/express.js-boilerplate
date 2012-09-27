/*
 *	GET index 
 */
exports.main = function(req,res){
	
	var _html = '<html>\
					<body>\
						<h1>Project Name</h1>\
					</body>\
				</html>';
	
	res.send(_html);
}
