function ModelName(options){
	
	var self = this;
	
	if(typeof(options) != 'function'){
		for(key in options){
			self[key] = options[key];
		}
		
		if(self.schema && self.mongoose){
			self.ModelNameSchema = self.schema({
				data: String
			});
			
			return self.mongoose.model('ModelName', self.ModelNameSchema);
		}
		else{
			console.log("[Error]: Few Parameters");
		}
	}
}

exports.new = ModelName;

/*
 * Add Model
 */
exports.add = function(Model,options,callback) {
	
	var Data = {};

	for(key in options){
		Data[key] = options[key];
	}
		
	var model = new Model(Data);

	model.save(function(err) {
		if (err) {
			console.log('ModelName Não Salvo');
			return(callback(null));
		}else{
			console.log('ModelName Salvo');
			return(callback(model));
		}
	});
};



/*
 * Change Model
 */
 exports.change = function(model,params,callback){
	
 	for(key in params){
		model[key] = params[key];
	}

	model.save(function(err) {
		if (err) {
			console.log('ModelName não modificado');
			return(callback(false));
		}
		console.log('ModelName modificado');
		return(callback(true));
	});
}