import { CarImage } from "../infra/typeorm/entities/CarImage";

interface ICarsImagesRepository {
  create(card_id: string, image_name: string): Promise<CarImage>;
}

export { ICarsImagesRepository };
