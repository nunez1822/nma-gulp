export class ContactForm {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string,
    public comments?: string
  ) {  }
}
