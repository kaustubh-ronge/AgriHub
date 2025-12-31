export type MessageRole = 'user' | 'model';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: Date;
}

export type Language = 'english' | 'marathi' | 'hindi';

export interface ChatResponse {
  success: boolean;
  aiMessage?: Message;
  error?: string;
}