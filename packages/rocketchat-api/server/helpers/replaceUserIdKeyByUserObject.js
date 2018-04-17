RocketChat.API.helperMethods.set('replaceUserIdKeyByUserObject', function _addUserToObject({ object, userId }) {
	const { username, name } = RocketChat.models.Users.findOneById(userId);
	if (object.hasOwnProperty('userId')) {
		delete object.userId;
	}
	object.user = {
		_id: userId,
		username,
		name
	};

	return object;
});

