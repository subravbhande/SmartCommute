import { plannedJourney } from "../data/journeys";
import { liveJourney } from "../data/liveJourney";

export const getPlannedJourney = async () => {
  return new Promise((res) => setTimeout(() => res(plannedJourney), 700));
};

export const getLiveJourney = async () => {
  return new Promise((res) => setTimeout(() => res(liveJourney), 700));
};
export const getJourneyById = async (id) => {
  const journey = plannedJourney.find((journey) => journey.id === id);
  return new Promise((res) => setTimeout(() => res(journey), 700));
}