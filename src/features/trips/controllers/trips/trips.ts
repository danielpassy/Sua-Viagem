import { Request, Response } from 'express';
import { CreateTripDto, ListTripDto, UpdateTripDto } from '@/features/trips/controllers/trips/trips.dto';
import tripService from '@/features/trips/services';

export const createTrip = async (req: Request<{}, {}, CreateTripDto>, res: Response) => {
  try {
    const trip = tripService.create(req.body, req.user as string);
    return res.status(201).json(trip);
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};

export const updateTrip = async (req: Request<{ tripId: string }, {}, UpdateTripDto>, res: Response) => {
  try {
    const updatedTrip = await tripService.update(req.body, req.params.tripId, req.user as string);
    return res.status(200).json(updatedTrip);
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};

export const deleteTrip = async (req: Request<{ tripId: string }, {}, {}>, res: Response) => {
  try {
    const updatedTrip = await tripService.update(req.body, req.query.tripId, req.user as string);
    return res.status(200).json(updatedTrip);
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};

export const listTrips = async (req: Request<{}, {}, {}, ListTripDto>, res: Response) => {
  try {
    const trips = await tripService.list(req.user as string, req.query);
    return res.status(200).json({ trips });
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};
