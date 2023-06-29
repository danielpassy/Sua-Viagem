import CommunicationService from './communication.service';

class fakeEmailProvider {
  sendEmail(template: string) {
    return template;
  }
}

const communicationService = new CommunicationService(new fakeEmailProvider());
export default communicationService;
