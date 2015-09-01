var React=require('react');
var CalcActions=require("./../actions/CalcActions");
var Header=React.createClass({
	getInitialState:function(){
		return{
			val1:'',
			val2:''
		}
	},
	render:function(){
		return(
			<header>
				<h1>Basic Arithmetic Operations</h1>
				<input placeholder="enter the number" value={this.state.val1} onChange={this._onChangeVal1}/><br/>
				<input placeholder="enter the number" value={this.state.val2} onChange={this._onChangeVal2}/><br/>
				<button onClick={this._calculate}>calculate</button>
			</header>
		)
	},
	_calculate:function(){
		if(this.state.val1&&this.state.val2)
		{
			var values={
				val1:this.state.val1,
				val2:this.state.val2
			}
			this.setState({val1:'',val2:''})
			CalcActions.create(values);
		}
		else{
			alert("enter all the values");
		}
	},
	_onChangeVal1:function(ev){
		this.setState({val1:ev.target.value})
	},
	_onChangeVal2:function(ev){
		this.setState({val2:ev.target.value})
	}
});
module.exports=Header;