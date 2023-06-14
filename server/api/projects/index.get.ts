import { Project } from "~/server/models/Project";

export default defineEventHandler(async (event) => {
  try {
    const {
      page,
      searchKey,
      categories,
      chains,
      productTypes,
      years,
      orderBy,
      orderDirection,
    }: any = getQuery(event);

    const _page = page || 1;

    const limit = _page * 10;
    const skips = (_page - 1) * 10;

    console.log("query ", getQuery(event));

    // input text key will seach in
    // key string in
    // . name
    //.  key text includes in any category
    // . key inludes in any chain name
    // . key includes in any product types
    // . key name includes in any year string
    // .

    // +and+

    // option selection search in :
    // . filter by project categories in
    // . filter by project chains in
    // . filter by product types in
    // . filter by years in

    // +and+

    // order by keys
    // name
    // release date

    let searchFilters: any = {};
    let selectionFilters: any = {};

    // search key query:
    if (searchKey) {
      searchFilters = {
        $or: [
          { name: { $regex: searchKey, $options: "i" } },
          {
            chains: {
              $elemMatch: { name: { $regex: searchKey, $options: "i" } },
            },
          },
          { categories: { $regex: searchKey, $options: "i" } },
          { productTypes: { $regex: searchKey, $options: "i" } },
          { year: { $regex: searchKey, $options: "i" } },
        ],
      };
    }

    if (categories?.split(",")?.length > 0) {
      const categoriesArray = categories?.split(",");
      selectionFilters.categories = { $all: categoriesArray };
    }

    if (productTypes?.split(",")?.length > 0) {
      const productTypesArray = productTypes?.split(",");
      selectionFilters.productTypes = { $all: productTypesArray };
    }

    if (years?.split(",")?.length > 0) {
      const yearsArray = years?.split(",");
      selectionFilters.year = { $in: yearsArray };
    }

    if (chains?.split(",")?.length > 0) {
      const chainsArray = chains?.split(",")?.map((ele: any) => parseInt(ele));
      selectionFilters.chains = {
        $elemMatch: {
          chainId: { $in: chainsArray },
        },
      };
    }

    const finalFilter = { $and: [searchFilters, selectionFilters] };

    let projects = await Project.find(finalFilter)
      .skip(skips)
      .limit(limit)
      .sort({ year: -1 });

    return projects;
  } catch (err: any) {
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});
