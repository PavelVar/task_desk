export function findNum() {
  let numsList = new Array();
  let nums = document.querySelectorAll(".task-number");
  if (nums.length > 0) {
    nums.forEach((element) => {
      numsList.push(element.dataset.elid);
    });
    numsList.sort();
    // console.log(numsList);
    return Number(numsList.pop()) + 1;
  }
  return false;
}
