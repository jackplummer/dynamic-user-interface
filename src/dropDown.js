function toggleDropDown(nodelist) {
  for (let i = 0; i < nodelist.length; i+=1) {
    if (nodelist[i].style.visibility === 'hidden') {
      nodelist[i].style.visibility = "visible" // eslint-disable-line no-param-reassign
    } else {
      nodelist[i].style.visibility = "hidden" // eslint-disable-line no-param-reassign
    }
  }
}

function DropDown(button, menu) {
  button.addEventListener('click', () => {
    toggleDropDown(menu);
  });
};

exports.DropDown = DropDown;