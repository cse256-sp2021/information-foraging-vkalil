import { HTMLLoader } from '../core/utils/html_loader';
import { Accordion } from './accordion';
import { doSomething } from './do-something';
//import { stickToIt } from './sticky';
import { HTMLContent, itemsToCache } from './html-imports';
import { Slideshow } from './slideshow';

// Put all function calls that need to be made on every page load inside the setupAll function body.
export function PutStudentPageLoadOperationsInsideThisStudentBody() {
    // TODO: Put all operations that you want to happen on ever page load in this function.
    // For example you could write: Sticky.setup()
    doSomething();
    sticky();
    //\\stickToIt();
}
export function sticky(){
    window.onscroll = function() {myFunction()};
  
  // Get the header
  var header = document.getElementById("main-menu-container");
  
  // Get the offset position of the navbar
  if(header === null){
      return
  }
  var sticky = header.offsetTop;
  
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if(header === null){
        return
    }
    console.log("running");
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      console.log("add sticky");
    } else {
      header.classList.remove("sticky");
      console.log("no need");
    }
  }
}
export async function setupAll() {
    await new Promise((r: any) => setTimeout(r, 100));
    console.log('reloading');
    Slideshow.setupAll();
    Accordion.setupAll();
    PutStudentPageLoadOperationsInsideThisStudentBody();
    console.log('reloaded');
}

itemsToCache.forEach((item: HTMLContent) => {
    HTMLLoader.cacheHTML(item.name, item.content);
});
(window as any).HTMLLoader = HTMLLoader;

console.log('dynamic-dom loaded');
// Do not touch this line, needed to reinitialize code in the dynamic-dom.ts setupAll function
window.addEventListener('newPageLoad', () => setupAll());
