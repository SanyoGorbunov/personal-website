import htmlContent from './404.html';

export default function NotFound() {
    return (
        <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
    );
}