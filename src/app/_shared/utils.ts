import { AGGREGATES } from "./constants/aggregates";
import { CONCRETE_PROPORTIONS } from "./constants/concrete-proportion";
import { Aggregates } from "./models/concrete-models";

export function calculateAggregates(proportionClass: string, volume: number, cementBag: string): Aggregates {
  const propClass = CONCRETE_PROPORTIONS.find(cp => cp.class === proportionClass);
  let cement=0, sand=0, gravel=0;
  if (propClass) {
    sand = +(volume * propClass.sand).toFixed(3);
    gravel = +(volume * propClass.gravel).toFixed(3);
    if (cementBag === '40') {
      cement = +(volume * propClass.cementInBag40kg).toFixed(3);
    } else if (cementBag === '50') {
      cement = +(volume * propClass.cementInBag50kg).toFixed(3);
    }
  }
  return {cement, sand, gravel};
}