export interface TestServ {
  id: "string";
  eventType: "MESSAGE";
  webhook: {
    url: "string";
    headers: {};
  };
  status: "ACTIVE";
  version: "v2";
  createdAt: "string";
  updatedAt: "string";
  criteria: {
    channel: "string";
    direction: "IN";
  };
}
