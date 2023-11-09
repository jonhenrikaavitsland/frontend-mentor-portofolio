export function getRegion(data) {
  const regions = [];
  for (let i = 0; i < data.length; i++) {
    if (!regions.includes(`${data[i].region}`)) {
      regions.push(data[i].region);
    }
  }
  return regions;
}
