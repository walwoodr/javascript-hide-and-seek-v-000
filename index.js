function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var grandNode = document.querySelector('#grand-node');
  let current = grandNode;
  let next = [];
  while (current) {
    if (current.children[0] === undefined) {
      return current
    } else {
      next.push(current.children[0])
    }
    current = next.shift()
  }
  return null
}

function increaseRankBy(n) {
  // find all items inside the two ul.ranked-list
  var rankedItems = document.querySelectorAll('ul.ranked-list li')
  // iterate over that node list and increase by n
  rankedItems.forEach (item => {
    item.innerHTML = parseInt(item.innerHTML, 10) + n;
  })
}
