$(document).ready(function(){
	jsonCreator.init();
});
var jsonCreator={
	init:function(){
		this.generate=$("#json");
		this.bind();
	},
	bind:function(){
		this.generate.on("click",this.generateAction);
	},
	generateAction:function(){
		var statesArray=$("#board").val().split("\n");
		var modifiedArray=[];
		var stateObj={};
		for(var i=0;i<statesArray.length;i++){
			stateObj={};
			stateObj.name=statesArray[i];
			modifiedArray.push(stateObj);
		}
		console.log(JSON.stringify(modifiedArray));
	}
};