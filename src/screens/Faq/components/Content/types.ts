export interface ContentType {
  content: {
    question: string;
    answer: React.ReactNode | string;
    list?: {
      title: string;
      description: React.ReactNode | string;
    }[];
  }[];
}
