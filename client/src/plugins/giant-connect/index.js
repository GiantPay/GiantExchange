import sortBy from "lodash/sortBy";

import giantConnect from "./giant-connect";
import mockProvider from "./mock-provider";

const findLowestPing = nodeList => {
  const [fastestNode] = sortBy(nodeList, "ping");
  return fastestNode;
};

if (process.env.NODE_ENV !== "production") {
  (async () => {
    const selectedNode = localStorage.getItem("nodeIp");
    if (!selectedNode) {
      const nodeList = await mockProvider();
      const pingedNodes = await giantConnect.getPingedList(nodeList);
      const fastestNode = findLowestPing(pingedNodes);

      giantConnect.use(fastestNode.ip);
    }
  })();
} else {
  // giantConnect.use(mainnetProvider("http://192.168.0.1"));
}

export default giantConnect;
