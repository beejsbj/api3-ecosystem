import { Project } from "~/server/models/Project";

export default defineEventHandler(async (event) => {
  try {
    const stats = await Project.aggregate([
      {
        $facet: {
          chains: [
            { $unwind: "$chains" },
            {
              $group: {
                _id: { chainId: "$chains.chainId", name: "$chains.name" },
                count: { $sum: 1 },
              },
            },
          ],
          categories: [
            { $unwind: "$categories" },
            {
              $group: {
                _id: "$categories",
                count: { $sum: 1 },
              },
            },
          ],
          productTypes: [
            { $unwind: "$productTypes" },
            {
              $group: {
                _id: "$productTypes",
                count: { $sum: 1 },
              },
            },
          ],
          years: [
            { $unwind: "$year" },
            {
              $group: {
                _id: "$year",
                count: { $sum: 1 },
              },
            },
          ],
        },
      },
    ]);

    const statsObject = stats?.[0];
    const chains = statsObject.chains.map((el: any) => {
      return {
        chainId: el?._id?.chainId,
        name: el?._id?.name,
        count: el?.count,
      };
    });
    const categories = statsObject.categories.map((el: any) => {
      return {
        name: el?._id,
        count: el?.count,
      };
    });
    const productTypes = statsObject.productTypes.map((el: any) => {
      return {
        name: el?._id,
        count: el?.count,
      };
    });
    const years = statsObject.years.map((el: any) => {
      return {
        name: el?._id,
        count: el?.count,
      };
    });
    const finalPayload = { chains, categories, productTypes, years };

    return finalPayload;
  } catch (err) {
    console.log(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});
