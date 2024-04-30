import FishWrapper from '@/components/FishWrapper/FishWrapper';
import { getFish } from "@/services/fishApi";

export default async function FishPage() {
  const fish = await getFish();

  return fish.length ? (
    <FishWrapper fish={fish}></FishWrapper>
  ) : (
    <p>No fish found</p>
  );
}