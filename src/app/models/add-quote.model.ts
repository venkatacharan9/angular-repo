export class AddQuote {
    name!: string;
    apiUrl!: string;
    active!: boolean;


  constructor(name: string, apiUrl: string, active: boolean) {
    this.name = name;
    this.apiUrl = apiUrl;
    this.active = active;
  }
}
