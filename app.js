export default function appScr(express, mongoose, CORS, login, bodyParser, user) {
	const headerText = {"Content-Type": "text/html; charset=utf-8", ...CORS};
	const app = express();
	app.use(bodyParser.urlencoded({extended: true}))
		.all("/", (r) => {
			r.res.send(login);
		})
		.all("/login", (r) => {
			r.res.send(login);
		})
		.all("/insert/", async (r) => {
			r.res.set(headerText);
			const {login, password, URL} = r.body;
			const newUser = new user({login, password});
			try {
				await mongoose.connect(URL, {useNewUrlPaser: true, useUnifiedTopology: true});
				try {
					await newUser.save();
					r.res.status(201).json({"Добавлено: ": login});
				} catch (error) {
					r.res.status(400).json({"Ошибка: ": "Нет пароля"});
				}
			} catch (error) {
				console.log(error);
			}
		});

	return app;
}
