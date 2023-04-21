import { AGGREGATES } from "./constants/aggregates";
import { CONCRETE_PROPORTIONS } from "./constants/concrete-proportion";
import { Aggregates } from "./models/concrete-models";

export function calculateAggregates(proportionClass: string, volume: number, cementBag: string): Aggregates {
  const propClass = CONCRETE_PROPORTIONS.find(cp => cp.class === proportionClass);
  let aggregates = AGGREGATES;
  if (propClass) {
    aggregates.sand = +volume * +propClass.sand;
    aggregates.gravel = +volume * +propClass.gravel;
    if (cementBag === '40') {
      aggregates.cement = +volume * +propClass.cementInBag40kg;
    } else if (cementBag === '50') {
      aggregates.cement = +volume * +propClass.cementInBag50kg;
    }
  }
  return aggregates;
}