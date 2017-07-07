function createParticipant (uuid) {
	return {
		display_name: 'New Participant',
		email: '',
		role: '',
		userid: '',
		uuid,
	};
}


export default {
	createParticipant,
}
