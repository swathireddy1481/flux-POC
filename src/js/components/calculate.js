var React=require('react');
var Header=require('./calcHeader');
var Output=require('./CalcOutput');
var CalcStore=require("./../stores/CalcStores");
var Calculate=React.createClass({
	getInitialState:function(){
		return{
			allValues:CalcStore.getAll()
		}
	},
	componentDidMount:function(){
		CalcStore.addChangeListener(this._onChange);
	},
	render:function(){
		return(
			<div>
				<Header/>
				<Output allValues={this.state.allValues}/>
			</div>
		)
	},
	_onChange:function(){
		this.setState({allValues:CalcStore.getAll()});
	}
});
module.exports=Calculate;