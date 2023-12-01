// ProductCategoryController.ts
import { Request, Response } from "express";
import {
  CODE_SUCCESS,
  ERROR_BAD_REQUEST,
  CODE_CREATED_SUCCESS,
  returnResponse,
  returnPagingResponse,
  ERROR_NOT_FOUND,
} from "../helper/response";
import { calcPagination } from "../helper/paging";
import { City } from "../models/index";
import { getRepository } from "typeorm";

/**
 * @openapi
 * /v1/storm/list:
 *   get:
 *     summary: Get all storm
 *     parameters:
 *       - in: query
 *         name: cityName
 *         schema:
 *           type: string
 *           default: Ho Chi Minh  # Default value for pageSize
 *         description: The number of items to return per page.
 *     responses:
 *       '200':
 *         description: The data of the storm list has been successfully returned
 *       '400':
 *         description: The returned data is unsuccessful.
 */

export const getListStorm = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cityName = (req.query.cityName as string) || "";
    const cityRepository = getRepository(City);

    const queryBuilder1 = cityRepository
      .createQueryBuilder("city")
      .leftJoin("city.cityAreas", "cityAreas")
      .select(["city.id", "city.name", "cityAreas"])
      .where({
        name: cityName,
      })
      .orderBy("cityAreas.detectedTime", "ASC");

    const queryBuilder2 = cityRepository
      .createQueryBuilder("city")
      .leftJoin("city.cityAreas", "cityAreas")
      .select(["city.id", "city.name", "cityAreas"])
      .where("city.name != :cityName", {cityName})
      .orderBy("cityAreas.detectedTime", "ASC");

    let storms = await queryBuilder1.getMany();
    const storms2 = await queryBuilder2.getMany();
    storms.push(...storms2);

    res.send(storms);
  } catch (error) {
    console.error("Error while processing products:", error);
    res.status(500).send("Internal Server Error");
  }
};
