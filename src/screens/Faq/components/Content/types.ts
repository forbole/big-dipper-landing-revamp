export interface ContentType {
  content: {
    answer: React.ReactNode | string;
    list?: {
      description: React.ReactNode | string;
      title: string;
    }[];
    question: string;
  }[];
}
