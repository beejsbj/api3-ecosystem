import axios from "axios";

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
      body.append("productType", dappForm.value?.productType);
      body.append("proxies", dappForm.value.proxies);
      body.append("year", 2021); //: todo fix year  productType form fix

      const links = {
        website: dappForm.value.links.website,
        dapp: dappForm.value.links.dapp,
        docs: dappForm.value.links.docs,
        explorer: dappForm.value.links.explorer,
        socials: [],
      };

      if (dappForm?.value?.links?.socials?.twitter) {
        links.socials.push({
          label: "twitter",
          url: dappForm?.value?.links.socials.twitter,
        });
      }

      if (dappForm?.value?.links?.socials?.discord) {
        links.socials.push({
          label: "discord",
          url: dappForm?.value?.links.socials.discord,
        });
      }

      if (dappForm?.value?.links?.socials?.reddit) {
        links.socials.push({
          label: "reddit",
          url: dappForm?.value?.links.socials.reddit,
        });
      }

      if (dappForm?.value?.links?.socials?.github) {
        links.socials.push({
          label: "github",
          url: dappForm?.value?.links?.socials?.github,
        });
      }

      if (dappForm?.value?.links?.socials?.telegram) {
        links.socials.push({
          label: "telegram",
          url: dappForm?.value?.links.socials.telegram,
        });
      }

      if (dappForm?.value?.links?.socials?.facebook) {
        links.socials.push({
          label: "facebook",
          url: dappForm?.value?.links.socials.facebook,
        });
      }

      if (dappForm?.value?.links?.socials?.instagram) {
        links.socials.push({
          label: "instagram",
          url: dappForm?.value?.links.socials.instagram,
        });
      }

      if (dappForm?.value?.links?.socials?.youtube) {
        links.socials.push({
          label: "youtube",
          url: dappForm?.value?.links.socials.youtube,
        });
      }

      if (dappForm?.value?.links?.socials?.blog) {
        links.socials.push({
          label: "blog",
          url: dappForm?.value?.links.socials.blog,
        });
      }

      body.append("links", JSON.stringify(links));

      // todo: fix proxies selection
      const testProxies = [
        {
          proxyType: "OEV dAPI Proxy",
          feedName: "BTC/USD",
          dapiName: "BTC/USD",
          proxyAddress: "0x",
          oevBeneficiary: "0x",
          chainId: 137,
        },
      ];
      body.append("proxies", JSON.stringify(testProxies));

      // images
      body.append("logo", dappForm.value.images.logo);
      body.append("banner", dappForm.value.images.banner);

      dappForm.value.images?.screenshots.forEach((fileItem, index) => {
        console.log(fileItem);
        body.append(`screenshot${index + 1}`, fileItem);
      });

      const response = await axios.post("/api/projects", body, {
        headers: {
          Authorization: token,
        },
      });

      if (response.status === 201) {
        return { success: true, message: "Project submitted" };
      } else {
        return { success: false, message: "Failed at server" };
      }
    } catch (error) {
      console.log("submit response error ", {
        error: error,
      });
      return { success: false, message: "Something went wrong" };
    }
  };

  return { submitProject };
};
