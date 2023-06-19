import validateBody from '@/middlewares/validate.middleware';
import express from 'express';
import { CreateTripDto } from '@/features/trips/controllers/trips/trips.dto';
import { createTrip, deleteTrip, listTrips, updateTrip } from '@/features/trips/controllers/trips/trips';
import AuthMiddleware from '@/middlewares/auth.middleware';

const TripsRouter = express.Router();

TripsRouter.use(AuthMiddleware);
TripsRouter.post('/:tripId', updateTrip);
TripsRouter.post('', validateBody(CreateTripDto), createTrip);
TripsRouter.delete(':tripId', deleteTrip);
TripsRouter.get('', listTrips);
export default TripsRouter;
