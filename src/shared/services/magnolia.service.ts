import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { config } from '../../config';

class MagnoliaService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: `${config.magnolia.baseUrl}${config.magnolia.apiPath}`,
      timeout: config.magnolia.timeout,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor for logging
    this.client.interceptors.request.use(
      (config) => {
        console.log(`[Magnolia API] ${config.method?.toUpperCase()} ${config.url}`);
        return config;
      },
      (error) => {
        console.error('[Magnolia API] Request error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('[Magnolia API] Response error:', error.message);
        return Promise.reject(error);
      }
    );
  }

  /**
   * Forward GET request to Magnolia
   */
  async get(path: string, params?: Record<string, unknown>) {
    try {
      const response = await this.client.get(path, { params });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Forward POST request to Magnolia
   */
  async post(path: string, data?: unknown, options?: AxiosRequestConfig) {
    try {
      const response = await this.client.post(path, data, options);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Forward PUT request to Magnolia
   */
  async put(path: string, data?: unknown, options?: AxiosRequestConfig) {
    try {
      const response = await this.client.put(path, data, options);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Forward DELETE request to Magnolia
   */
  async delete(path: string, options?: AxiosRequestConfig) {
    try {
      const response = await this.client.delete(path, options);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Handle and format errors
   */
  private handleError(error: unknown): Error {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || error.message;
      const status = error.response?.status;
      return new Error(`Magnolia API Error (${status}): ${message}`);
    }
    return error instanceof Error ? error : new Error('Unknown error occurred');
  }
}

export const magnoliaService = new MagnoliaService();
