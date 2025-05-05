/**
 * Esta funcion elimina todos los hijos de un elemento
 * @param { HTMLElement } parentElement
 */
export default function removeAllChilds(parentElement) {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}