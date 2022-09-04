const containObject = (list, item, identify) => {
  let isContains = false;
  for (const dataItem of list) {
    if (dataItem[identify] === item[identify]) {
      isContains = true;
      break;
    }
  }
  return isContains;
};

export {containObject};
