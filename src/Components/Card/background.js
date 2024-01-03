export const back = (type) => {
    let backgroundimg = "";
    switch (type) {
      case "normal":
        return (backgroundimg = "normalFrame.png");
      case "fighting":
        return (backgroundimg = "fightingFrame.png");
      case "flying":
        return (backgroundimg = "fliyingFrame.png");
      case "poison":
        return (backgroundimg = "poisonFrame.png");
      case "ground":
        return (backgroundimg = "groundFrame.png");
      case "rock":
        return (backgroundimg = "rockFrame.png");
      case "bug":
        return (backgroundimg = "bugFrame.png");
      case "ghost":
        return (backgroundimg = "ghostFrame.png");
      case "steel":
        return (backgroundimg = "steelFrame.png");
      case "fire":
        return (backgroundimg = "fireFrame.png");
      case "water":
        return (backgroundimg = "waterFrame.png");
      case "grass":
        return (backgroundimg = "grassFrame.png");
      case "electric":
        return (backgroundimg = "electricFrame.png");
      case "psychic":
        return (backgroundimg = "psychicFrame.png");
      case "ice":
        return (backgroundimg = "iceFrame.png");
      case "dragon":
        return (backgroundimg = "iceFrame.png");
      case "dark":
        return (backgroundimg = "darkFrame.png");
      case "fairy":
        return (backgroundimg = "fairyFrame.png");
      case "unknown":
        return (backgroundimg = "unKnwonFrame.png");
      case "shadow":
        return (backgroundimg = "shadowFrame.png");
      default:
        return (backgroundimg = "defaultFrame.png");
    }
  };