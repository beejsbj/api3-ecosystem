<script setup>
import { useStorage } from "@vueuse/core";

const ecosystem = useEcosystemStore();
const route = useRoute();
const step = ref({});

//
definePageMeta({
  title: "Add Dapp",
});

//
const dappForm = useStorage("dapp-form", {});

const submitHandler = () => {
  console.log(dappForm.value);
  console.log("submit");
};

const projectItem = {
  name: "ThirdFi",
  tagline: "DeFi Infra-Middleware with all in 1 API",
  description: [
    "ThirdFi is building DeFi infra-middleware that makes DeFi more accessible with API. Build, trade, invest and manage DeFi apps easily with ThirdFi’s API, sdk and developer tools",
    "ThirdFi is currently live on 11 L1/L2 chains. ThirdFi helps developers, fintech, and tradFi to build, invest & manage their DeFi with simple & dev-friendly tools using all-in-1 API integration.",
  ],
  categories: ["DeFi", "Infrastructure", "Developer Tool"],
  productTypes: ["Data Feeds"],
  proxies: [
    {
      proxyType: "OEV dAPI Proxy",
      feedName: "BTC/USD",
      dapiName: "BTC/USD",
      proxyAddress: "0x",
      oevBeneficiary: "0x",
      chainId: 137,
    },
    {
      proxyType: "OEV datafeed Proxy",
      feedName: "BTC/USD",
      datafeedId: "0x",
      proxyAddress: "0x",
      oevBeneficiary: "0x",
      chainId: 137,
    },
  ],
  year: "2023",
  chains: [
    {
      chainId: 1,
      name: "Ethereum",
    },
    {
      chainId: 137,
      name: "Polygon",
    },
    {
      name: "BNB",
      chainId: 56,
    },
    {
      name: "Avalanche",
      chainId: 43114,
    },
  ],
  links: {
    dapp: "https://neutra.finance/vault",
    doc: "https://docs.neutra.finance/english/",
    website: "https://neutra.finance/",
    explorer: "https://etherscan.io/",
    socials: [
      {
        label: "Twitter",
        url: "https://twitter.com/thirdfiorg",
      },
      {
        label: "Discord",
        url: "https://discord.com/invite/tcZ42jHZ5N",
      },
      {
        label: "Telegram",
        url: "https://t.me/NeutraFi_discussion",
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/channel/UCTJoXywam24P7nWlqCdPGZQ",
      },
      {
        label: "Github",
        url: "https://github.com/thirdfi",
      },
    ],
  },

  images: {
    logo: "https://global-uploads.webflow.com/61f7ce2e0e6cea2cab6c1739/646e821df3d109ac7b55097d_Yg8dkDcFsugbO3nXJwEWfylOXO6zT8TN8Ds7JOE7thk.jpeg",
    cover: "",
    banner: "",
    screenshots: [""],
  },
};

const handleCoverImage = (event) => {
  const file = event.target.files[0];
  console.log("file", file);
};

const handleFileInputChange = async (event) => {
  const file = event.target.files[0];
  const screenshots = event.target.files;

  const formData = new FormData();

  formData.append("logo", file);
  formData.append("cover", file);
  formData.append("banner", file);
  formData.append("screenshot1", screenshots[0]);
  formData.append("screenshot2", screenshots[1]);
  formData.append("screenshot3", screenshots[2]);
  formData.append("screenshot4", screenshots[3]);
  formData.append("name", projectItem.name);
  formData.append("tagline", projectItem.tagline);
  formData.append("description", projectItem.description);
  formData.append("categories", JSON.stringify(projectItem.categories));
  formData.append("productTypes", JSON.stringify(projectItem.productTypes));
  formData.append("chains", JSON.stringify(projectItem.chains));
  formData.append("links", JSON.stringify(projectItem.links));
  formData.append("proxies", JSON.stringify(projectItem.proxies));
  formData.append("year", projectItem.year);

  const res = await $fetch("/api/projects", {
    method: "POST",
    body: formData,
  });

  console.log("api response ", res);
};

const handleAdd = async () => {
  const listingPayload = {
    name: projectItem.name,
    tagline: projectItem.tagline,
    description: projectItem.description,
    categories: projectItem.categories,
    productTypes: projectItem.productTypes,
    links: projectItem.links,
    year: projectItem.year,
    images: projectItem.images,
  };

  const res = await $fetch("/api/projects", {
    method: "POST",
    body: listingPayload,
  });

  console.log("api response ", res);
};
</script>

<template>
  <SectionColumn>
    <button @click="handleAdd">Test add listing</button>
    <div class="text-center">
      Select image
      <input
        type="file"
        accept="image/*"
        multiple
        @change="handleFileInputChange"
      />
    </div>
    <ClientOnly>
      <FormKit
        type="form"
        :actions="false"
        v-auto-animate
        @submit="submitHandler"
      >
        <FormKit
          type="multi-step"
          tab-style="progress"
          :hide-progress-labels="true"
          v-auto-animate
        >
          <OwnerStep :dappForm="dappForm" key="1" />
          <ContentStep :dappForm="dappForm" key="2" />
          <ImageStep :dappForm="dappForm" key="3" />
          <TagStep :dappForm="dappForm" key="4" />
          <LinksStep :dappForm="dappForm" key="5" />
          <SocialsStep :dappForm="dappForm" key="6" />
          <StatusStep :dappForm="dappForm" key="7" />
        </FormKit>
      </FormKit>
    </ClientOnly>
  </SectionColumn>
</template>

<style lang="scss">
main.add-dapp {
  display: grid;
  align-items: center;
}
.formkit-outer[data-type="multi-step"] {
  & > .formkit-wrapper {
    max-width: unset;
    display: grid;
    align-items: center;

    @media (min-width: 768px) {
      grid-template-columns: 0.1fr 1fr;
      gap: 3rem;
    }
  }

  .notice-voice {
    //  font-size: var(--step-1);
  }

  & > [data-tab-style="progress"][data-hide-labels="true"] > .formkit-tabs {
    @media (min-width: 768px) {
      display: grid;
      min-height: 500px;

      button.formkit-tab {
        &::after {
          width: 0.25rem;
          height: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%);
          top: unset;
        }
      }
    }
  }

  & > [data-tab-style="progress"] > .formkit-steps {
    border: none;
    width: 100%;
    box-shadow: unset;
    padding: unset;
  }

  .formkit-inner {
    box-shadow: unset;
  }

  input.formkit-input {
    font-size: var(--step-1);
    border-radius: var(--corners);
  }
}

.formkit-step-actions {
  margin-bottom: 0rem !important;
  margin-top: 2rem !important;
  display: none;
}

.formSteps-enter-active,
.formSteps-leave-active {
  transition: opacity 0.5s ease;
}

.formSteps-enter-from,
.formSteps-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
