const renderData = {
  activeLayer: "Layer1",
  layerSelectionExpanded: false,
  layers: [
    {
      type: "Layer",
      name: "Layer1",
      active: true,
      content: {
        shape: "square"
      }
    },
    {
      type: "Layer",
      name: "Layer2",
      active: false,
      content: {
        shape: "circle"
      }
    }
  ]
};

export default renderData;
