import { Request, Response } from 'express';
import tripService from '@/features/trips/services/auth';
import { CreateTripDto } from '@/features/trips/controllers/trips/trips.dto';
import { UserDocument } from '@/features/models';

export const createTrip = async (req: Request<{}, {}, CreateTripDto>, res: Response) => {
  try {
    const trip = tripService.create(req.body, req.user as UserDocument);
    return res.status(201).json(trip);
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};

type Trip = object;

export const updateTrip = async (req: Request<{}, {}, Trip>, res: Response) => {
  try {
    const updatedTrip = await tripService.update(req.body, req.query.tripId, req.user as UserDocument);
    return res.status(200).json(updatedTrip);
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};

export const deleteTrip = async (req: Request<{}, {}, Trip>, res: Response) => {
  try {
    const updatedTrip = await tripService.update(req.body, req.query.tripId, req.user as UserDocument);
    return res.status(200).json(updatedTrip);
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};

export const listTrips = async (req: Request, res: Response) => {
  try {
    const trips = await tripService.list(req.user as UserDocument);
    return res.status(200).json({ trips });
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};
