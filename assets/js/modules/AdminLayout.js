/* Do not do stuff this way!! Use classes. */
/* This is an exception for changing layout in wp-admin */
const sidebarContainer = document.querySelector('#side-sortables');
const factionInfo = document.querySelector('#acf-group_5eca1ae029cfa');
if (factionInfo) {
  sidebarContainer.appendChild(factionInfo);
}
