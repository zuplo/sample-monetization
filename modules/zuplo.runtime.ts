import {
  RuntimeExtensions,
  StripeMeteringPlugin,
  environment,
} from "@zuplo/runtime";

export function runtimeInit(runtime: RuntimeExtensions) {
  const stripe = new StripeMeteringPlugin({
    webhooks: {
      signingSecret: environment.STRIPE_WEBHOOK_SIGNING_SECRET,
    },
    zuploAccountApiKey: "",
    stripeSecretKey: environment.STRIPE_SECRET_KEY,
  });
  runtime.addPlugin(stripe);
}
