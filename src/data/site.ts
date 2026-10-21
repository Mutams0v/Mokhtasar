export const site = {
  whatsapp: "966505845014",
  phoneDisplay: "+966 50 584 5014",
  email: "MokhtasarFitOut@gmail.com",
  instagram: "",
  tiktok: "",
  x: "",
  cr: "",
  vat: "",
  formEndpoint: "https://api.web3forms.com/submit",
  formAccessKey: "f54b95f2-1f6a-434f-bd42-f93b571691ca",
} as const;

/**
 * Promises that are written but not yet confirmed. Anything gated here stays
 * hidden on the site until the flag is switched to true.
 */
export const features = {
  // Waiting for confirmation with Abu Abdullah before publishing.
  shippingBreakageConfirmed: false,
} as const;
