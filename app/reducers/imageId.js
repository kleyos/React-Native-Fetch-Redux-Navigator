function setImageId(state='', action){ 
	
	switch(action.type){
		case 'GO_TO_SINGLE':
			
			const newState = action.id;
			console.log('newState imageId', newState);

			return newState;
		default:
			return state;
	} 
}

export default setImageId;