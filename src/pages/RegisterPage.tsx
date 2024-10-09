import { RegisterRequest } from "@interfaces/auth/RegisterRequest";
import { register } from "@services/auth/register";
import { useState } from "react";

export default function RegisterPage() {
	const [registerRequest, setRegisterRequest] = useState<RegisterRequest>({
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		age: 0,
		description: "",
		password: "",
	});

	async function handleSubmit(registerRequest: RegisterRequest) {
		try {
			const response = await register(registerRequest);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="size-full flex justify-center items-center">
			<article className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 bg-secondary-200 sm:rounded-xl sm:my-5 px-10 py-4 flex flex-col items-center">
				<h1 className="text-2xl font-bold mb-3">Register Form</h1>

				<form onSubmit={() => handleSubmit(registerRequest)}>
					<section className="w-full sm:flex justify-between">
						<div className="m-0 sm:mr-2">
							<label htmlFor="firstname">Firstname: </label>
							<input
								type="text"
								name="firstname"
								required
								onChange={(e) =>
									setRegisterRequest({
										...registerRequest,
										firstname: e.target.value,
									})
								}
							/>
						</div>
						<div>
							<label htmlFor="lastname">Lastname: </label>
							<input
								type="text"
								name="lastname"
								required
								onChange={(e) =>
									setRegisterRequest({
										...registerRequest,
										lastname: e.target.value,
									})
								}
							/>
						</div>
					</section>

					<section>
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							name="email"
							required
							onChange={(e) =>
								setRegisterRequest({
									...registerRequest,
									email: e.target.value,
								})
							}
						/>
					</section>

					<section>
						<label htmlFor="phone">Phone:</label>
						<input
							type="text"
							name="phone"
							required
							onChange={(e) =>
								setRegisterRequest({
									...registerRequest,
									phone: e.target.value,
								})
							}
						/>
					</section>

					<section>
						<label htmlFor="age">Age:</label>
						<input
							type="number"
							name="age"
							required
							onChange={(e) =>
								setRegisterRequest({
									...registerRequest,
									age: parseInt(e.target.value),
								})
							}
						/>
					</section>

					<section>
						<label htmlFor="description">Description:</label>
						<textarea
							name="description"
							required
							onChange={(e) =>
								setRegisterRequest({
									...registerRequest,
									description: e.target.value,
								})
							}
						></textarea>
					</section>

					<section>
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							name="password"
							id="password"
							required
							onChange={(e) =>
								setRegisterRequest({
									...registerRequest,
									password: e.target.value,
								})
							}
						/>
					</section>

					<section>
						<label htmlFor="repeatPassword">Repeat Password:</label>
						<input type="password" name="repeatPassword" required />
					</section>

					<section className="w-full flex justify-center">
						<button className="bg-gray-500 px-10 mt-1 py-1 rounded-full text-white font-bold">
							Submit
						</button>
					</section>
				</form>
			</article>
		</div>
	);
}
