var AppDispatcher=require("./../dispatcher/AppDispatcher");
var CalcConstants=require("./../constants/CalcConstants");
var EventEmitter=require("events").EventEmitter;
var _values={};
EventEmitter=new EventEmitter();
var CalcStore={
	create:function(values){
	    _values=values;
	},
	destroyAll:function(){
		_values={};
	},
	emitChange:function(){
		EventEmitter.emit('change');
	},
	getAll:function(){
		return _values;
	},
	addChangeListener:function(callback){
		EventEmitter.on("change",callback);
	}
}
AppDispatcher.register(function(payload){
	switch(payload.actionType){

		case CalcConstants.CALC_CREATE:
			for(i in payload.values){
				payload.values[i]=parseInt(payload.values[i]);
			}
			CalcStore.create(payload.values);
			CalcStore.emitChange();
			break;
		case CalcConstants.CALC_DESTROY_ALL:
			CalcStore.destroyAll();
			CalcStore.emitChange();
			break;

		default:
	}
})
module.exports=CalcStore;