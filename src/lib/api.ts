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
    // Use environment variable or default to localhost
    this.baseUrl = (import.meta as any).env?.VITE_API_URL || 'http://localhost:3001';
  }

  async sendContactForm(formData: ContactFormData): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          error: data.error || 'Failed to send message'
        };
      }

      return {
        success: true,
        message: data.message || 'Message sent successfully!'
      };
    } catch (error) {
      console.error('API request error:', error);
      return {
        error: 'Network error. Please check your connection and try again.'
      };
    }
  }

  async checkHealth(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/api/health`);
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