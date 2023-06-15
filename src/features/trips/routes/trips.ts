import validateBody from '@/middlewares/validate.middleware';
import express from 'express';
import { CreateTripDto } from '@/features/trips/controllers/trips/trips.dto';
import { createTrip, deleteTrip, getTrips } from '@/features/trips/controllers/trips/trips';

const TripsRouter = express.Router();

TripsRouter.post(':tripId');
TripsRouter.post('', validateBody(CreateTripDto), createTrip);
TripsRouter.delete(':tripId', deleteTrip);
TripsRouter.get('', getTrips);

export default TripsRouter;