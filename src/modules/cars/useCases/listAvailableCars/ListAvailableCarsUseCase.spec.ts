import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      brand: "Audi",
      category_id: "category_id",
      daily_rate: 110.0,
      description: "Car description 1",
      fine_amount: 10,
      license_plate: "FEF-6666",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      brand: "Audi_brand",
      category_id: "category_id",
      daily_rate: 110.0,
      description: "Car description 1",
      fine_amount: 10,
      license_plate: "FEF-6666",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Audi_brand",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      brand: "Audi_brand",
      category_id: "category_id",
      daily_rate: 110.0,
      description: "Car description 1",
      fine_amount: 10,
      license_plate: "FEF-6666",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car 1",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      brand: "Audi_brand",
      category_id: "12345",
      daily_rate: 110.0,
      description: "Car description 1",
      fine_amount: 10,
      license_plate: "FEF-6666",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
