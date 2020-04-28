export class Category {
  id: Number;
  name: string;
  description: string;
  createdBy: string;
  creationDate: Date;

  constructor() {
    this.name = '';
    this.description = '';
    this.creationDate = new Date();
  }
}