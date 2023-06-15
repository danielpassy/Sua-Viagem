import { Request, Response } from 'express';
import tripService from '@/features/trips/services/auth';
import { CreateTripDto } from '@/features/trips/controllers/trips/trips.dto';

export const createTrip = async (req: Request<{}, {}, CreateTripDto>, res: Response) => {
  try {
    const trip = tripService.create(req.body);
    return res.status(201).json(trip);
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};

type Trip = object;

export const updateTrip = async (req: Request<{}, {}, Trip>, res: Response) => {
  try {
    const updatedTrip = await tripService.updateTrip(req.body);
    return res.status(200).json(updatedTrip);
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};

export const getTrips = async (req: Request, res: Response) => {
  try {
    const trips = await tripService.getTrips(req.user);
    return res.status(200).json({ trips });
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};
