
import { Category } from "./category";

export class Moment {
  id: number;
  nasaId: string;
  title: string;
  description: string;
  href: string;
  category: Category;
  createdBy: string;
  creationDate: Date;

  constructor() {
    this.title = '';
    this.description = '';
    this.href = '';
    this.category = new Category();
  }
}
