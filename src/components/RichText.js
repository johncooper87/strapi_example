import ReactMarkdown from 'react-markdown';
import Video from './Video';
import { api, parseResourceURL } from '../internals';

function Image({ src: _src, alt }) {
  if (!_src) return null;
  if (alt === 'video') return <Video src={_src} />;

  console.log(_src);
  try {
    const { src, width, height } = parseResourceURL(api + _src);

    return <span className="markdown-image-container">
      <img className="markdown-image" {...{ alt, src, style: { maxWidth: width, maxHeight: height } }} />
    </span>;

  } catch (err) {
    console.log(err);
    return null;
  }
}

const renderers = {
  image: Image
}

export default function RichText(props) {
  return <ReactMarkdown renderers={renderers} {...props} />;
}