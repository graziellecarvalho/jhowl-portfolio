interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

export class ApiService {
  private baseUrl: string;

  constructor() {
    // Use environment variable or default to your API
    this.baseUrl = (import.meta as any).env?.VITE_API_URL || 'https://api.jhowl.com';
  }

  async sendContactForm(formData: ContactFormData): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors',
      });

      // Check for 502 Bad Gateway specifically
      if (response.status === 502) {
        return {
          error: 'API server is currently unavailable (502 Bad Gateway). Please try again later or contact the administrator.'
        };
      }

      const data = await response.json();

      if (!response.ok) {
        console.error('API Error Response:', data);
        return {
          error: data.error || `HTTP ${response.status}: Failed to send message`
        };
      }

      return {
        success: true,
        message: data.message || 'Message sent successfully!'
      };
    } catch (error) {
      console.error('API request error:', error);
      
      // Check if it's a CORS error
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        return {
          error: 'CORS Error: Unable to connect to the API. Please check if the API is accessible.'
        };
      }
      
      return {
        error: 'Network error. Please check your connection and try again.'
      };
    }
  }

  async checkHealth(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/api/health`, {
        mode: 'cors',
      });
      return response.ok;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }
}

// Create a singleton instance
const apiService = new ApiService();
export default apiService; 