import validateBody from '@/middlewares/validate.middleware';
import express from 'express';
import { CreateTripDto } from '@/features/trips/controllers/trips/trips.dto';

const TripsRouter = express.Router();

TripsRouter.post('/trips/:tripId');
TripsRouter.post('/trips', validateBody(CreateTripDto), login);
TripsRouter.delete('/trips/:tripId', deleteTrip);
TripsRouter.get('/trips', login);

export default TripsRouter;
