//

//
export default function formStepButtonHandle(valid, direction, buttonClick) {
  buttonClick.value = true;
  if (valid) {
    //scroll to next section

    const $form = document.querySelector("form");

    const targetScrollPosition =
      window.innerHeight * direction + $form.scrollTop;

    console.log(targetScrollPosition);

    $form.scroll({
      top: targetScrollPosition,
      left: 0,
    });
  }
}
