import communicationService from '@/features/communications/services';

it('CommuncationEmail.sendEmail don`t error', () => {
  expect(() => {
    communicationService.sendEmail(['noone'], 'trip-invitation');
  }).not.toThrowError();
});
