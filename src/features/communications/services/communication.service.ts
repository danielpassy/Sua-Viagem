import config from '@/config';
import * as fs from 'fs';

function loadTemplate(emailTemplate: EmailTemplate): string {
  return fs.readFileSync(config.TEMPLATE_PATH + TemplateFileMap[emailTemplate], 'utf-8');
}

const TemplateFileMap = {
  'trip-invitation': 'trip-invitation.html',
  'trip-confirmation': 'trip-confirmation.html',
  'trip-reminder': 'trip-reminder.html',
  'trip-cancellation': 'trip-cancellation.html'
};

type EmailTemplate = 'trip-invitation' | 'trip-confirmation' | 'trip-reminder' | 'trip-cancellation';

class CommunicationService {
  constructor(private readonly emailProvider: any) {}

  sendEmail(to: string[], type: EmailTemplate) {
    const template = loadTemplate(type);
    return this.emailProvider.sendEmail(template);
  }
}

export default CommunicationService;
