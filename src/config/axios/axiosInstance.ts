import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosConfig: AxiosRequestConfig = {
	baseURL: process.env.NEXT_PUBLIC_ANALYTICS_BASE_API_URL_LOCAL,
	timeout: 50000,
};

const instance: AxiosInstance = axios.create(axiosConfig);

class Request {
	async get(url: string): Promise<AxiosResponse> {
		return instance.get(url).then((res: any) => res.data);
	}
	async post(url: string, body: any): Promise<AxiosResponse> {
		return instance.post(url, body).then((res: any) => res.data);
	}
	async update(url: string, body: any): Promise<AxiosResponse> {
		return instance.patch(url, body).then((res: any) => res.data);
	}
	async delete(url: string): Promise<AxiosResponse> {
		return instance.delete(url).then((res: any) => res.data);
	}
}

const httpReq = new Request();

export default httpReq;
