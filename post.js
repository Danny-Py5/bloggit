import { renderRightNav } from './right-nav.js';
import headerFunctions from "./header.js";
import {renderFooter} from "./footer.js";
import { getRelatedPosts } from "./related-posts.js";
import { renderCommentSection } from "./comment.js";



headerFunctions();
monitorMainElement();

const relatedPostId = document.querySelector('.related-posts').getAttribute('data-related-post-id').toLocaleLowerCase();
getRelatedPosts(relatedPostId);

function monitorMainElement(){
    const mainElement = document.querySelector('main');
    const rightNaveElem = document.querySelector('.right-nav');
    console.log(rightNaveElem.innerHTML)
    if (!rightNaveElem.innerHTML){
        mainElement.style.gridTemplateColumns = '1fr';
    } else {
        mainElement.style.gridTemplateColumns = 
        '2fr 1fr';
    }
}

renderCommentSection();

renderFooter();