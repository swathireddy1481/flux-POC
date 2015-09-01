var AppDispatcher=require("./../dispatcher/AppDispatcher");
var CalcConstants=require("./../constants/CalcConstants");
var CalcActions={
	create:function(values){
		AppDispatcher.dispatch({
			actionType:CalcConstants.CALC_CREATE,
			values:values
		});
	},
	destroyAll:function(){
		AppDispatcher.dispatch({
			actionType:CalcConstants.CALC_DESTROY_ALL
		});
	}
}
module.exports=CalcActions;