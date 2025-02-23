export class AddQuote {
    name!: string;
    apiUrl!: string;
    active!: boolean;
    httpMethod!: string;
    headersKey!: string;
    headersValue!: string;



  constructor(name: string, apiUrl: string, active: boolean,httpMethod: string) {
    this.name = name;
    this.apiUrl = apiUrl;
    this.active = active;
    this.httpMethod = httpMethod;
  }

   // Add a method to combine the headers key and value into a map
   getHeadersMap(): { [key: string]: string } {
    const headersMap: { [key: string]: string } = {};
    if (this.headersKey && this.headersValue) {
        headersMap[this.headersKey] = this.headersValue;
    }
    return headersMap;
}
}
