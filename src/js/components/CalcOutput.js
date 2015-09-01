var React=require('react');
var CalcActions=require("./../actions/CalcActions");
//var Addition=require('./Addition');
var Output=React.createClass({
	render:function(){
		if(Object.keys(this.props.allValues).length<1){
			return null;
		}
		return(
			<div id='output'>
				Addition is: {this.props.allValues.val1+this.props.allValues.val2}
				<br/>
				Substraction is:{this.props.allValues.val1-this.props.allValues.val2}
				<br/>
				multiplication is:{this.props.allValues.val1*this.props.allValues.val2}
				<br/>
				<button onClick={this._destroyAll}>Reset</button>
			</div>
		)
	},
	_destroyAll:function(){
		CalcActions.destroyAll();
	},
})
module.exports=Output;
