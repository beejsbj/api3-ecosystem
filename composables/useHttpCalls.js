export const useHttpCalls = () => {
  const submitProject = async (dappForm, token) => {
    try {
      const body = new FormData();

      // append dappform to body, dappForm is vue reactive, so needs .value
      body.append("name", dappForm.value.name);
      body.append("tagline", dappForm.value.tagline);
      body.append("description", dappForm.value.description);
      body.append("chains", JSON.stringify(dappForm.value.chains));
      body.append("categories", JSON.stringify(dappForm.value.categories));
      body.append("productType", dappForm.value.productType);
      body.append("proxies", dappForm.value.proxies);
      body.append("year", dappForm.value.year);
      body.append("links", JSON.stringify(dappForm.value.links));

      // images
      body.append("logo", dappForm.value.images.logo);
      body.append("banner", dappForm.value.images.banner);
      body.append("cover", dappForm.value.images.banner);

      // dappForm.value.images?.screenshots.forEach((fileItem, index) => {
      //   console.log(fileItem);
      //   body.append(`screenshot-${index + 1}`, fileItem.file);
      // });

      // testing screenshot upload
      body.append(`screenshot1`, dappForm.value.images.logo);
      body.append(`screenshot2`, dappForm.value.images.logo);
      body.append(`screenshot3`, dappForm.value.images.logo);
      body.append(`screenshot4`, dappForm.value.images.logo);

      const response = await $fetch("/api/projects", {
        method: "POST",
        body: body,
        headers: {
          Authorization: token,
        },
      });

      console.log("submit response ", { response });

      if (response.status !== 201) {
        return { success: true };
      } else {
        return { success: false, message: "Failed at server" };
      }
    } catch (error) {
      console.log("submit response error ", { error });
      return { success: false, message: "Something went wrong" };
    }
  };

  return { submitProject };
};
