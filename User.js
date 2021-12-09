export default (mongoose) => {
	const user = mongoose.Schema({
		login: String,
		password: String,
	});
	return mongoose.model("User", user);
};
