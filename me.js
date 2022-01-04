const course = document.querySelector("#course-id");
const rating = document.querySelector("#rating-id");
console.log("course", course);
console.log("rating", rating);
const addBtn = document.querySelector("#add-btn");
const userList = document.querySelector("#myList");
const clearInput = () => {
  course.value = "";
  rating.value = "";
};
addBtn.addEventListener("click", () => {
  //   console.log("i got cicked");
  const courseValue = course.value;
  const ratingValue = rating.value;

  if (
    courseValue.trim().length <= 0 ||
    ratingValue.trim().length <= 0 ||
    ratingValue > 5
  ) {
    alert("enter valid input");
    clearInput();
    return;
  }
  console.log("course and rating", courseValue, ratingValue);
  const listItem = document.createElement("ion-item");
  listItem.textContent = courseValue + " : " + ratingValue;
  userList
    .appendChild(listItem)
    .setAttribute("style", "font-weight: bold; font-size:2rem;");
  clearInput();
});
