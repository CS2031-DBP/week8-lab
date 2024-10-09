import React from "react";

interface RegisterData {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	age: number;
	description: string;
	password: string;
}

function Register() {
	const register: RegisterData = {
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		age: 0,
		description: "",
		password: "",
	};

	function firstnameChange(e: React.ChangeEvent<HTMLInputElement>) {
		register.firstname = e.target.value;
	}

	function lastnameChange(e: React.ChangeEvent<HTMLInputElement>) {
		register.lastname = e.target.value;
	}

	function emailChange(e: React.ChangeEvent<HTMLInputElement>) {
		register.email = e.target.value;
	}

	function phoneChange(e: React.ChangeEvent<HTMLInputElement>) {
		register.phone = e.target.value;
	}

	function ageChange(e: React.ChangeEvent<HTMLInputElement>) {
		register.age = parseInt(e.target.value);
	}

	function descriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		register.description = e.target.value;
	}

	function passwordChange(e: React.ChangeEvent<HTMLInputElement>) {
		register.password = e.target.value;
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log(register);
	}

	return (
		<div className="w-full flex justify-center items-center">
			<article className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 bg-secondary-200 sm:rounded-xl sm:my-5 px-10 py-4 flex flex-col items-center">
				<h1 className="text-2xl font-bold mb-3">Register Form</h1>
				<form onSubmit={handleSubmit}>
					<section className="w-full sm:flex justify-between">
						<div className="m-0 sm:mr-2">
							<label htmlFor="firstname">Firstname: </label>
							<input
								type="text"
								name="firstname"
								required
								onChange={firstnameChange}
							/>
						</div>
						<div>
							<label htmlFor="lastname">Lastname: </label>
							<input
								type="text"
								name="lastname"
								required
								onChange={lastnameChange}
							/>
						</div>
					</section>
					<section>
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							name="email"
							required
							onChange={emailChange}
						/>
					</section>
					<section>
						<label htmlFor="phone">Phone:</label>
						<input
							type="text"
							name="phone"
							required
							onChange={phoneChange}
						/>
					</section>
					<section>
						<label htmlFor="age">Age:</label>
						<input
							type="number"
							name="age"
							required
							onChange={ageChange}
						/>
					</section>
					<section>
						<label htmlFor="description">Description:</label>
						<textarea
							name="description"
							required
							onChange={descriptionChange}
						></textarea>
					</section>
					<section>
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							name="password"
							id="password"
							required
							onChange={passwordChange}
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

export default Register;
