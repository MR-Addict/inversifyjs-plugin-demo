export const GREETING_COUNT_KEY = "plugins.greeter.total";
export const GREETING_EVENT = "plugins.greeter.sent";

export interface GreetingPayload {
  message: string;
  total: number;
}
