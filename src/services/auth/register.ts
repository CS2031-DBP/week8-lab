import { AuthResponse } from "@interfaces/auth/AuthResponse";
import { RegisterRequest } from "@interfaces/auth/RegisterRequest";
import Api from "@services/api";

export async function register(data: RegisterRequest) {
	const api = await Api.getInstance();

	const response = await api.post<RegisterRequest, AuthResponse>(data, {
		url: "/auth/register",
	});

	return response.data;
}
