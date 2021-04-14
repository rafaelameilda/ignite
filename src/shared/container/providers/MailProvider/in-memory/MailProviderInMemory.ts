import { IMailProvider } from "../IMailProvider";

class MailProviderInMemory implements IMailProvider {
  private email: any[] = [];
  async sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string
  ): Promise<void> {
    this.email.push({
      to,
      subject,
      path,
      variables,
    });
  }
}

export { MailProviderInMemory };
