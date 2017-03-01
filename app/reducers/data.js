function setData(state=[], action){ 
	
	switch(action.type){
		case 'GET_DATA':
			const newState = [...action.photos];
			console.log('newState', newState);

			return [...action.photos];
		default:
			return state;
	} 
}

export default setData;