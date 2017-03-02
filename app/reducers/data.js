
function setData(state=[], action){ 
	switch(action.type){
		case 'GET_DATA':
			return [...action.photos];
		default:
			return state;
	} 
}

export default setData;